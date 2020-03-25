import React, { Component } from 'react'
import '../../App.css'
import { create, all } from 'mathjs'
import axios from 'axios';

import { Input, Checkbox } from 'antd';
import {
    AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Table } from 'antd';

import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn, MDBFooter } from "mdbreact";
import Footer from '../foot'
const math = create(all)
//log(x)/log(e)
//2
//4
//3

export default class taylor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setTable: false,
            setGarph: false,
            x: '',
            x0: '',
            fx: '',
            n: '',
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
        this.handleChangex = this.handleChangex.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        console.log('this.state.persons')
        axios.get(`http://localhost:8080/show/taylor`)
            .then(res => {
                const datadb = res.data;

                this.setState({
                    datadb,
                    fx: datadb[0].fx,
                    x: datadb[0].x,
                    x0: datadb[0].x0,
                    n:datadb[0].n
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
    handleChangex(event) {
        this.setState({ x: event.target.value });
    }
    handleChangen(event) {
        this.setState({ n: event.target.value });
    }
    fx(X) {
        var expr = math.compile(this.state.fx);
        var scope = { x: parseFloat(X) };

        return parseFloat(expr.evaluate(scope)).toFixed(6);
    }
    funcDiff(X, i) {
        var fx = this.state.fx
        
            var expr = math.derivative(fx,'x');
            console.log('fx', fx)
        let scope = { x: parseFloat(X) };
        fx = expr.eval(scope)
        
        return fx;

    }
    eror(x2, x1) {
        let e = Math.abs(x2 - x1) / x2
        return e.toFixed(6)
    }
    taylor(x0, x, n) {
        if (this.state.fx === '' || x0 === '' || x === '' ||n === '') {
            alert('Ohh !, please enter correct information')
            window.location.reload()
        }
        else{
   
        var i = 0, sum = 0
        for (i = 0; i <= n; i++) {
            sum += this.funcDiff(x0, i) * math.pow((x - x0), i) / math.factorial(i)
             console.log(sum)
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
                                                <strong>Taylor series</strong>
                                            </MDBCardTitle>

                                            <div class="embed-responsive embed-responsive-16by9">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/3d6DsjIBzJ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                                </div>
                                            <MDBCardBody>
                                                <MDBCardTitle className="indigo-text h5 m-4">
                                                    ...
                                          </MDBCardTitle>
                                                <MDBCardText>
                                                    Taylor Series is an expansion of some function into an infinite sum of terms, where each term has a larger exponent like x, x2, x3, etc.
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
                         { /* <MDBContainer className="mt-5 text-center">
                                <MDBRow>
                                    <MDBCol>
                                        <MDBJumbotron className="text-center">
                                            <MDBCardTitle className="card-title h4 pb-2">
                                                <strong>Example</strong>
                                            </MDBCardTitle>


                                            <MDBCardBody>
                                                <MDBCardTitle className="indigo-text h5 m-4">
                                                    ...
                                                </MDBCardTitle>
                                                <MDBCardText>
                                                    <from>
                                                        <h3 style={{ paddingBottom: '50px' }}>Taylor series</h3>
                                                        <div style={{ marginBottom: 16 }}>
                                                            fx : <Input style={{ width: 'auto', height: '50px' }} placeholder="pleas enter" value={this.state.fx} onChange={this.handleChangefx} />
                                                        </div>
                                                        <div style={{ marginBottom: 16 }}>
                                                            x<sub>0</sub> : <Input type="number" style={{ width: 'auto' }} step={1} value={this.state.x0} onChange={this.handleChangex0} />
                                                        </div>
                                                        <div style={{ marginBottom: 16 }}>
                                                            x : <Input type="number" style={{ width: 'auto' }} step={1} value={this.state.x} onChange={this.handleChangex} />
                                                        </div>

                                                        <div style={{ marginBottom: 16 }}>
                                                            n : <Input type="number" style={{ width: 'auto' }} step={1} value={this.state.n} onChange={this.handleChangen} />
                                                        </div>
                                                        <MDBBtn style={{ margin: '50px' }} onClick={this.handleSubmit} onClick={() => this.taylor(parseFloat(this.state.x0), parseFloat(this.state.x), parseFloat(this.state.n))} gradient="peach">Submit</MDBBtn>
                                                        <Checkbox onChange={this.onChange}>Auto</Checkbox>
                                                    </from>
                                                  
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
                            </MDBContainer> */ }
                        </MDBCol>
                        <MDBCol md="2">.col-md-4</MDBCol> 
                    </MDBRow>

                    <Footer />


                </div>

            </div>
        );
    }
}
