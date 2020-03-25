import React, { Component } from 'react'
import '../../App.css'
import { create, all } from 'mathjs'
import axios from 'axios';

import { Container, Row, Col, Label } from 'antd'
import { Form, Input,  Checkbox } from 'antd';
import { Button } from 'reactstrap';
import {
    AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Table } from 'antd';

import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn, MDBFooter } from "mdbreact";
import { MDBInput } from 'mdbreact';
import Footer from '../foot'
import Graph from '../Graph' 

const math = create(all)

var g =[{}]
export default class bisection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setTable: false,
            setGarph: false,
            xl: '',
            xr: '',
            fx: '',
            iter: '',
            arrxm: [],
            arrxr: [],
            arrxl: [],
            arri: [],
            arre: [],
            datadb: [],
            
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
            data: [],
        };

        this.handleChangeIter = this.handleChangeIter.bind(this);
        this.handleChangeFX = this.handleChangeFX.bind(this);
        this.handleChangeXL = this.handleChangeXL.bind(this);
        this.handleChangeXR = this.handleChangeXR.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }
    onChange(e) {
        console.log('this.state.persons')
        axios.get(`http://localhost:4000/show/bisec`)
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
    

    handleChangeIter(event) {
        this.setState({ iter: event.target.value });

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
        var expr = math.compile(this.state.fx);
        var scope = { x: parseFloat(X) };

        return parseFloat(expr.evaluate(scope).toFixed(6));
    }
    eror(x2, x1) {
        let e = Math.abs((x2 - x1) / x2)
        return e.toFixed(6)
    }
    findxm(xl, xr) {
        var xm = (xl + xr) / 2
        return parseFloat(xm.toFixed(6))
    }
    bisection(xl, xr) {
        if(this.state.fx==='' || xl==='' ||xr===''){
            alert('Ohh !, please enter correct information')
             window.location.reload()
        }
        else{
            var x1, fxl, xm, fxr, x2, e = 1, fxm, i = 0
        while (e > 0.000001) {
            //this.state.arri.push(i)
            //this.state.arrxr.push(xr)
            //this.state.arrxl.push(xl)
            //this.state.arrxm.push(xm)
            //this.state.arre.push(e)
            //console.log(xl, xr)


            x1 = xm
            fxl = this.fx(xl)
            fxr = this.fx(xr)
            // console.log('fxl= ', fxl, 'fxr = ', fxr)
            xm = this.findxm(xl, xr)
            //console.log('xm = ', xm)
            fxm = this.fx(xm)
            //console.log('fxm = ', fxm)
            if (i > 0) {
                x2 = xm
                e = this.eror(x2, x1)
                //console.log('e = ', e)   
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
        this.state.setTable = true
        this.state.setGarph = true
        this.forceUpdate()
        console.log("dataa",this.state.data[this.state.data.length-1].xm)
       // g.push({fx:this.state.fx , xm : this.state.data[this.state.data.length-1].xm })
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
                                                <strong>Bisection method</strong>
                                            </MDBCardTitle>

                                            <div class="embed-responsive embed-responsive-16by9">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/OzFuihxtbtA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                            <MDBCardBody>
                                                <MDBCardTitle className="indigo-text h5 m-4">
                                                   
              </MDBCardTitle>
                                                <MDBCardText>
                                                    การแบ่งครึ่งช่วง (Bisection method) คือการแบ่งออกเป็นสองส่วนเท่ากันในคณิตศาสตร์เป็นวิธีการหารากที่ซ้ำ ๆ การแบ่งออกเป็นสองส่วนเท่ากันช่วงเวลาและจากนั้นเลือกช่วงย่อยซึ่งรากต้องอยู่ในแนวแกน X สำหรับการประมวลผลต่อไป เป็นวิธีที่ง่ายและมีประสิทธิภาพ แต่ก็ยังค่อนข้างช้า ด้วยเหตุนี้มันจึงมักใช้เพื่อหาแนวทางในการแก้ปัญหาโดยประมาณซึ่งใช้เป็นจุดเริ่มต้นของวิธีการบรรจบกันอย่างรวดเร็วมากขึ้น วิธีการนี้เรียกว่าวิธีการลดช่วงเวลา วิธีการค้นหาแบบไบนารี

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
                                               
                                            </MDBCardTitle>


                                            <MDBCardBody>
                                                <MDBCardTitle className="indigo-text h5 m-4">
                                                {/*{JSON.stringify(this.state.datadb)}*/}
                                                </MDBCardTitle>
                                                <MDBCardText>
                                                    <from>
                                                        <h3 style={{ paddingBottom: '50px' }}>BISECTION METHOD</h3>
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
                                                        <MDBBtn style={{ margin: '50px' }} onClick={this.handleSubmit} onClick={() => this.bisection(parseFloat(this.state.xl), parseFloat(this.state.xr))} gradient="peach">Submit</MDBBtn>
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
