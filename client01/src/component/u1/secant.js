import React, { Component } from 'react'
import '../../App.css'
import { create, all } from 'mathjs'
import axios from 'axios';
import { Input, Checkbox } from 'antd';

import { Button } from 'reactstrap';
import {
    AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Table } from 'antd';
import Graph from '../Graph'

import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn, MDBFooter } from "mdbreact";
import Footer from '../foot'
const math = create(all)


const columns= [
    {
        title: 'Iteration',
        dataIndex: 'iteration',
        width: '100px'
    },
    {
        title: 'X0',
        dataIndex: 'x0',
    },
    {
        title: 'X1',
        dataIndex: 'x1',
    },
    {
        title: 'error',
        dataIndex: 'error',
    },
]
var data= []

export default class secant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setTable: false,
            setGarph: false,
            x0: '',
            x1: '',
            fx: '',
            /*this.state.data.push({
                iteration: i,
                xr: xr,
                xl: xl,
                xm: xm,
                fxm: fxm,
                eror: e,
            });*/
            

        };

        this.handleChangefx = this.handleChangefx.bind(this);
        this.handleChangex0 = this.handleChangex0.bind(this);
        this.onChange = this.onChange.bind(this);
    }


    onChange(e) {
        console.log('this.state.persons')
        axios.get(`http://192.168.99.100:8080/show/secant`)
            .then(res => {
                const datadb = res.data;

                this.setState({
                    datadb,
                    fx: datadb[0].fx,
                    x0: datadb[0].x0,
                    x1: datadb[0].x1,
                });

                console.log(this.state.datadb)

            })
    }
    handleChangefx(event) {
        this.setState({ fx: event.target.value });
    }
    handleChangex0(event) {
        this.setState({ x0: event.target.value });
    }
    handleChangex1(event) {
        this.setState({ x1: event.target.value });
    }
    fx(X) {
        var expr = math.compile(this.state.fx);
        var scope = { x: parseFloat(X) };

        return parseFloat(expr.evaluate(scope)).toFixed(6);
    }
    funcDiff(X) {
        var expr = math.derivative(this.state.fx, 'x');
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }
    eror(x2, x1) {
        let e = Math.abs((x2 - x1) / x2)
        return e.toFixed(6)
    }
    newton(x1,x2) {
        if (this.state.fx === '' || x0 === '') {
            alert('Ohh !, please enter correct information')
            window.location.reload()
        }
        else {
             
            var n = 0
            var e = 1
            var x0 = x2 - (((this.fx(x2)) * (x1 - x2)) / (this.fx(x1) - this.fx(x2)));
            // console.log
            //console.log(x0);
            data.push({
                iteration: n,
                x0: x1.toFixed(6),
                x1: x2.toFixed(6),
                error: ''
            })
            x1 = x2;
            x2 = x0;
            do {
                x0 = x2 - (((this.fx(x2)) * (x1 - x2)) / (this.fx(x1) - this.fx(x2)));
                e = this.eror(x0,x2)
                data.push({
                    iteration: n + 1,
                    x0: x1.toFixed(6),
                    x1: x2.toFixed(6),
                    error: e
                })
                x1 = x2;
                x2 = x0;
                n++;
            } while (e > 0.000001)
           console.log(data)
            this.state.setTable = true;
            this.state.setGarph = true;
            this.forceUpdate()
        }
    }

    render() {

        return (
            <div>

                <div style={{ color: '' }} className="wallpaper">
                    <MDBRow>
                        <MDBCol md="2">.col-md-3</MDBCol>
                        <MDBCol md="8">
                            <MDBContainer className="mt-5 text-center">
                                <MDBRow>
                                    <MDBCol>
                                        <MDBJumbotron className="text-center">
                                            <MDBCardTitle className="card-title h4 pb-2">
                                                <strong>Secant Method</strong>
                                            </MDBCardTitle>

                                            <div class="embed-responsive embed-responsive-16by9">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/_MfjXOLUnyw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                            <MDBCardBody>
                                                <MDBCardTitle className="indigo-text h5 m-4">

                                                </MDBCardTitle>
                                                <MDBCardText>
                                                    Secant Method Although the Newton-Raphson method is very powerfull to solve non-linear equations, evaluating of the function derivative is the major difficulty of this method.
                                                    To overcome this deficiency, the secant method starts the iteration by employing two starting points and approximates the function derivative by evaluating of the slope of the line passing through these points.
                                                    The secant method has been shown in Fig. 1. As it is illustrated in Fig. 1, the new guess of the root of the function f(x) can be found as follows: x = f(x1)(x0-x1) / f(x0)-f(x1)
              </MDBCardText>

                                                <MDBCol className="d-flex justify-content-center mt-4" md="12">
                                                    <MDBCol md="3" className="d-flex justify-content-around">
                                                        <a href="#"><MDBIcon
                                                            fab
                                                            icon="linkedin-in"
                                                            className="grey-text"
                                                            size="lg"
                                                        /></a>
                                                        <a href="#"><MDBIcon
                                                            fab
                                                            icon="twitter"
                                                            className="grey-text"
                                                            size="lg"
                                                        /></a>
                                                        <a href="#"><MDBIcon
                                                            fab
                                                            icon="facebook-f"
                                                            className="grey-text"
                                                            size="lg"
                                                        /></a>
                                                    </MDBCol>
                                                </MDBCol>

                                            </MDBCardBody>
                                        </MDBJumbotron>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                            <MDBContainer className="mt-5 text-center">
                                <MDBRow>
                                    <MDBCol>
                                        <MDBJumbotron className="text-center">
                                            <MDBCardTitle className="card-title h4 pb-2">
                                                <strong>Example</strong>
                                            </MDBCardTitle>


                                            <MDBCardBody>
                                                <MDBCardTitle className="indigo-text h5 m-4">

                                                </MDBCardTitle>
                                                <MDBCardText>
                                                    <from>
                                                        <h3 style={{ paddingBottom: '50px' }}>Secant Method</h3>
                                                        <div style={{ marginBottom: 16 }}>
                                                            fx : <Input style={{ width: 'auto', height: '50px' }} placeholder="pleas enter" value={this.state.fx} onChange={this.handleChangefx} />
                                                        </div>
                                                        <div style={{ marginBottom: 16 }}>
                                                            x<sub>0</sub> : <Input type="number" style={{ width: 'auto' }} step={1} value={this.state.x0} onChange={this.handleChangex0} />
                                                        </div>
                                                        <div style={{ marginBottom: 16 }}>
                                                            x<sub>1</sub> : <Input type="number" style={{ width: 'auto' }} step={1} value={this.state.x1} onChange={this.handleChangex1} />
                                                        </div>
                                                        {/*<Button style={{ margin: '50px' }} onClick={this.handleSubmit} onClick={() => this.bisection(parseFloat(this.state.xl), parseFloat(this.state.xr), parseInt(this.state.iter))}>Submit</Button>*/}
                                                        <MDBBtn style={{ margin: '50px' }} onClick={this.handleSubmit} onClick={() => this.newton ( parseFloat(this.state.x0) ,parseFloat(this.state.x1) )} gradient="peach">Submit</MDBBtn>
                                                        <Checkbox onChange={this.onChange}>Auto</Checkbox>
                                                        <br /><ttgraph />
                                                    </from>
                                                    {(this.state.setTable === true) ?
                                                        <Table style={{ margin: '50px' }} columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} style={{ width: 'auto' }} /> : null
                                                    }
                                                    {(this.state.setGarph === true) ?
                                                        <Graph data={this.state.fx} />
                                                        : null
                                                    }
                                                </MDBCardText>

                                                <MDBCol className="d-flex justify-content-center mt-4" md="12">
                                                    <MDBCol md="3" className="d-flex justify-content-around">
                                                        <a href="#"><MDBIcon
                                                            fab
                                                            icon="linkedin-in"
                                                            className="grey-text"
                                                            size="lg"
                                                        /></a>
                                                        <a href="#"><MDBIcon
                                                            fab
                                                            icon="twitter"
                                                            className="grey-text"
                                                            size="lg"
                                                        /></a>
                                                        <a href="#"><MDBIcon
                                                            fab
                                                            icon="facebook-f"
                                                            className="grey-text"
                                                            size="lg"
                                                        /></a>
                                                    </MDBCol>
                                                </MDBCol>

                                            </MDBCardBody>
                                        </MDBJumbotron>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>

                        </MDBCol>
                        <MDBCol md="2">.col-md-4</MDBCol>
                    </MDBRow>
                    <Footer />
                </div>

            </div>
        );
    }
}
