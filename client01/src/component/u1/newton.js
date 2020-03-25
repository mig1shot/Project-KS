import React, { Component } from 'react'
import '../../App.css'
import { create, all } from 'mathjs'
import axios from 'axios';

import { Container, Row, Col, Label } from 'antd'
import { Form, Input, Checkbox } from 'antd';
import { Button } from 'reactstrap';
import {
    AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Table } from 'antd';
import Graph from '../Graph' 

import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn, MDBFooter } from "mdbreact";
import Footer from '../foot'
const math = create(all)
//(x^2)-7
// 2.0


export default class newton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setTable: false,
            setGarph: false,
            x0: '',
            fx: '',
            /*this.state.data.push({
                iteration: i,
                xr: xr,
                xl: xl,
                xm: xm,
                fxm: fxm,
                eror: e,
            });*/
            columns: [
                {
                    title: 'Iteration',
                    dataIndex: 'iteration',
                    width: '100px'
                },
                {
                    title: 'X',
                    dataIndex: 'x',
                },
                {
                    title: 'eror',
                    dataIndex: 'eror',
                },
            ],
            data: [],


        };

        this.handleChangefx = this.handleChangefx.bind(this);
        this.handleChangex0 = this.handleChangex0.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        console.log('this.state.persons')
        axios.get(`http://192.168.99.100:8080/show/newton`)
            .then(res => {
                const datadb = res.data;

                this.setState({
                    datadb,
                    fx: datadb[0].fx,
                    x0: datadb[0].x0,
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
        let e = Math.abs(x2 - x1) / x2
        return e.toFixed(6)
    }
    newton(x0) {
        if (this.state.fx === '' || x0 === '') {
            alert('Ohh !, please enter correct information')
            window.location.reload()
        }
        else {


            var x2, e = 1, x1 = x0, i = 0, c = 0, data = []
            data['x'] = []
            data['e'] = []

            data['x'][c] = x0
            data['e'][c] = ''
            c++
            while (e > 0.000001 && i < 100) {
                x2 = x1 - (this.fx(x1) / this.funcDiff(x1))
                x2 = x2.toFixed(6)
                console.log(this.fx(x1), this.funcDiff(x1))
                if (i > 0) {
                    e = this.eror(x2, x1)
                    data['x'][c] = x2
                    data['e'][c] = e
                    c++
                }
                x1 = x2
                i++

            }
            console.log(data)
            for (let j = 0; j < c; j++) {
                this.state.data.push({
                    iteration: j,
                    x: data['x'][j],
                    eror: data['e'][j]
                })
            }
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
                                                <strong>Newton method</strong>
                                            </MDBCardTitle>

                                            <div class="embed-responsive embed-responsive-16by9">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/PIPiv6gn_Ls" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                            </div>
                                            <MDBCardBody>
                                                <MDBCardTitle className="indigo-text h5 m-4">
                                                  
              </MDBCardTitle>
                                                <MDBCardText>
                                                    Newton-Raphson One of the most famous methods for solving non-linear equations is the Newton-Raphson method.
                                                    The Newton-Raphson method is a kind of open method which employs Taylor series for estimation the position of the root.
                                                    For arbitrary function f(x), the Taylor series around a stsrting point can be written as follows:
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
                                                        <h3 style={{ paddingBottom: '50px' }}>Newton METHOD</h3>
                                                        <div style={{ marginBottom: 16 }}>
                                                            fx : <Input style={{ width: 'auto', height: '50px' }} placeholder="pleas enter" value={this.state.fx} onChange={this.handleChangefx} />
                                                        </div>
                                                        <div style={{ marginBottom: 16 }}>
                                                            x0 : <Input type="number" style={{ width: 'auto' }} step={1} value={this.state.x0} onChange={this.handleChangex0} />
                                                        </div>
                                                        {/*<Button style={{ margin: '50px' }} onClick={this.handleSubmit} onClick={() => this.bisection(parseFloat(this.state.xl), parseFloat(this.state.xr), parseInt(this.state.iter))}>Submit</Button>*/}
                                                        <MDBBtn style={{ margin: '50px' }} onClick={this.handleSubmit} onClick={() => this.newton(parseFloat(this.state.x0))} gradient="peach">Submit</MDBBtn>
                                                        <Checkbox onChange={this.onChange}>Auto</Checkbox>
                                                    </from>
                                                    {(this.state.setTable === true) ?
                                                        <Table style={{ margin: '50px' }} columns={this.state.columns} dataSource={this.state.data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} style={{ width: 'auto' }} /> : null
                                                    }
                                                     {(this.state.setGarph === true) ?
                                                        <Graph data={this.state.fx}/>
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
