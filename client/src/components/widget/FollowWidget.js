import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

import AuthModal from "../authModal/AuthModal";
// import { fetchFollowState } from "../../actions/FollowWidget";
import { fetchFollowState } from "../../actions/followWidgetAction";

class FollowWidget extends Component {
  constructor() {
    super();

    this.state = {
      authModalState: false,
    };
    this.onClose = this.onClose.bind(this);
    this.onSetModalState = this.onSetModalState.bind(this);
    this.openAuthModal = this.openAuthModal.bind(this);
  }

  componentDidMount() {
    if (this.props.isAuthenticated && this.props.isVerified) {
    this.props.fetchFollowState(this.props.pathname);
    }
  }

  onClose() {
    this.setState({
      authModalState: false,
    });
  }

  onSetModalState() {
    this.setState((prevState) => ({
      authModalState: prevState.authModalState,
    }));
  }

  openAuthModal() {
    this.setState({
      authModalState: true,
    });
  }

  

  render() {
    const { isAuthenticated, isVerified } = this.props;

    const notAuthBtn = <Button onClick={this.openAuthModal}>Follow</Button>;

    const notVerifiedBtn = (
      <Button onClick={this.openNotVerifiedModal}>Follow</Button>
    );

    const followBtn = <Button onClick={this.followStock}>Follow</Button>;

    const button = isAuthenticated
      ? isVerified
        ? followBtn
        : notVerifiedBtn
      : notAuthBtn;

    return (
      <div className="container follow_widget_container">
        <div className="row">
          <div className="col-md-12">
            <h3>Follow the {this.props.title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {button}
            {/* <Button>Follow</Button> */}
          </div>
        </div>
        <AuthModal
          show={this.state.authModalState}
          onHide={this.onClose}
          route={"LOGIN"}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isVerified: state.auth.isVerified,
});

export default connect(mapStateToProps, { fetchFollowState })(FollowWidget);
