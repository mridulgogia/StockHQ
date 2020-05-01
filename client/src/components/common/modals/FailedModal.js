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
        <Modal.Body className="failed_modal">Failed</Modal.Body>
      </Modal>
    );
  }
}

export default FailedModal;