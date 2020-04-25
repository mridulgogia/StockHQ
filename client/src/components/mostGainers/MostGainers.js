import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchMostActivities } from "../../actions/mostActivitiesAction";
import PropTypes from "prop-types";
import HomeCarousel from "../common/homeCarousel/HomeCarousel";

class MostGainers extends Component {
  componentDidMount() {
    this.props.fetchMostActivities("GAINERS");
  }

  render() {
    return (
      <Fragment>
        <HomeCarousel
          title="Most Gainer Stock"
          data={this.props.mostGainer.data.data}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mostGainer: state.mostActivities.mostGainer,
  };
};

MostGainers.propTypes = {
  mostGainer: PropTypes.object.isRequired,
  fetchMostActivities: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchMostActivities })(MostGainers);
