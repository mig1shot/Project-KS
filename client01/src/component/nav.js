import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem ,MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <MDBNavbar color="black" fixed="top" dark expand="md">
          <MDBNavbarBrand>
          <MDBIcon style={{marginRight:'10px'}}icon="graduation-cap" spin size="" className="purple-text" />
          
          <strong className="white-text">NUMERIC METHOD</strong>
          </MDBNavbarBrand>
          <MDBNavbarNav left>
            
            <MDBDropdownToggle href="/">
              <span className="mr-2">HOME</span>
            </MDBDropdownToggle>
          </MDBNavbarNav>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Root Of Equation</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/bisection">Bisection Method</MDBDropdownItem>
                    <MDBDropdownItem href="/falseiteration">false position Method</MDBDropdownItem>
                    <MDBDropdownItem href="/onepoint">Onepoint Method</MDBDropdownItem>
                    <MDBDropdownItem href="/newton">Newton Method</MDBDropdownItem>
                    <MDBDropdownItem href="/secant">Secant Method</MDBDropdownItem>
                    <MDBDropdownItem href="/taylor">taylor </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Linear Algebra</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                  <MDBDropdownItem href="/camer">Camer's Rules </MDBDropdownItem>
                    <MDBDropdownItem href="/gauss">Gauss Elimination</MDBDropdownItem>
                    <MDBDropdownItem href="/jordan">Gauss Jordan </MDBDropdownItem>
                    <MDBDropdownItem href="/gauss">Gauss Elimination</MDBDropdownItem>
                    <MDBDropdownItem href="/choles">Cholesky Decomposition</MDBDropdownItem>
                    <MDBDropdownItem href="/lu">LU Decomposition</MDBDropdownItem>
                    <MDBDropdownItem href="/jacobi">Jacobi iterative method</MDBDropdownItem>
                    <MDBDropdownItem href="/seidel">Gauss Seidel</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Interpolation</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                  <MDBDropdownItem href="/newton_d">Newton's divide-different </MDBDropdownItem>
                    <MDBDropdownItem href="/lagrange">Lagrange polynamials</MDBDropdownItem>
                    <MDBDropdownItem href="/spline">Spline Interpolation </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Intergration</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/trape">Trapzoidal's Rules </MDBDropdownItem>
                    <MDBDropdownItem href="/simson">Simson's Rules</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Differential</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/diff">Numerical Differential  </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;