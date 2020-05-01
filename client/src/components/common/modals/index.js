import React, { Component, Fragment } from "react";
import {connect} from "react-redux";

import VerifyAccount from "./VerifyAccount";
import SuccessModal from "./SuccessModal";
import FailedModal from "./FailedModal";

class Modals extends Component {
  render() {
    return(
    <Fragment>
      <VerifyAccount 
        show={this.props.verifyModalState}
        onClose={()=>{}}
      />
      <SuccessModal 
        show={this.props.successModal}
        onClose = {()=> {}}
        />
        <FailedModal
        show={this.props.failedModal}
        onClose={()=>{}}
        />
    </Fragment>);

  }
}

const mapStateToProps = state => ({
  verifyModalState: state.modals.verifyModal,
  successModal: state.modals.successModal,
  failedModal: state.modals.failedModal
})

export default connect(mapStateToProps, {})(Modals);