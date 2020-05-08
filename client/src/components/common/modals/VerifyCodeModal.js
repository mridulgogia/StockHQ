import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import FormGroup from "../inputs/FormGroup";

import { onSubmitVerifyCode } from "../../../actions/verifyMobileAction";

class VerifyCodeModal extends Component {
  constructor() {
    super();

    this.state = {
      verifyCode: "",
    };

    this.onChangeVerifyCode = this.onChangeVerifyCode.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChangeVerifyCode(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  onSubmitCode(event) {
    event.preventDefault();
    this.props.onSubmitVerifyCode(this.state.verifyCode, this.props.onHide);
  }
  render() {
    return (
      <Modal {...this.props}>
        <Modal.Body>
          <Form onSubmit={this.onSubmitCode.bind(this)}>
            <FormGroup
              name="verifyCode"
              value={this.state.verifyCode}
              type="text"
              onChange={this.onChangeVerifyCode}
              label="OTP"
              error={this.state.errors}
              placeholder="6 digit code"
            />
            <Button type="submit">Verify</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.verifyCode.error,
});

export default connect(mapStateToProps, { onSubmitVerifyCode })(
  VerifyCodeModal
);
