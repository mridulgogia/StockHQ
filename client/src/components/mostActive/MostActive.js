import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchMostActivities } from "../../actions/mostActivitiesAction";
import PropTypes from "prop-types";

import HomeCarousel  from "../common/homeCarousel/HomeCarousel";
class MostActive extends Component {
  componentDidMount() {
    this.props.fetchMostActivities("ACTIVES");
  }
  render() {
    console.log("most", this.props.mostActive.data.data)
    return (
      <Fragment>
        <HomeCarousel 
          title="Most Active" 
          data={this.props.mostActive.data.data}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mostActive: state.mostActivities.mostActive
  };
};

MostActive.propTypes = {
  mostActive: PropTypes.object.isRequired,
  fetchMostActivities: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {fetchMostActivities})(MostActive);
