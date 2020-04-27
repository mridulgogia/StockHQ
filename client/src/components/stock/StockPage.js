import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchStockInfo } from "../../actions/stockPageAction";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

class StockPage extends Component {
  componentDidMount() {
    this.props.fetchStockInfo(this.props.location.pathname);
  }
  render() {
    const { info } = this.props;
    let quote = this.props.quote;
    if (
      quote === undefined ||
      quote === null ||
      (typeof quote === "object" && Object.keys(quote).length === 0) ||
      (typeof quote === "string" && quote.trim().length === 0)
    ) {
      return null;
    }
    quote = this.props.quote.data[0];
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
                    <h1 className="info_meta-title">
                      <Link
                        to={info.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.companyName}
                      </Link>
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 meta_tag-container">
                    <div className="row">
                      <div className="col-md-6 meta-tag">Price: ${info.price}</div>
                      <div className="col-md-6 meta-tag">Market Cap: {info.mktCap}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 meta-tag">Exchange: {info.exchange}</div>
                      <div className="col-md-6 meta-tag">Industry: {info.industry}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 info_description">{info.description}</div>
            </div>

            <div className="row">
              <div className="col-md-6 table-container">
                <Table>
                  <tbody>
                    <tr>
                      <th>Previous close</th>
                      <th>{quote.previousClose}</th>
                    </tr>
                    <tr>
                      <th>Today open</th>
                      <th>{quote.open}</th>
                    </tr>
                    <tr>
                      <th>Change percentage</th>
                      <th>{quote.changesPercentage}</th>
                    </tr>
                    <tr>
                      <th>Change</th>
                      <th>{quote.change}</th>
                    </tr>
                    <tr>
                      <th>Day Low</th>
                      <th>{quote.dayLow}</th>
                    </tr>
                    <tr>
                      <th>Day high</th>
                      <th>{quote.dayHigh}</th>
                    </tr>
                    <tr>
                      <th>Year low</th>
                      <th>{quote.yearLow}</th>
                    </tr>
                    <tr>
                      <th>Year high</th>
                      <th>{quote.yearHigh}</th>
                    </tr>
                  </tbody>
                </Table>
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
  quote: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    info: state.stockPageInfo.info,
    isLoading: state.stockPageInfo.isLoading,
    quote: state.stockPageInfo.quote,
  };
};

export default connect(mapStateToProps, { fetchStockInfo })(StockPage);
