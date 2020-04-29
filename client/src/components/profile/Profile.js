import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ReactTelInput from "react-telephone-input";
import Button from "react-bootstrap/Button";
import flags from "../../assets/images/flags.png";
// import {} from "../../assets/images/flags.png"
class Profile extends Component {
  constructor() {
    super();

    this.state = {
      selectedCountry: "in",
      telNumber: "",
    };

    this.handleMobileInputChange = this.handleMobileInputChange.bind(this);
  }
  // componentDidMount() {
  //   if(this.props.userDetails.isVerified) {
  //     this.props.fetchMobileNumber();
  //   }
  // }

  handleMobileInputChange(telNumber, selectedCountry) {
    console.log(
      "input changed. number: ",
      telNumber,
      "selected country: ",
      selectedCountry
    );

    this.setState({ selectedCountry: selectedCountry, telNumber: telNumber });
  }

  render() {
    const { userDetails } = this.props;
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
                  ></div>
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
                disabled={!this.props.auth.isVerified}
                // defaultCountry={this.state.selectedCountry}
                // flagsImagePath="/assets/images/flags.png"
                // onChange={this.handleMobileInputChange}
                // value={this.props.mobileInput}
              />
            ) : (
              <ReactTelInput
                defaultCountry={this.state.selectedCountry}
                flagsImagePath={flags}
                onChange={this.handleMobileInputChange}
                value={this.state.mobileInput}
              />
            )}
          </div>
          <div className="col-md-3">
            <Button className="verify_btn">Verify</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userDetails: state.auth.user,
});

export default connect(mapStateToProps, {})(Profile);
