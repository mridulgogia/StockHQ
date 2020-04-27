import axios from "axios";

export const FETCHING_ACTIVE = "FETCHING_ACTIVE";
export const FETCHING_GAINERS = "FETCHING_GAINERS";
export const FETCHING_LOSERS = "FETCHING_LOSERS";

export const FETCHED_ACTIVE = "FETCHED_ACTIVE";
export const FETCHED_GAINERS = "FETCHED_GAINERS";
export const FETCHED_LOSERS = "FETCHED_LOSERS";

export const ERROR_ACTIVE = "ERROR_ACTIVE";
export const ERROR_GAINERS = "ERROR_GAINERS";
export const ERROR_LOSERS = "ERROR_LOSERS";

export const fetchMostActivities = (fetchParam) => (dispatch) => {
  let fetch, loading, fetched, error;
  switch (fetchParam) {
    case "ACTIVES":
      fetch = "actives";
      loading = FETCHING_ACTIVE;
      fetched = FETCHED_ACTIVE;
      error = ERROR_ACTIVE;
      break;
    case "GAINERS":
      fetch = "gainers";
      loading = FETCHING_GAINERS;
      fetched = FETCHED_GAINERS;
      error = ERROR_GAINERS;
      break;
    case "LOSERS":
      fetch = "LOSERS";
      loading = "FETCHING_LOSERS";
      fetched = FETCHED_LOSERS;
      error = ERROR_LOSERS;
      break;
    default:
      fetch = "actives";
      loading = FETCHING_ACTIVE;
      fetched = FETCHED_ACTIVE;
      error = ERROR_ACTIVE;
  }
  dispatch({ type: loading });
  axios
    .get("/api/stock/" + fetch)
    .then((res) => {
      dispatch({
        type: fetched,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: error,
        payload: err,
      })
    );
};
