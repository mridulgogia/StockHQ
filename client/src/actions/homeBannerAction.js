import axios from "axios";

export const FETCHING_COMPANYLIST = "FETCHING_COMPANYLIST";
export const FETCHED_COMPANYLIST = "FETCHED_COMPANYLIST";
export const ERROR_COMPANYLIST = "ERROR_COMPANYLIST";

export const fetchCompanyList = () => dispatch => {
    dispatch({
        type: FETCHING_COMPANYLIST,
    })
    axios.get("/api/comapny/list")
    .then(res => {
        dispatch({
            type: FETCHED_COMPANYLIST,
            payload: res.data.stocklist
        });
    })
    .catch(err => dispatch({
        type: ERROR_COMPANYLIST,
        payload: res.data || err
    }));
}