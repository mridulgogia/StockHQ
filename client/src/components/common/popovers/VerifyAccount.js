import react, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";


class VerifyAccount extends Component {
  render() {
    return (
      <div className="custom_popover verify">Please Verify your account</div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(VerifyAccount);
