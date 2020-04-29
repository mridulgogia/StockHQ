import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { requestLogin, requestRegister } from "../../../actions/authAction";

class AuthModal extends Component {
  constructor() {
    super();
    this.state = {
      loginEmail: "",
      loginPassword: "",
      registerEmail: "",
      registerName: "",
      registerGender: "male",
      registerPassword: "",
      registerCPassword: "",
    };

    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangeRegister = this.onChangeRegister.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
    this.onSubmitRegister = this.onSubmitRegister.bind(this);
  }

  onChangeLogin(event) {
    const { name, value } = event.target;
    console.log("pathname", this.props.history.location.pathname);
    this.setState({
      [name]: value,
    });
  }

  onChangeRegister(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmitLogin(event) {
    event.preventDefault();
    const requestObj = {
      email: this.state.loginEmail,
      password: this.state.loginPassword,
    };

    this.props.requestLogin(requestObj, this.props.onHide);
  }

  onSubmitRegister(event) {
    event.preventDefault();
    const requestObj = {
      email: this.state.registerEmail,
      name: this.state.registerName,
      gender: this.state.registerGender,
      password: this.state.registerPassword,
      cPassword: this.state.registerCPassword,
    };
    this.props.requestRegister(requestObj, this.props.onHide);
  }

  render() {
    const loginForm = (
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="loginEmail"
            value={this.state.loginEmail}
            onChange={this.onChangeLogin}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            name="loginPassword"
            value={this.state.loginPassword}
            onChange={this.onChangeLogin}
          />
        </Form.Group>

        <Button type="submit" onClick={this.onSubmitLogin}>
          Login
        </Button>
      </Form>
    );

    const registerForm = (
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe"
            name="registerName"
            value={this.state.registerName}
            onChange={this.onChangeRegister}
          />
        </Form.Group>
        <Form.Group controlId="emailId">
          <Form.Label>Email Id</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="registerEmail"
            value={this.state.registerEmail}
            onChange={this.onChangeRegister}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="registerPassword"
            value={this.state.registerPassword}
            onChange={this.onChangeRegister}
          />
        </Form.Group>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Group controlId="cPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="registerCPassword"
            value={this.state.registerCPassword}
            onChange={this.onChangeRegister}
          />
        </Form.Group>
        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            onChange={this.onChangeRegister}
            name="registerGender"
          >
            <option>Male</option>
            <option>Female</option>
          </Form.Control>
        </Form.Group>

        <Button type="submit" onClick={this.onSubmitRegister}>
          Register
        </Button>
      </Form>
    );
    const title = this.props.route === "LOGIN" ? "Login" : "Register";
    // console.log("props", this.props)
    return (
      <Modal {...this.props} size="lg" aria-labelledby="auth modal" centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {this.props.route === "LOGIN" ? loginForm : registerForm}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { requestLogin, requestRegister })(
  withRouter(AuthModal)
);
