import React, { Component } from 'react'
import '../../App.css'
import { create, all } from 'mathjs'

import { Container, Row, Col, Label } from 'antd'
import { Form, Input, Radio, } from 'antd';
import { Button } from 'reactstrap';
import {
  AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Table } from 'antd';

import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn, MDBFooter } from "mdbreact";
import Footer from '../foot'
const math = create(all)



export default class newton extends Component {


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
                        <strong>Newton divide-different</strong>
                      </MDBCardTitle>
                      <div class="embed-responsive embed-responsive-16by9">
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/hcsBjizQ9X8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                      </div>

                      <MDBCardBody>
                        <MDBCardTitle className="indigo-text h5 m-4">
                    
              </MDBCardTitle>
                        <MDBCardText>
        
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
