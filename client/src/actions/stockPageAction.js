import axios from "axios";

export const FETCHED_INFO_META = "FETCHED_INFO_META";

export const FETCHED_INFO_QUOTE = "FETCHED_INFO_QUOTE";

export const FETCHING_INFO = "FETCHING_INFO";
export const ERROR_INFO = "ERROR_INFO";

export const fetchStockInfo = (stockName) => (dispatch) => {
  dispatch({ type: FETCHING_INFO });
  stockName = stockName.split("/")[2];

  axios("/api/company/profile/" + stockName)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: FETCHED_INFO_META,
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
    dispatch({
      type: FETCHING_INFO
    })
  axios("/api/company/quote/" + stockName)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: FETCHED_INFO_QUOTE,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_INFO,
          payload: res.data,
        });
      }
    })
    .catch((err) =>
      dispatch({
        type: ERROR_INFO,
        payload: err,
      })
    );
};
