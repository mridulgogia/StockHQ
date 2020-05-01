import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

class SuccessModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        autoFocus={false}
        animation={false}
        className="custom_modal succes_modal"
      >
        <Modal.Body>Please verify your account</Modal.Body>
      </Modal>
    );
  }
}

export default SuccessModal