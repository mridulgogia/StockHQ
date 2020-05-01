import axios from "axios";

export const FETCHING_FOLLOW_STATE = "FETCHING_FOLLOW_STATE";
export const FETCHED_FOLLOW_STATE = "FETCHED_FOLLOW_STATE";
export const ERROR_FOLLOW_STATE = "ERROR_FOLLOW_STATE";

export const fetchFollowState = (pathname) => dispatch => {
  dispatch({
    type: FETCHING_FOLLOW_STATE,
  });

  const stockName = pathname.split("/")[2];

  axios
    .get("/api/follow/followStockCheck/" + stockName)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: FETCHED_FOLLOW_STATE,
          payload: res.data
        });
      } else {
          dispatch({
              type: ERROR_FOLLOW_STATE,
              payload: res.data
          })
      }
    })
    .catch((err) =>
      dispatch({
        type: ERROR_FOLLOW_STATE,
        payload: err,
      })
    );
};
