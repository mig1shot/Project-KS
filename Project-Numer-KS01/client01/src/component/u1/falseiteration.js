import React, { Component } from 'react'
import '../../App.css'
import { compile } from 'mathjs';
import axios from 'axios';

import { Container, Row, Col, Label } from 'antd'
import { Input,  Checkbox } from 'antd';
import { Button } from 'reactstrap';
import {
    AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Table } from 'antd';

import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn, MDBFooter } from "mdbreact";
import Footer from '../foot'
import Graph from '../Graph' 


export default class falseiteration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setTable: false,
            xl: '',
            xr: '',
            fx: '',
            data: [],
            columns: [
                {
                    title: 'Iteration',
                    dataIndex: 'iteration',
                    width: '100px'
                },
                {
                    title: 'XL',
                    dataIndex: 'xl',
                },
                {
                    title: 'XR',
                    dataIndex: 'xr',
                },
                {
                    title: 'XM',
                    dataIndex: 'xm',
                },
                {
                    title: 'eror',
                    dataIndex: 'eror',
                },
            ],

        };


        this.handleChangeFX = this.handleChangeFX.bind(this);
        this.handleChangeXL = this.handleChangeXL.bind(this);
        this.handleChangeXR = this.handleChangeXR.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

onChange(e) {
    console.log('this.state.persons')
    axios.get(`http://localhost:4000/show/false`)
      .then(res => {
        const datadb = res.data;
        
        this.setState({ 
            datadb,
            fx:datadb[0].fx,
            xl:datadb[0].xl,
            xr:datadb[0].xr,
        });
        
        console.log(this.state.datadb)
        
      })
  }
    handleChangeXL(event) {
        this.setState({ xl: event.target.value });
    }
    handleChangeXR(event) {
        this.setState({ xr: event.target.value });
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
        let e = Math.abs(x2 - x1) / x2
        return e.toFixed(6)
    }
    findxm(xl, xr, fxl, fxr) {
        var xm = ((xl * fxr) - (xr * fxl)) / (fxr - fxl)
        return xm.toFixed(6)
    }
    falseiter(xl, xr) {
        if(this.state.fx==='' || xl==='' ||xr===''){
            alert('Ohh !, please enter correct information')
             window.location.reload()
        }
        else{
        var x1, fxl, xm, fxr, x2, e = 100, fxm, i = 0
        while (e > 0.000001 && i < 100) {

            x1 = xm
            fxl = this.fx(xl)
            fxr = this.fx(xr)
            xm = this.findxm(xl, xr, fxl, fxr)
            fxm = this.fx(xm)
            console.log(xl, xr)
            console.log('fxl= ', fxl, 'fxr = ', fxr)
            console.log('xm = ', xm)
            console.log('fxm = ', fxm)
            if (i > 0) {
                x2 = xm
                e = this.eror(x2, x1)
                console.log('e = ', e)
                this.state.data.push({
                    iteration: i,
                    xr: xr,
                    xl: xl,
                    xm: xm,
                    fxm: fxm,
                    eror: e,
                });
            }else{
                this.state.data.push({
                iteration: i,
                xr: xr,
                xl: xl,
                xm: xm,
                fxm: fxm,
                eror: '-',
            });
            }
            
            if (fxm * fxr > 0) {
                xr = parseFloat(xm)
            } else {
                xl = parseFloat(xm)
            }

            i++

        }
        console.log(this.state.data)
        this.state.setTable = true
        this.state.setGarph = true

        console.log(this.state.setTable)
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
                                                <strong>FALSEITERATION METHOD</strong>
                                            </MDBCardTitle>

                                            <div class="embed-responsive embed-responsive-16by9">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/pg1I8AG59Ik" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                            <MDBCardBody>
                                                <MDBCardTitle className="indigo-text h5 m-4">
                                                 
          </MDBCardTitle>
                                                <MDBCardText>
                                                    The false-position method is a modification on the bisection method: if it is known that the root lies on [a, b], 
                                                    then it is reasonable that we can approximate the function on the interval by interpolating the points (a, f(a)) and (b, f(b)). 
                                                    In that case, why not use the root of this linear interpolation as our next approximation to the root?
        
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
                                                <strong>EXAMPLE</strong>
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
                                                            xl : <Input type="number" style={{ width: 'auto' }} step={1} value={this.state.xl} onChange={this.handleChangeXL} />
                                                        </div>
                                                        <div style={{ marginBottom: 16 }}>
                                                            xr : <Input type="number" style={{ width: 'auto' }} step={1} value={this.state.xr} onChange={this.handleChangeXR} />
                                                        </div>

                                                        {/*<Button style={{ margin: '50px' }} onClick={this.handleSubmit} onClick={() => this.bisection(parseFloat(this.state.xl), parseFloat(this.state.xr), parseInt(this.state.iter))}>Submit</Button>*/}
                                                        <MDBBtn style={{ margin: '50px' }} onClick={() => this.falseiter(parseFloat(this.state.xl), parseFloat(this.state.xr))} gradient="peach">Submit</MDBBtn>
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
