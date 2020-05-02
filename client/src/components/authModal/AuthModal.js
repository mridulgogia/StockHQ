import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { requestLogin, requestRegister } from "../../actions/authAction";
import FormGroup from "../common/inputs/FormGroup";
import SelectListGroup from "../common/inputs/SelectListGroup";

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
      errors: {},
    };

    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangeRegister = this.onChangeRegister.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
    this.onSubmitRegister = this.onSubmitRegister.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChangeLogin(event) {
    const { name, value } = event.target;
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
      password2: this.state.registerCPassword,
    };
    this.props.requestRegister(requestObj, this.props.onHide);
  }

  render() {
    const loginForm = (
      <Form onSubmit={this.onSubmitLogin}>
        <FormGroup
          label="Email Address"
          type="email"
          placeholder="name@email.com"
          name="loginEmail"
          value={this.state.loginEmail}
          onChange={this.onChangeLogin}
          error={this.state.errors.email}
        />
        <FormGroup
          name="loginPassword"
          value={this.state.loginPassword}
          type="text"
          label="Password"
          onChange={this.onChangeLogin}
          error={this.state.errors.password}
          placeholder="password"
        />
        <Button type="submit">Login</Button>
      </Form>
    );

    const options = [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
    ];

    const registerForm = (
      <Form>
        <FormGroup
          name="registerName"
          value={this.state.registerName}
          type="text"
          label="Full name"
          onChange={this.onChangeRegister}
          error={this.state.errors.name}
          placeholder="password"
        />

        <FormGroup
          name="registerEmail"
          value={this.state.registerEmail}
          type="email"
          label="Email Address"
          onChange={this.onChangeRegister}
          error={this.state.errors.email}
          placeholder="name@example.com"
        />

        <FormGroup
          name="registerPassword"
          value={this.state.registerPassword}
          type="password"
          label="Password"
          onChange={this.onChangeRegister}
          error={this.state.errors.password}
          placeholder="password"
        />
        <FormGroup
          name="registerCPassword"
          value={this.state.registerCPassword}
          type="password"
          label="Confirm Password"
          onChange={this.onChangeRegister}
          error={this.state.errors.password2}
          placeholder="Confirm password"
        />

        <SelectListGroup
          placeholder="Gender"
          name="registerGender"
          value={this.state.registerGender}
          error={this.state.errors.gender}
          options={options}
        />

        <Button type="submit" onClick={this.onSubmitRegister}>
          Register
        </Button>
      </Form>
    );
    const title = this.props.route === "LOGIN" ? "Login" : "Register";
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

const mapStateToProps = (state) => ({
  errors: state.auth.error,
});

export default connect(mapStateToProps, { requestLogin, requestRegister })(
  withRouter(AuthModal)
);
