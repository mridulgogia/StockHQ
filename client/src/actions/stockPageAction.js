import axios from "axios";

export const FETCHED_INFO_META = "FETCHED_INFO_META";

export const FETCHED_INFO_QUOTE = "FETCHED_INFO_QUOTE";

export const FETCHING_INFO = "FETCHING_INFO";
export const ERROR_INFO = "ERROR_INFO";

export const FETCHING_HISTORICAL_CHART = "FETCHING_HISTORICAL_CHART";
export const FETCHED_HISTORICAL_CHART = "FETCHED_HISTORICAL_CHART";
export const ERROR_HISTORICAL_CHART = "ERROR_HISTORICAL_CHART";

export const fetchStockInfo = (stockName) => (dispatch) => {
  dispatch({ type: FETCHING_INFO });
  dispatch({ type: FETCHING_INFO });
  stockName = stockName.split("/")[2];

  axios.get("/api/company/profile/" + stockName)
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

export const fetchHistoricalCharts = (duration, stockName) => (dispatch) => {
  dispatch({ type: FETCHING_HISTORICAL_CHART });
  stockName = stockName.split("/")[2];

  axios
    .get(`/api/company/historicalChart/${duration}/${stockName}`)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: FETCHED_HISTORICAL_CHART,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_HISTORICAL_CHART,
          payload: res.data,
        });
      }
    })
    .catch((err) =>
      dispatch({
        type: ERROR_HISTORICAL_CHART,
        payload: err,
      })
    );
};
