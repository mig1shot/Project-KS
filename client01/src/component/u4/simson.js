import React, { Component } from 'react'
import '../../App.css'
import { create, all } from 'mathjs'
import axios from 'axios';

import { Container, Row, Col, Label } from 'antd'
import { Form, Input, Checkbox, } from 'antd';
import { Button } from 'reactstrap';
import {
  AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Table } from 'antd';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn, MDBFooter } from "mdbreact";
import Footer from '../foot'
const math = create(all)
var Algebrite = require('algebrite')


const columns = [
  {
    title: 'I',
    dataIndex: 'I',
    width: '100px'
  },
  {
    title: 'value',
    dataIndex: 'value',
  }
]
var data = []
export default class trap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fx: '',
      x0: '',
      xn: '',
      n: ''

    }
    this.handleChange = this.handleChange.bind(this)
    this.trap = this.sim.bind(this)
    this.fx = this.fx.bind(this)
    this.onChange = this.onChange.bind(this)

  }
  onChange(e) {
    axios.get(`http://192.168.99.100:8080/show/trap`)
      .then(res => {
        const datadb = res.data;
        
        this.setState({ 
            datadb,
            fx:datadb[0].fx,
            x0:datadb[0].x0,
            xn:datadb[0].xn,
            n:datadb[0].n,
        });

        
      })
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();

  }
  fx(X) {
    var expr = math.compile(this.state.fx);
    var scope = { x: parseFloat(X) };
    return parseFloat(expr.evaluate(scope));
  }
  sim() {
    var x0 = parseFloat(this.state.x0)
    var xn = parseFloat(this.state.xn)
    var n = parseInt(this.state.n)
    var h = (xn - x0) / (n * 2)
    console.log(x0, xn, n, h)
    var c = x0, i = 1
    var xi1 = 0
    var xi2 = 0
    var ig1 , ig2 ,e
    while (c != xn - h) {
      c = c + h
      if (i % 2 == 0) {
        xi1 += this.fx(c)
      }
      else {
        xi2 += this.fx(c)
      }
      i++
    }
    var i = (h * (this.fx(x0) + this.fx(xn) + (2 * xi2) + (4 * xi1))) / 2
  
    data.push({I : 'I',value : i})
    ig1=math.compile(Algebrite.integral(Algebrite.eval(this.state.fx)).toString())
    ig2=(ig1.eval({x:xn})-ig1.eval({x:x0}))
    e = Math.abs((ig2-i)/ig2)
    data.push({I : 'real value',value : ig2})
    data.push({I : 'eror',value : e})
    this.state.setTable = true
    this.forceUpdate()
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
                        <strong>Simson's Rules</strong>
                      </MDBCardTitle>
                      <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Rn9Gr52zhrY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                      </div>

                      <MDBCardBody>
                        <MDBCardTitle className="indigo-text h5 m-4">

                        </MDBCardTitle>
                        <MDBCardText>
                          ..
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
                          ...
                                                </MDBCardTitle>
                        <MDBCardText>
                          <from onChange={this.handleChange}>
                            <div style={{ marginBottom: 16 }} >
                              fx : <Input style={{ width: 'auto', height: '50px' }} name="fx" placeholder="pleas enter" value={this.state.fx} />
                            </div>
                            <div style={{ marginBottom: 16 }}>
                              start: <Input type="number" style={{ width: 'auto' }} name="x0" step={1} value={this.state.x0} />
                            </div>
                            <div style={{ marginBottom: 16 }}>
                              end : <Input type="number" style={{ width: 'auto' }} name="xn" step={1} value={this.state.xn} />
                            </div>
                            <div style={{ marginBottom: 16 }}>
                              n : <Input type="number" style={{ width: 'auto' }} name="n" step={1} value={this.state.n} />
                            </div>
                            {/*<Button style={{ margin: '50px' }} onClick={this.handleSubmit} onClick={() => this.bisection(parseFloat(this.state.xl), parseFloat(this.state.xr), parseInt(this.state.iter))}>Submit</Button>*/}
                            <MDBBtn style={{ margin: '50px' }} onClick={this.handleSubmit} onClick={() => this.sim()} gradient="peach">Submit</MDBBtn>
                            <Checkbox onChange={this.onChange}>Auto</Checkbox>
                            <br />
                          </from>
                          {(this.state.setTable === true) ?
                            <Table style={{ margin: '50px' }} columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} style={{ width: 'auto' }} /> : null
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
