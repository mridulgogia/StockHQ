import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import {Link} from "react-router-dom";
import AuthModal from "../common/authModal/AuthModal";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: "",
      title: "",
      authModalState: false,
    };

    this.onClose= this.onClose.bind(this);
    this.onSetModalState = this.onSetModalState.bind(this);
    this.openAuthModal = this.openAuthModal.bind(this);
  }

  openAuthModal(route) {
    this.setState({
      route: route,
      authModalState: true
    })
  }

  onClose() {
    this.setState({
      authModalState: false,
    });
  }

  onSetModalState() {
    this.setState((prevState) => ({
      authModalState: prevState.authModalState,
    }));
  }

  setModalRoute(route){
    this.setState({
      route: route,
      // title: route === "LOGIN" ? "Login" : "Register"
    })
  }
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">StockHQ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <div className="dummy-div"></div>
            <div className="float-right">
              <div 
                className="nav-link nav_link-text"
                onClick={() => this.openAuthModal("REGISTER")}
              >Signup</div>
              <div 
                className="nav-link nav_link-text"
                onClick={() => this.openAuthModal("LOGIN")}              
              >Login</div>
            </div>
          </Nav>
        </Navbar.Collapse>
        <AuthModal 
          show={this.state.authModalState}
          onHide={this.onClose}
          route={this.state.route}
        />
      </Navbar>
    );
  }
}
