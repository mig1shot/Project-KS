import React, { Component } from 'react'
import wall from '../image/1.png'
import '../App.css'
import Footer from './foot'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer, MDBJumbotron, MDBCardTitle } from "mdbreact";
import { MDBNav, MDBCardText, MDBNavItem, MDBNavLink, MDBTabContent, MDBTabPane, MDBDropdownToggle, MDBCardImage } from "mdbreact";
import pf from '../image/pf1.jpg'
import { List, Avatar } from 'antd';




export default class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: false,
      items: {
        default: "1",
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    this.state.show1 = true;
    console.log(this.state.show1)
    this.forceUpdate()
    event.preventDefault();


  }


  togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };

  render() {
    var setwall = {
      textAlign: "center",
      width: "100%",
      marginBottom: "80px",
      backgroundSize: "cover"
    }
    return (

      <div className="wallpaperdefault">
        <br /><br /><br /><br />

        <MDBCard className="my-5 px-5 pb-5" style={{ backgroundColor: 'black', color: 'white', opacity: '0.89' }}>

          <section className="my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5" style={{ color: '#aa00ff' }}>
              What is Numerical Method?
      </h2>
            <p className="lead white-text w-responsive text-left mx-auto mb-5" >
              Numerical methods, is approximation fast solution for mathematical problems. Such problems can be in any field in engineering. So any result you get from it is approximated not exact,
              it give you the solution faster than normal ones, also it’s easy to be programmed.
              Here is some issues that numerical analysis is used in:
        <ul>
                <br />1. Solving linear/non-linear equations and finding the real roots, many methods exist like: Bisection, Newton-Raphson ... etc.
           <br />2. Fit some points to curve, good approximation and simple solution.
           <br />3. Interpolation, great to get any value in between a table of values. It can solve the equally spaced readings for unequally spaced methods, Newton general method is implied.
           <br />4. Solve definite integration, simple methods is used to compute an integration based on idea that the definite integration is the bounded area by the given curve, these methods approximate the area with great approximation. Many methods there, like Simpson’s rule.
           <br />5. Solving initial value 1st and 2nd order differential equations, good approximation and simpler than normal analysis.
           <br />6. Solving partial differential equations like laplace equation for wave equation, very fast solution.
        </ul>
            </p>

            {/*<MDBContainer className="mt-4" >
              <MDBRow>
                <MDBCol md="12">
                  <h2></h2>
                  <MDBNav className="mt-5 nav-pills">
                    <MDBBtn color="red" size="" active={this.state.items["default"] === "1"} onClick={this.togglePills("default", "1")} >
                      u1
                   </MDBBtn>

                    <MDBBtn color="green" size="" active={this.state.items["default"] === "2"} onClick={this.togglePills("default", "2")} >
                      u2
                   </MDBBtn>

                    <MDBBtn color="blue" size="" active={this.state.items["default"] === "3"} onClick={this.togglePills("default", "3")} >
                      u3
                   </MDBBtn>

                  </MDBNav>
                  <MDBTabContent activeItem={this.state.items["default"]}>
                    <MDBTabPane tabId="1">
                      <p>
                        Consequat occaecat ullamco amet non eiusmod nostrud dolore
                        irure incididunt est duis anim sunt officia. Fugiat velit
                        proident aliquip nisi incididunt nostrud exercitation
                        proident est nisi. Irure magna elit commodo anim ex veniam
                        culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod
                        consequat eu adipisicing minim anim aliquip cupidatat culpa
                        excepteur quis. Occaecat sit eu exercitation irure Lorem
                        incididunt nostrud.
                        <MDBBtn color="green" size="sm" active={this.state.items["default"] === "3"} onClick={this.togglePills("default", "3")} >
                          Learn more
                   </MDBBtn>
                      </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <p>
                        Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa
                        mollit commodo mollit ex. Aute sunt incididunt amet commodo
                        est sint nisi deserunt pariatur do. Aliquip ex eiusmod
                        voluptate exercitation cillum id incididunt elit sunt. Qui
                        minim sit magna Lorem id et dolore velit Lorem amet
                        exercitation duis deserunt. Anim id labore elit adipisicing
                        ut in id occaecat pariatur ut ullamco ea tempor duis.
                  </p>
                    </MDBTabPane>
                    <MDBTabPane tabId="3">
                      <p>
                        Est quis nulla laborum officia ad nisi ex nostrud culpa
                        Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis
                        ipsum nisi elit fugiat commodo sunt reprehenderit laborum
                        veniam eu veniam. Eiusmod minim exercitation fugiat irure ex
                        labore incididunt do fugiat commodo aliquip sit id deserunt
                        reprehenderit aliquip nostrud. Amet ex cupidatat excepteur
                        aute veniam incididunt mollit cupidatat esse irure officia
                        elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit
                        labore ipsum laboris ipsum commodo sunt tempor enim
                        incididunt. Commodo quis sunt dolore aliquip aute tempor
                        irure magna enim minim reprehenderit. Ullamco consectetur
                        culpa veniam sint cillum aliqua incididunt velit ullamco
                        sunt ullamco quis quis commodo voluptate. Mollit nulla
                        nostrud adipisicing aliqua cupidatat aliqua pariatur mollit
                        voluptate voluptate consequat non.
                  </p>
                    </MDBTabPane>
                  </MDBTabContent>
                </MDBCol>
              </MDBRow>
            </MDBContainer> */}
            <h1 className="h1-responsive font-weight-bold text-center my-5" style={{ color: '#aa00ff' }}>  All Content </h1>


            <MDBRow>
              <MDBCol md="4" className="md-0 mb-5">
                <MDBRow>
                  <MDBCol lg="2" md="3" size="2">
                    <MDBIcon icon="book" size="2x" className="pink-text" />
                    {/*<div className="spinner-border text-white" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>*/}
                  </MDBCol>
                  <MDBCol lg="10" md="9" size="10">
                    <h5 className="font-weight-bold pink-text" >Root Of Equation</h5>

                    <p  >
                      <li>    <a style={{ color: 'grey' }} href='/bisection'>Bisection Method</a>   </li>
                      <li>  <a style={{ color: 'grey' }} href='/falseiteration'>Falseiteration Method</a></li>
                      <li>  <a style={{ color: 'grey' }} href='/onepoint'>One point method</a></li>
                      <li>  <a style={{ color: 'grey' }} href='/newton'>Newton raphson method</a></li>
                      <li>  <a style={{ color: 'grey' }} href='/secant'>Secant Method</a> </li>
                      <li><a style={{ color: 'grey' }} href='/taylor'>taylor series</a></li>
                    </p>

                    
                  </MDBCol>

                </MDBRow>
              </MDBCol>
              <MDBCol md="4" className="md-0 mb-5">
                <MDBRow>
                  <MDBCol lg="2" md="3" size="2">
                    <MDBIcon icon="book" size="2x" className="pink-text" />
                  </MDBCol>
                  <MDBCol lg="10" md="9" size="10">
                    <h5 className="font-weight-bold pink-text">Linear Argebar</h5>
                    <p  >
                      <li> <a style={{ color: 'grey' }} href='/camer'> carmer's rules</a> </li>
                      <li><a style={{ color: 'grey' }} href='/gauss'>gauss eliminate</a> </li>
                      <li> <a style={{ color: 'grey' }} href='/jordan'>gauss jordan</a> </li>
                      <li> <a style={{ color: 'grey' }} href='/lu'>lu decomposition</a></li>
                      <li> <a style={{ color: 'grey' }} href='/choles'>cholesky decomposition</a></li>
                      <li> <a style={{ color: 'grey' }} href='/jacobi'>jacobi iteration</a></li>
                      <li> <a style={{ color: 'grey' }} href='/seidel'>gauss seidel iteration</a></li>
                    </p>
                    
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md="4" className="md-0 mb-5">
                <MDBRow>
                  <MDBCol lg="2" md="3" size="2">
                    <MDBIcon icon="book" size="2x" className="pink-text" />
                  </MDBCol>
                  <MDBCol lg="10" md="9" size="10">
                    <h5 className="font-weight-bold pink-text">Interpolation </h5>
                    <p  >
                      <li> <a style={{ color: 'grey' }} href='/lagrange'> lagrange</a> </li>
                      <li><a style={{ color: 'grey' }} href='/newton'>newton</a> </li>
                      <li> <a style={{ color: 'grey' }} href='/spline'>spline</a> </li>

                    </p>
                   
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md="4" className="md-0 mb-5">
                <MDBRow>
                  <MDBCol lg="2" md="3" size="2">
                    <MDBIcon icon="book" size="2x" className="pink-text" />
                  </MDBCol>
                  <MDBCol lg="10" md="9" size="10">
                    <h5 className="font-weight-bold pink-text">Integration</h5>
                    <p  >
                      <li> <a style={{ color: 'grey' }} href='/trape'> Trapezidal's rules</a> </li>
                      <li><a style={{ color: 'grey' }} href='/simson'>Simpson’s rules</a> </li>
                    </p>
                  
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md="4" className="md-0 mb-5">
                <MDBRow>
                  <MDBCol lg="2" md="3" size="2">
                    <MDBIcon icon="book" size="2x" className="pink-text" />
                  </MDBCol>
                  <MDBCol lg="10" md="9" size="10">
                    <h5 className="font-weight-bold pink-text">Numerical Differential</h5>
                    <p  >
                      <li> <a style={{ color: 'grey' }} href='/diff'>forword order h</a> </li>
                      <li><a style={{ color: 'grey' }} href='/diff'>forword order h<sup>2</sup></a> </li>
                      <li> <a style={{ color: 'grey' }} href='/diff'>central order h</a> </li>
                      <li> <a style={{ color: 'grey' }} href='/diff'>centrl order h<sup>2</sup></a></li>
                      <li> <a style={{ color: 'grey' }} href='/diff'>backword order h</a></li>
                      <li> <a style={{ color: 'grey' }} href='/jacobi'>backword order h<sup>2</sup></a></li>
                    </p>
                   
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            
            </MDBRow>


            <MDBRow>
              <MDBCol></MDBCol>
              <MDBCol md="4" className="md-0 mb-5"><MDBCard classname="justify-content-center" style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src={pf} />
                <MDBCardBody>
                  <MDBCardTitle className=" text-center indigo-text h5 m-4">K I T S I R I &nbsp; S A R A N A </MDBCardTitle>
                  <MDBCardText>
                    Thank for watching ,Let's enjoy
          </MDBCardText>
                  <MDBCol className="d-flex justify-content-center mt-4" md="12">
                    <MDBCol md="3" className="d-flex justify-content-around">
                      <a href="https://www.facebook.com/kitsirik " target="_blank" ><MDBIcon
                        fab
                        icon="facebook"
                        className="grey-text"
                        size="lg"

                      />
                      </a>
                    </MDBCol>
                  </MDBCol>

                </MDBCardBody>
              </MDBCard></MDBCol>
              <MDBCol></MDBCol>
            </MDBRow>


          </section>
        </MDBCard>
       { /*<Footer />*/}
       . 
      </div>

    )
  }
}


