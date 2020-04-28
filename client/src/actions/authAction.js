import axios from "axios";

export const REQUEST_INIT_REGISTER = "REQUEST_INIT_REGISTER";
export const REQUEST_COMPLETED_REGISTER = "REQUEST_COMPLETED_REGISTER";
export const REQUEST_ERROR_REGISTER = "REQUEST_ERROR_REGISTER";

export const REQUEST_INIT_LOGIN = "REQUEST_INIT_LOGIN";
export const REQUEST_COMPLETED_LOGIN = "REQUEST_COMPLETED_LOGIN";
export const REQUEST_ERROR_LOGIN = "REQUEST_ERROR_LOGIN";

export const requestLogin = (postObj) => (dispatch) => {
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
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const requestRegister = (postObj) => (dispatch) => {
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
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
