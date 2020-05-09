import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import AuthModal from "../authModal/AuthModal";
import { logoutUser } from "../../actions/authAction";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: "",
      title: "",
      authModalState: false,
    };

    this.onClose = this.onClose.bind(this);
    this.onSetModalState = this.onSetModalState.bind(this);
    this.openAuthModal = this.openAuthModal.bind(this);
  }

  openAuthModal(route) {
    this.setState({
      route: route,
      authModalState: true,
    });
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

  setModalRoute(route) {
    this.setState({
      route: route,
    });
  }
  render() {
    const authLinks = (
      <div className="float-right">
        <Link className="nav-link nav_link-text" to="/profile">
          Profile
        </Link>
        <div className="nav-link nav_link-text" onClick={this.props.logoutUser}>
          Logout
        </div>
      </div>
    );

    const guestLinks = (
      <div className="float-right">
        <div
          className="nav-link nav_link-text"
          onClick={() => this.openAuthModal("REGISTER")}
        >
          Signup
        </div>
        <div
          className="nav-link nav_link-text"
          onClick={() => this.openAuthModal("LOGIN")}
        >
          Login
        </div>
      </div>
    );

    const { isAuthenticated } = this.props;
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand style={{ color: "#fff" }}>StockHQ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link nav_link-text" to="/">
              Home
            </Link>
            {/* <Nav.Link to="/">Home</Nav.Link> */}
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
            {isAuthenticated ? authLinks : guestLinks}
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logoutUser })(Header);
