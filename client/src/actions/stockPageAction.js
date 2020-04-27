import axios from "axios";
import { FETCH_PROXY } from "../constants";

export const FETCHING_INFO = "FETCHING_INFO";
export const FETCHED_INFO = "FETCHED_INFO";
export const ERROR_INFO = "ERROR_INFO";

export const fetchStockInfo = (stockName) => (dispatch) => {
  dispatch({ type: FETCHING_INFO });
  stockName = stockName.split("/")[2];

  axios("/api/company/profile/" + stockName)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: FETCHED_INFO,
          payload: res.data.data.profile,
        });
      } else {
        dispatch({
          type: ERROR_INFO,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: ERROR_INFO,
        payload: err,
      });
    });
};
