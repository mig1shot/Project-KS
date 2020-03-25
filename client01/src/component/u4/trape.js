import React, { Component } from 'react'
import '../../App.css'
import { create, all } from 'mathjs'
import axios from 'axios';
import { Form, Input, Checkbox, } from 'antd';

import { Table } from 'antd';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn, MDBFooter } from "mdbreact";
import Footer from '../foot'
const math = create(all)
var Algebrite = require('algebrite')

const columns = [
  {
    title: 'variable',
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
      n: '',
      setTable :false

    }
    this.handleChange = this.handleChange.bind(this)
    this.trap = this.trap.bind(this)
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
  trap() {
    var x0 = parseFloat(this.state.x0)
    var xn = parseFloat(this.state.xn)
    var n = parseInt(this.state.n)
    var ig1,ig2,e
    var h = (xn - x0) / n
    console.log(x0, xn, n, h)
    var c = x0
    var xi = 0
    while (c != xn - h) {
      c = c + h
      xi += this.fx(c)
    }
    var i = (h * (this.fx(x0) + this.fx(xn) + (2 * xi))) / 2
    data.push({I : 'I',value : i})

    ig1=math.compile(Algebrite.integral(Algebrite.eval(this.state.fx)).toString())
    ig2=(ig1.eval({x:xn})-ig1.eval({x:x0}))

    console.log(ig1,ig2)

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
                        <strong>Trapezoidal's Rules</strong>
                      </MDBCardTitle>
                      <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Rn9Gr52zhrY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                      </div>

                      <MDBCardBody>
                        <MDBCardTitle className="indigo-text h5 m-4">

                        </MDBCardTitle>
                        <MDBCardText>
                          We know from a previous lesson that we can use Riemann Sums to evaluate a definite integral
                          Riemann Sums use rectangles to approximate the area under a curve.
                          Another useful integration rule is the Trapezoidal Rule. Under this rule, the area under a curve is evaluated
                          by dividing the total area into little trapezoids rather than rectangles.
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
                            <MDBBtn style={{ margin: '50px' }} onClick={this.handleSubmit} onClick={() => this.trap()} gradient="peach">Submit</MDBBtn>
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
