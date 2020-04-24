import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMostActivities } from "../../actions/mostActivitiesAction";

class MostActive extends Component {
  componentDidMount() {
    this.props.fetchMostActivities("GAINERS");
  }
  render() {
    return <div>GAINERS</div>;
  }
}
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {fetchMostActivities})(MostActive);
