import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ReactTelInput from "react-telephone-input";
import Button from "react-bootstrap/Button";
import flags from "../../assets/images/flags.png";
import { onClickVerifyNumber } from "../../actions/verifyMobileAction";
import VerifyCodeModal from "../common/modals/VerifyCodeModal";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      selectedCountry: "in",
      mobileNumber: "",
      showVerifyCodeModal: false,
      error: {},
    };

    this.handleMobileInputChange = this.handleMobileInputChange.bind(this);
  }
  // componentDidMount() {
  //   if(this.props.userDetails.isVerified) {
  //     this.props.fetchMobileNumber();
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({
        error: nextProps.error,
      });
    }
  }

  handleMobileInputChange(mobileNumber, selectedCountry) {
    this.setState({
      mobileNumber: mobileNumber,
      selectedCountry: selectedCountry,
    });
  }

  toggleVerifyCodeModal() {
    this.setState((prevState) => ({
      showVerifyCodeModal: !prevState.showVerifyCodeModal,
    }));
  }

  closeVerifyCodeModal() {
    this.setState({
      showVerifyCodeModal: false,
    });
  }

  render() {
    console.log("state", this.state.error);
    const { userDetails } = this.props;
    console.log(Boolean(this.state.error.number));
    return (
      <div className="container profile_container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8">
                <h1>Welcome {userDetails.name}</h1>
                <div className="profile_text">Email: {userDetails.email}</div>
              </div>
              <div className="col-md-4">
                <div className="profile-pic-container">
                  <div
                    className="profile-pic"
                    style={{ backgroundImage: `url(${userDetails.avatar})` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="profile_text">Signup for our alerts!</div>
            {userDetails.isVerified ? (
              <ReactTelInput
                disabled={!this.props.userDetails.isVerified}
                defaultCountry={this.state.selectedCountry}
                flagsImagePath="/assets/images/flags.png"
                onChange={this.handleMobileInputChange}
                value={this.props.mobileInput}
              />
            ) : (
              <Fragment>
                <ReactTelInput
                  defaultCountry={this.state.selectedCountry}
                  flagsImagePath={flags}
                  onChange={this.handleMobileInputChange}
                  value={this.state.mobileInput}
                />
                {this.state.error && (
                  <div className="invalid-text">{this.state.error.number}</div>
                )}
              </Fragment>
            )}
          </div>
          <div className="col-md-3">
            <Button
              className="verify_btn"
              onClick={() =>
                this.props.onClickVerifyNumber(
                  this.state.mobileNumber,
                  this.state.selectedCountry,
                  this.toggleVerifyCodeModal.bind(this)
                )
              }
            >
              Verify
            </Button>
          </div>
        </div>

        <VerifyCodeModal
          show={this.state.showVerifyCodeModal}
          onHide={this.closeVerifyCodeModal.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userDetails: state.auth.user,
  verifyAcc: state.verifyAcc,
  error: state.verifyAcc.error,
});

export default connect(mapStateToProps, { onClickVerifyNumber })(Profile);
