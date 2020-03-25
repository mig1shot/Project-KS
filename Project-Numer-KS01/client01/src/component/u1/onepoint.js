import React, { Component } from 'react'
import '../../App.css'
import { compile } from 'mathjs';
import axios from 'axios';

import { Container, Row, Col, Label } from 'antd'
import { Input, Checkbox } from 'antd';
import { Button } from 'reactstrap';
import {
    AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Table } from 'antd';
import Graph from '../Graph' 

import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn, MDBFooter } from "mdbreact";
import Footer from '../foot'
//2-e^(x/4)
const columns = [
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
];
var data = [];

export default class onepoint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x0: '',
            fx: '',
            iter: '',
            setTable: false,
            setGarph: false,
        };

        this.handleChangeIter = this.handleChangeIter.bind(this);
        this.handleChangeFX = this.handleChangeFX.bind(this);
        this.handleChangeX0 = this.handleChangeX0.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        console.log('this.state.persons')
        axios.get(`http://localhost:4000/show/onepoint`)
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
    handleChangeIter(event) {
        this.setState({ iter: event.target.value });
    }
    handleChangeX0(event) {
        this.setState({ x0: event.target.value });
    }

    handleChangeFX(event) {
        this.setState({ fx: event.target.value });
    }
    handleSubmit(event) {

        event.preventDefault();


    }
    fx(X) {
        var expr = compile(this.state.fx);
        var scope = { x: parseFloat(X) };

        return expr.evaluate(scope).toFixed(6);
    }
    eror(x2, x1) {
        let e = Math.abs((x2 - x1) / x2)
        return e.toFixed(6)
    }
    onepoint(x0) {
        if (this.state.fx === '' || x0 === '') {
            alert('Ohh !, please enter correct information')
            window.location.reload()
        }
        else {


            var x1, x2, e = 1, i = 0
            while (e > 0.000001 && i < 100) {
                if (i == 0) {
                    x2 = this.fx(x0)
                    data.push({
                        iteration: i,
                        x: x2,
                        eror: ''
                    })
                }
                else {
                    x2 = this.fx(x1)
                    e = this.eror(x2, x1)
                    data.push({
                        iteration: i,
                        x: x2,
                        eror: e
                    })
                }
                x1 = x2;
                i++

            }
            console.log(data)
             this.state.setTable = true;
            //this.state.setGarph = true

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
                                                <strong>Onepoint Iteration Method</strong>
                                            </MDBCardTitle>

                                            <div class="embed-responsive embed-responsive-16by9">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/OLqdJMjzib8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                            </div>
                                            <MDBCardBody>
                                                <MDBCardTitle className="indigo-text h5 m-4">
                                                    
          </MDBCardTitle>
                                                <MDBCardText>
                                                    ONEPOINT METHOD The simple one point iteration method is a kind of open methods. In this method the root of equation isn’t searched within an interval, but it is searched by using a single start point in an open area. Different to bracketing methods which are always convergent, the open methods can be convergent or
                                                    divergent, but when they are convergent, their convergent speed is usually better than bracketing methods.
                                                    Assume f(x) is an arbitrary function of x. It is clear that the roots of function f(x) can be found by solving the equation
                                                    f(x)=0. Using some mathematical manipulation, this equation can be rewritten in the form of x=g(x). Choosing a start point, simple one point iteration method employs this equation for finding a new guess of the root as it is illustrated in Fig. 1. That means:xi+1 = g(xi)
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

                                                        <div style={{ marginBottom: 16 }}>
                                                            fx : <Input style={{ width: 'auto', height: '50px' }} placeholder="pleas enter" value={this.state.fx} onChange={this.handleChangeFX} />
                                                        </div>
                                                        <div style={{ marginBottom: 16 }}>
                                                            x0 : <Input type="number" style={{ width: 'auto' }} step={1} value={this.state.x0} onChange={this.handleChangeX0} />
                                                        </div>

                                                        {/*<Button style={{ margin: '50px' }} onClick={this.handleSubmit} onClick={() => this.bisection(parseFloat(this.state.xl), parseFloat(this.state.xr), parseInt(this.state.iter))}>Submit</Button>*/}
                                                        <MDBBtn style={{ margin: '50px' }} onClick={this.handleSubmit} onClick={() => this.onepoint(parseFloat(this.state.x0))} gradient="peach">Submit</MDBBtn>
                                                        <Checkbox onChange={this.onChange}>Auto</Checkbox>
                                                    </from>
                                                    {(this.state.setTable === true) ?
                                                        <Table style={{ margin: '50px' }} columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} style={{ width: 'auto' }} /> : null
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
