import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  displaySuccessModalAction,
  displayFailedModalAction,
} from "./modalsActions";

export const REQUEST_INIT_REGISTER = "REQUEST_INIT_REGISTER";
export const REQUEST_COMPLETED_REGISTER = "REQUEST_COMPLETED_REGISTER";
export const REQUEST_ERROR_REGISTER = "REQUEST_ERROR_REGISTER";

export const REQUEST_INIT_LOGIN = "REQUEST_INIT_LOGIN";
export const REQUEST_COMPLETED_LOGIN = "REQUEST_COMPLETED_LOGIN";
export const REQUEST_ERROR_LOGIN = "REQUEST_ERROR_LOGIN";

export const requestLogin = (postObj, onClose) => (dispatch) => {
  dispatch({ type: REQUEST_INIT_LOGIN });
  let error = {};

  if (
    postObj.password === "" ||
    postObj.password === undefined ||
    postObj.password === null
  ) {
    error.password = "Password Field is empty";
    dispatch({
      type: REQUEST_ERROR_LOGIN,
      payload: error,
    });
  }

  axios
    .post("/api/auth/login", postObj)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      onClose();
      displaySuccessModalAction(dispatch);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      displayFailedModalAction(dispatch);
      dispatch({
        type: REQUEST_ERROR_LOGIN,
        payload: err,
      });
    });
};

export const setCurrentUser = (decoded) => {
  return {
    type: REQUEST_COMPLETED_LOGIN,
    payload: decoded,
  };
};

export const requestRegister = (postObj, onClose) => (dispatch) => {
  dispatch({ type: REQUEST_ERROR_REGISTER });
  let error = {};

  if (
    postObj.password === "" ||
    postObj.password === undefined ||
    postObj.password === null
  ) {
    error.password = "Password Field is empty";
    dispatch({
      type: REQUEST_ERROR_LOGIN,
      payload: error,
    });
  }

  if (
    postObj.cPassword === "" ||
    postObj.cPassword === undefined ||
    postObj.cPassword === null
  ) {
    error.cPassword = "Confirm Password Field is empty";
    dispatch({
      type: REQUEST_ERROR_LOGIN,
      payload: error,
    });
  }

  if (postObj.password === postObj.cPassword) {
    error.cPassword = "Passwords does not match";
    dispatch({
      type: REQUEST_ERROR_LOGIN,
      payload: error,
    });
  }

  delete postObj.cPassword;

  axios
    .post("/api/auth/signup", postObj)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      onClose();
      displaySuccessModalAction(dispatch);
      dispatch({
        type: REQUEST_COMPLETED_REGISTER,
        payload: decoded,
      });
    })
    .catch((err) => {
      displayFailedModalAction(dispatch);
      dispatch({
        type: REQUEST_ERROR_REGISTER,
        payload: err.response.data,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);

  dispatch(setCurrentUser({}));
};
