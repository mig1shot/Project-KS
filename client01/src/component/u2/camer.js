import React, { Component } from 'react'
import '../../App.css'
import { create, all } from 'mathjs'
import axios from 'axios';
import 'antd/dist/antd.css';

import { Input, Checkbox } from 'antd';

import { Button } from 'reactstrap';
import {
    AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Table } from 'antd';

import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn, MDBFooter } from "mdbreact";
import Footer from '../foot'
const math = create(all)


var A = [], B = [], X = [], answer = [], matrixA = [], matrixB = [], matrixX = [], A1 = [], matrixA1 = []
const columns = [
    {
        title: 'X',
        dataIndex: 'X',
    },
    {
        title: 'value',
        dataIndex: 'value',
    },

];
var data = [];
export default class carmer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row: '',
            column: '',
            show_rc: true,
            show_m: false,
            setB1: true,
            setB2: false,
            showOutputCard: false,
            setTable: false,
            datadb1: []

        };
        this.handleChange = this.handleChange.bind(this);
        this.cramer = this.cramer.bind(this);
        this.onChange = this.onChange.bind(this);

    }
    onChange(e) {
        axios.get(`http://192.168.99.100:8080/show/carmer`)
            .then(res => {
                const datadb = res.data;
                this.setState({
                    row: datadb[0].rol,
                    column: datadb[0].column,
                    datadb1: [{
                        a00: datadb[0].a00,
                        a01: datadb[0].a01,
                        a10: datadb[0].a10,
                        a11: datadb[0].a11,
                        b0: datadb[0].b0,
                        b1: datadb[0].b1,
                        x0: datadb[0].x0,
                        x1: datadb[0].x1,
                    }]
                })

                matrixA.push(<Input style={{ width: "20%", margin: "5px" }} id={"a00"} value={this.state.datadb1[0].a00} />)
                matrixA.push(<Input style={{ width: "20%", margin: "5px" }} id={"a01"} value={this.state.datadb1[0].a01} />)
                matrixA.push(<br />)
                matrixA.push(<Input style={{ width: "20%", margin: "5px" }} id={"a10"} value={this.state.datadb1[0].a10} />)
                matrixA.push(<Input style={{ width: "20%", margin: "5px" }} id={"a11"} value={this.state.datadb1[0].a11} />)
                matrixA.push(<br />)
                matrixB.push(<Input style={{ width: "20%", margin: "5px" }} id={"b0"} value={this.state.datadb1[0].b0} />)
                matrixB.push(<Input style={{ width: "20%", margin: "5px" }} id={"b1"} value={this.state.datadb1[0].b1} />)
                matrixB.push(<br />)
                matrixX.push(<Input style={{ width: "20%", margin: "5px" }} id={"x0"} value={this.state.datadb1[0].x0} />)
                matrixX.push(<Input style={{ width: "20%", margin: "5px" }} id={"x1"} value={this.state.datadb1[0].x1} />)
                matrixX.push(<br />)


                this.setState({
                    show_rc: true,
                    show_m: true,
                    setB1: false,
                    setB2: false,
                })
                this.cramer()
            })


    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    cramer() {
        this.initMatrix();
        var counter = 0;
        while (counter != this.state.row) {
            var transformMatrix = JSON.parse(JSON.stringify(A));
            for (var i = 0; i < this.state.row; i++) {
                for (var j = 0; j < this.state.column; j++) {
                    if (j === counter) {
                        transformMatrix[i][j] = B[i]
                        break;
                    }

                }

            }
            data.push({
                X: X[counter],
                value: (math.det(transformMatrix) / math.det(A)).toFixed(6)
            })
            counter++;
        }
        this.setState({
            showOutputCard: true,
            setTable: true,
        });


    }
    createMatrix(row, column) {
        if (row === '' || column === '') {
            alert('Ohh !, please enter correct information')
            window.location.reload()
        }
        else {
            for (var i = 0; i < row; i++) {
                for (var j = 0; j < column; j++) {

                    matrixA.push(<Input style={{ width: "20%", margin: "5px" }} id={"a" + i + "" + j} placeholder={"a" + i + "" + j} />)
                }
                matrixA.push(<br />)
                matrixB.push(<Input style={{ width: "20%", margin: "5px" }} id={"b" + i} placeholder={"b" + i} />)
                matrixB.push(<br />)
                matrixX.push(<Input style={{ width: "20%", margin: "5px" }} id={"x" + i} placeholder={"x" + i} />)
                matrixX.push(<br />)
            }

            this.setState({
                show_rc: true,
                show_m: true,
                setB1: false,
                setB2: true,
            })
        }


    }
    initMatrix() {
        for (var i = 0; i < this.state.row; i++) {
            A[i] = []
            for (var j = 0; j < this.state.column; j++) {
                A[i][j] = (parseFloat(document.getElementById("a" + i + "" + j).value));
            }
            B.push(parseFloat(document.getElementById("b" + i).value));
            X.push((document.getElementById("x" + i).value));
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
                                                <strong>carmer</strong>
                                            </MDBCardTitle>

                                            <div class="embed-responsive embed-responsive-16by9">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/jBsC34PxzoM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                            </div>
                                            <MDBCardBody>
                                                <MDBCardTitle className="indigo-text h5 m-4">
                                                 </MDBCardTitle>
                                                <MDBCardText>
                                                    Given a system of linear equations, Cramer's Rule is a handy way to solve for just one of the variables without having to solve the whole system of
                                                    equations. They don't usually teach Cramer's Rule this way, but this is supposed to be the point of the
                                                    Rule: instead of solving the entire system of equations, you can use Cramer's to solve for just one single variable.
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
                                                <MDBCardText onChange={this.handleChange}>

                                                    Row : <Input name="row" style={{ margin: "5px" }} value={this.state.row} ></Input>
                                                    Column : <Input name="column" style={{ margin: "5px" }} value={this.state.column} ></Input> <span> [n*n] </span><br /><br /> 
                                                    {this.state.setB1 &&
                                                        <div>
                                                            <Button onClick={() => this.createMatrix(this.state.row, this.state.column)}>  Submit </Button>
                                                            <Checkbox onChange={this.onChange}>Auto</Checkbox><br /><br />
                                                        </div>

                                                    }



                                                    {
                                                        this.state.show_m && <div>Matrix A<br /><br />{matrixA} Matrix B<br /><br />{matrixB}  matrix X <br /><br />{matrixX}
                                                        </div>
                                                    }
                                                    <br></br>
                                                    {this.state.setB2 &&
                                                        <Button onClick={() => this.cramer()}>  Submit </Button>
                                                    }
                                                    {this.state.setTable &&
                                                        <Table style={{ margin: '50px' }} columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} style={{ width: 'auto' }} />
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
