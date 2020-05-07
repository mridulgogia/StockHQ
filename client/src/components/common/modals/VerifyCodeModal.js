import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class VerifyCodeModal extends Component {
  render() {
    return (
      <Modal {...this.props}>
        <Modal.Body>Hello</Modal.Body>
      </Modal>
    );
  }
}

export default VerifyCodeModal;
