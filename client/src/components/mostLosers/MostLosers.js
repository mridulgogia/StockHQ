import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchMostActivities } from "../../actions/mostActivitiesAction";
import PropTypes from "prop-types";
import HomeCarousel  from "../common/homeCarousel/HomeCarousel";

class MostLoser extends Component {
  componentDidMount() {
    this.props.fetchMostActivities("LOSERS");
  }

  render() {
    return (
      <Fragment>
        <HomeCarousel 
          title="Most Loser Stock" 
          data={this.props.mostLoser.data.data}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mostLoser: state.mostActivities.mostLoser
  };
};

MostLoser.propTypes = {
  mostLoser: PropTypes.object.isRequired,
  fetchMostActivities: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {fetchMostActivities})(MostLoser);
