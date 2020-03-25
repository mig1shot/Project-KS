import React, { Component } from 'react'
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBFooter } from "mdbreact";

export default class foot extends Component {
    render() {
        return (


            <MDBFooter color="black" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h2 className="title" style={{ color: 'white' }}>Numerical Method Content</h2>
                            <p>
                                thank for watch , and sorry this not completely .
                                 </p>
                        </MDBCol>
                        <MDBCol md="6">
                            <MDBContainer fluid className="text-center text-md-left">
                                <MDBRow>
                                    <MDBCol md="4">
                                        <h5 className="title" style={{ color: 'white' }}>Root of Equtions</h5>
                                        <ul>
                                            <li className="list-unstyled">
                                                <a href="/bisection">bisection method</a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/falseiteration">false position method</a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/onepoint">one point method  </a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/newton">newton raphson method </a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/secant">secant method </a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/taylor">taylor series </a>
                                            </li>
                                        </ul>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <h5 className="title" style={{ color: 'white' }}>Linear Argebar</h5>
                                        <ul>
                                            <li className="list-unstyled">
                                                <a href="/camer">carmer's rules</a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/gauss">gauss eliminate</a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/jordan">gauss jordan </a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/lu">lu decomposition </a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/choles">cholesky decomposition </a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/jacobi">jacobi iteration </a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/seidel">gauss seidel iteration</a>
                                            </li>
                                        </ul>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <h5 className="title" style={{ color: 'white' }}>Interpolation</h5>
                                        <ul>
                                            <li className="list-unstyled">
                                                <a href="/lagrange">lagrange</a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/newton">newton</a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/spline">spline </a>
                                            </li>
                                        </ul>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <h5 className="title" style={{ color: 'white' }}>Integration</h5>
                                        <ul>
                                            <li className="list-unstyled">
                                                <a href="/trape">Trapezidal's rules</a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/simson">Simpson’s rules</a>
                                            </li>
                                        </ul>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <h5 className="title" style={{ color: 'white' }}>Integration</h5>
                                        <ul>
                                            <li className="list-unstyled">
                                                <a href="/diff">forword order h</a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/diff">forword order h2</a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/diff">central order h</a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/diff">central order h2</a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/diff">backword order h</a>
                                            </li>
                                            <li className="list-unstyled">
                                                <a href="/diff">backword order h2</a>
                                            </li>
                                        </ul>
                                    </MDBCol>
                                   


                                </MDBRow>
                            </MDBContainer>
                        </MDBCol>


                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} made by  <MDBIcon
                            fab
                            icon="facebook-f"
                            className="grey-text"
                            size="lg"
                        /> : <a href="https://www.facebook.com/kitsirik " target="_blank"  >
                            K I T S I R I &nbsp; S A R A N A</a>
                    </MDBContainer>
                </div>
            </MDBFooter>

        )
    }
}
