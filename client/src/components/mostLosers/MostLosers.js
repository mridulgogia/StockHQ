import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMostActivities } from "../../actions/mostActivitiesAction";

class MostActive extends Component {
  componentDidMount() {
    this.props.fetchMostActivities("LOSERS");
  }
  render() {
    return <div>LOSERS</div>;
  }
}
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {fetchMostActivities})(MostActive);
