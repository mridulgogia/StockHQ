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
  }

  onChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <Modal {...this.props}>
        <Modal.Body>
          <Form
            onSubmit={() =>
              this.props.onSubmitVerifyCode(this.state.verifyCode, onHide)
            }
          >
            <FormGroup
              name="verifyCode"
              value={this.state.verifyCode}
              type="text"
              onChange={}
              label="OTP"
              error={}
              placeholder="6 digit code"
            />
            <Button type="submit">Verify</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { onSubmitVerifyCode })(
  VerifyCodeModal
);
