import axios from "axios";

export const FETCHING_MOBILE_NUMBER = "FETCHING_MOBILE_NUMBER";
export const FETCHED_MOBILE_NUMBER = "FETCHED_MOBILE_NUMBER";
export const ERROR_MOBILE_NUMBER = "ERROR_MOBILE_NUMBER";

export const fetchMobileNumber = () => (dispatch) => {
  dispatch({
    type: FETCHING_MOBILE_NUMBER,
  });

  axios
    .get("/api/misc/mobile")
    .then((res) => {
      dispatch({
        type: FETCHED_MOBILE_NUMBER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR_MOBILE_NUMBER,
        payload: err.response.data,
      });
    });
};

export const clearMobileNumber = () => (dispatch) => {
  dispatch({
    type: FETCHED_MOBILE_NUMBER,
    payload: {
      mobile: "",
    },
  });
};
