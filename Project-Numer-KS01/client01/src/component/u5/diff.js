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

import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn, MDBFooter } from "mdbreact";
import Footer from '../foot'
const Math = create(all)


const columns = [
    {
        title: 'variable',
        dataIndex: 'variable',
    },
    {
        title: 'value',
        dataIndex: 'value',
    }
]
var data = [];

export default class diff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: ' please choose ',
            lv: '',
            opp: '',
            fx: '',
            x: '',
            orderh: '',
            h: '',
            y: '',
            aws: false
        }
        this.handle = this.handle.bind(this)
        this.onChange = this.onChange.bind(this)

    }
    onChange(e) {
        console.log('this.state.persons')
        axios.get(`http://localhost:4000/show/diff`)
            .then(res => {
                const datadb = res.data;

                this.setState({
                    datadb,
                    fx: datadb[0].fx,
                    x: datadb[0].x,
                    show: datadb[0].show,
                    lv: datadb[0].lv,
                    opp: datadb[0].opp,
                    orderh: datadb[0].orderh,
                    h: datadb[0].h,
                });

                console.log(this.state.datadb)

            })
    }
    handle(event) {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    submit(event) {
        event.preventDefault();
    }
    fx(X) {

        var expr = Math.compile(this.state.fx);
        var scope = { x: parseFloat(X) };
        return parseFloat(expr.evaluate(scope).toFixed(6));
    }
    different() {
        const lv = this.state.lv
        const orderh = this.state.orderh
        const h = parseFloat(this.state.h)
        const opp = this.state.opp
        const x = parseFloat(this.state.x)
        var y
        if (lv === '' || orderh === '' || h === '' || opp === '' || x === '') {
            alert('Ohh !, please enter correct information')
            window.location.reload()
        }
        else {

            console.log(lv, orderh, h, opp, x)
            if (opp === 'Forword') { // forword
                if (orderh === 'h') { // order h
                    if (lv === "f'") {
                        y = (this.fx(x + (h * 1)) - this.fx(x)) / h
                    }
                    else if (lv === "f''") {
                        y = (this.fx(x + (2 * h)) - 2 * this.fx(x + (1 * h)) + this.fx(x)) / Math.pow(h, 2)
                    }
                    else if (lv === "f'''") {
                        y = (this.fx(x + (3 * h)) - 3 * this.fx(x + (2 * h)) + 3 * this.fx(x + (1 * h)) - this.fx(x)) / Math.pow(h, 3)
                        console.log(this.fx(x + (3 * h)), 3 * this.fx(x + (2 * h)), 3 * this.fx(x + (1 * h)), this.fx(x), Math.pow(h, 3))
                    }
                    else if (lv === "f''''") {
                        y = (this.fx(x + (4 * h)) - 4 * this.fx(x + (3 * h)) + 6 * this.fx(x + (2 * h)) - 4 * this.fx(x + (1 * h)) + this.fx(x)) / Math.pow(h, 4)
                    }
                }
                else if (orderh === 'h^2') { //order h2
                    if (lv === "f'") {
                        y = (-this.fx(x + (2 * h)) + 4 * this.fx(x + (1 * h)) - 3 * this.fx(x)) / (2 * h)
                    }
                    else if (lv === "f''") {
                        y = (-this.fx(x + (3 * h)) + 4 * this.fx(x + (2 * h)) - 5 * this.fx(x + (1 * h)) + 2 * this.fx(x)) / Math.pow(h, 2)
                    }
                    else if (lv === "f'''") {
                        y = (-3 * this.fx(x + (4 * h)) + 14 * this.fx(x + (3 * h)) - 24 * this.fx(x + (2 * h)) + 18 * this.fx(x + (1 * h)) - 5 * this.fx(x)) / (2 * Math.pow(h, 3))
                    }
                    else if (lv === "f''''") {
                        y = (-2 * this.fx(x + (5 * h)) + 11 * this.fx(x + (4 * h)) - 24 * this.fx(x + (3 * h)) + 26 * this.fx(x + (2 * h)) - 14 * this.fx(x + (1 * h)) + 3 * this.fx(x)) / Math.pow(h, 4)
                    }
                }
            }

            else if (opp === 'Backword') {
                if (orderh === 'h') {
                    if (lv === "f'") {
                        y = (this.fx(x) - this.fx(x - (1 * h))) / h

                    }
                    else if (lv === "f''") {
                        y = (this.fx(x) - 2 * this.fx(x - (1 * h)) + this.fx(x - (2 * h))) / Math.pow(h, 2)

                    }
                    else if (lv === "f'''") {
                        y = (this.fx(x) - 3 * this.fx(x - (1 * h)) + 3 * this.fx(x - (2 * h)) - this.fx(x - (3 * h))) / Math.pow(h, 3)

                    }
                    else if (lv === "f''''") {
                        y = (this.fx(x) - 4 * this.fx(x - (1 * h)) + 6 * this.fx(x - (2 * h)) - 4 * this.fx(x - (3 * h)) + this.fx(x - (4 * h))) / Math.pow(h, 4)

                    }
                }
                else if (orderh === 'h^2') {
                    if (lv === "f'") {
                        y = (3 * this.fx(x) - 4 * this.fx(x - (1 * h)) + this.fx(x - (2 * h))) / (2 * h)
                    }
                    else if (lv === "f''") {
                        y = (2 * this.fx(x) - 5 * this.fx(x - (1 * h)) + 4 * this.fx(x - (2 * h)) - this.fx(x - (3 * h))) / Math.pow(h, 2)
                    }
                    else if (lv === "f'''") {
                        y = (5 * this.fx(x) - 18 * this.fx(x - (1 * h)) + 24 * this.fx(x - (2 * h)) - 14 * this.fx(x - (3 * h)) + 3 * this.fx(x - (3 * h))) / (2 * Math.pow(h, 3))

                    }
                    else if (lv === "f''''") {
                        y = (3 * this.fx(x) - 14 * this.fx(x - (1 * h)) + 26 * this.fx(x - (2 * h)) - 24 * this.fx(x - (3 * h)) + 11 * this.fx(x - (4 * h)) - 2 * this.fx(x - (5 * h))) / Math.pow(h, 4)

                    }
                }
            }
            else if (opp === 'Central') {
                if (orderh === 'h') {
                    if (lv === "f'") {
                        y = (this.fx(x + (1 * h)) - this.fx(x - (1 * h))) / (2 * h)
                    }
                    else if (lv === "f''") {
                        y = (this.fx(x + (1 * h)) - 2 * this.fx(x) + this.fx(x - (1 * h))) / Math.pow(h, 2)
                    }
                    else if (lv === "f'''") {
                        y = (this.fx(x + (2 * h)) - 2 * this.fx(x + (1 * h)) + 2 * this.fx(x - (1 * h)) - this.fx(x - (2 * h))) / (2 * Math.pow(h, 3))
                    }
                    else if (lv === "f''''") {
                        y = (this.fx(x + (2 * h)) - 4 * this.fx(x + (1 * h)) + 6 * this.fx(x) - 4 * this.fx(x - (1 * h)) + this.fx(x - (2 * h))) / Math.pow(h, 4)
                    }
                }
                else if (orderh === 'h^2') {
                    if (lv === "f'") {
                        y = (-this.fx(x + (2 * h)) + 8 * this.fx(x + (1 * h)) - 8 * this.fx(x - (1 * h)) + this.fx(x - (2 * h))) / (12 * h)
                    }
                    else if (lv === "f''") {
                        y = (-this.fx(x + (2 * h)) + 16 * this.fx(x + (1 * h)) - 30 * this.fx(x) + 16 * this.fx(x - (1 * h)) - this.fx(x - (2 * h))) / (12 * Math.pow(h, 2))
                    }
                    else if (lv === "f'''") {
                        y = (-this.fx(x + (3 * h)) + 8 * this.fx(x + (2 * h)) - 13 * this.fx(x + (1 * h)) + 13 * this.fx(x - (1 * h)) - 8 * this.fx(x - (2 * h)) + this.fx(x - (3 * h))) / (8 * Math.pow(h, 3))
                    }
                    else if (lv === "f''''") {
                        y = (-this.fx(x + (3 * h)) + 12 * this.fx(x + (2 * h)) - 39 * this.fx(x + (1 * h)) + 56 * this.fx(x) - 39 * this.fx(x - (1 * h)) + 12 * this.fx(x - (2 * h)) + this.fx(x - (3 * h))) / (6 * Math.pow(h, 4))
                    }
                }
            }
            data.push({
                variable: 'y',
                value: y
            })
            this.state.y = parseFloat(y)
            this.state.aws = true
            this.forceUpdate()
        }
    }
    render() {
        const p = '____'
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
                                                <strong>Numerical Differential</strong>
                                            </MDBCardTitle>

                                            <div class="embed-responsive embed-responsive-16by9">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/zM2wim4JZd0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                            </div>
                                            <MDBCardBody>
                                                <MDBCardTitle className="indigo-text h5 m-4">

                                                </MDBCardTitle>
                                                <MDBCardText>
                                                    In numerical analysis, numerical differentiation describes algorithms for estimating the derivative of a mathematical
                                                    function or function subroutine using values of the function and perhaps other knowledge about the function.
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
                                                    <h5>problem : method {(this.state.opp) ? this.state.opp : p}
                                             &nbsp; order  {(this.state.orderh) ? this.state.orderh : p}
                                             &nbsp; find {(this.state.lv) ? this.state.lv + "(" + this.state.x + ")" : p}
                                             &nbsp; fx {(this.state.fx) ? "= " + this.state.fx : p}
                                             &nbsp; h {(this.state.h) ? "= " + this.state.h : p}
                                                    </h5> <br />
                                                    <from onChange={this.handle}>
                                                        <div style={{ marginBottom: 16 }}>
                                                            method :
                                                    <select name="opp" className="browser-default custom-select" style={{ width: 'auto', marginLeft: '10px' }}>
                                                                <option>{this.state.show}</option>
                                                                <option value="Forword">Forword</option>
                                                                <option value="Backword">Blackword</option>
                                                                <option value="Central">Central</option>
                                                            </select>
                                                        </div>
                                                        <div style={{ marginBottom: 16 }}>
                                                            diff :
                                                    <select name="lv" className="browser-default custom-select" style={{ width: 'auto', marginLeft: '10px' }}>
                                                                <option>{this.state.show}</option>
                                                                <option value="f'">f'(x)</option>
                                                                <option value="f''">f''(x)</option>
                                                                <option value="f'''">f'''(x)</option>
                                                                <option value="f''''">f''''(x)</option>
                                                            </select>
                                                        </div>
                                                        <div style={{ marginBottom: 16 }}>
                                                            order h :
                                                    <select name="orderh" className="browser-default custom-select" style={{ width: 'auto', marginLeft: '10px' }}>
                                                                <option>{this.state.show}</option>
                                                                <option value="h">pow 1</option>
                                                                <option value="h^2">pow 2</option>
                                                            </select>
                                                        </div>
                                                        <div style={{ marginBottom: 16 }}>
                                                            fx : <Input name="fx" style={{ width: 'auto', height: '50px' }} placeholder="pleas enter" value={this.state.fx} />
                                                        </div>
                                                        <div style={{ marginBottom: 16 }}>
                                                            x : <Input name="x" type="number" style={{ width: 'auto' }} step={1} value={this.state.x} />
                                                        </div>
                                                        <div style={{ marginBottom: 16 }}>
                                                            h : <Input name="h" type="number" style={{ width: 'auto' }} step={1} value={this.state.h} />
                                                        </div>
                                                        <MDBBtn style={{ margin: '50px' }} onClick={this.submit} onClick={() => this.different()} gradient="peach">Submit</MDBBtn>
                                                        <Checkbox onChange={this.onChange}>Auto</Checkbox>

                                                        {(this.state.aws === true) ?
                                                            <Table style={{ margin: '50px' }} columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} style={{ width: 'auto' }} /> : null
                                                        }


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
