import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

class VerifyAccount extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        autoFocus={false}
        animation={false}
        className="custom_modal"
      >
        <Modal.Body className="verify_modal">
          Please verify your account
        </Modal.Body>
      </Modal>
    );
  }
}

export default VerifyAccount;
