import axios from "axios";

export const INIT_REQUEST_VERIFY = "INIT_REQUEST_VERIFY";
export const COMPLETED_REQUEST_VERIFY = "COMPLETED_REQUEST_VERIFY";
export const ERROR_REQUEST_VERFIFY = "ERROR_REQUEST_VERFIFY";

export const onClickVerifyNumber = (mobileNumber, countryCode, toggleModal) => (
  dispatch
) => {
  dispatch({ type: INIT_REQUEST_VERIFY });

  mobileNumber = mobileNumber
    .split("")
    .filter((item) => {
      if (item === " " || item === "-") {
        return "";
      } else {
        return item;
      }
    })
    .join("");

  axios
    .post("/api/verify/mobile/number", { number: mobileNumber })
    .then((res) => {
      if (res.status === 200) {
        toggleModal();
        dispatch({
          type: COMPLETED_REQUEST_VERIFY,
          payload: res.data,
        });
      } else {
        dispatch({
          type: ERROR_REQUEST_VERFIFY,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      console.log("err", err.response.data);
      dispatch({
        type: ERROR_REQUEST_VERFIFY,
        payload: err.response.data,
      });
    });
};
