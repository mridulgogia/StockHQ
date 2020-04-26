import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchStockInfo } from "../../actions/stockPageAction";
import { url } from "gravatar";

class StockPage extends Component {
  componentDidMount() {
    this.props.fetchStockInfo(this.props.location.pathname);
  }
  render() {
    const { info } = this.props;
    console.log("image", info);
    return (
      <div className="container info_container">
        <div className="row">
          <div className="col-md-12">
            <div className="row info_meta-container">
              <div className="col-md-4 info_meta_image-container">
                <div
                  className="info_meta-image"
                  style={{ backgroundImage: `url(${info.image})` }}
                ></div>
              </div>
              <div className="info_meta-details">
                <div className="row">
                  <div className="col-md-12">
                    <h3 className="info_meta-title">{info.companyName}</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">Price: ${info.price}</div>
                      <div className="col-md-6">Market Cap: {info.mktCap}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">Exchange: {info.exchange}</div>
                      <div className="col-md-6">Industry: {info.industry}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {info.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StockPage.propTypes = {
  fetchStockInfo: PropTypes.func.isRequired,
  info: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    info: state.stockPageInfo.info,
    isLoading: state.stockPageInfo.isLoading,
  };
};

export default connect(mapStateToProps, { fetchStockInfo })(StockPage);
