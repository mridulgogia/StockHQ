import React, { Component } from 'react';
import { connect } from "react-redux";

import {fetchCompanyList } from "../../../actions/homeBannerAction";
class Banner extends Component {
    componentDidMount() {
        this.props.fetchCompanyList();
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {fetchCompanyList})(Banner);