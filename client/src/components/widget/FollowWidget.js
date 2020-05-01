import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

import AuthModal from "../authModal/AuthModal";
import { fetchFollowState, cleanIsFollowed, followStock } from "../../actions/followWidgetAction";
import { displayVerifyModal } from "../../actions/modalsActions";

class FollowWidget extends Component {
  constructor() {
    super();

    this.state = {
      authModalState: false,
      isFollowed: false,
    };
    this.onClose = this.onClose.bind(this);
    this.onSetModalState = this.onSetModalState.bind(this);
    this.openAuthModal = this.openAuthModal.bind(this);
    this.followStock = this.followStock.bind(this);
  }

  componentDidMount() {
    this.props.cleanIsFollowed();
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
      <Button onClick={() => this.props.displayVerifyModal()}>Follow</Button>
    );

    const followBtn = <Button onClick={() => this.props.followStock(this.props.pathname)}>{this.props.isFollowed ? "Unfollow" : "Follow"}</Button>;

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
          <div className="col-md-12">{button}</div>
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
  isFollowed: state.stockPageInfo.isFollowed
});

export default connect(mapStateToProps, {
  fetchFollowState,
  cleanIsFollowed,
  displayVerifyModal,
})(FollowWidget);
