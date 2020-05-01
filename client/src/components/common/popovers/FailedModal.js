import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

class FailedModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        autoFocus={false}
        animation={false}
        className="custom_modal failed_modal"
      >
        <Modal.Body>Please verify your account</Modal.Body>
      </Modal>
    );
  }
}

export default FailedModal