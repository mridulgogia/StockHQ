import {
  INIT_REQUEST_VERIFY,
  COMPLETED_REQUEST_VERIFY,
  ERROR_REQUEST_VERFIFY,
  INIT_REQUEST_CODE,
} from "../actions/verifyMobileAction";

export function verifyAcc(
  state = {
    isLoading: false,
    error: null,
    msg: "",
  },
  action
) {
  switch (action.type) {
    case INIT_REQUEST_VERIFY:
      state = {
        ...state,
        isLoading: true,
        error: null,
      };
      return state;
    case COMPLETED_REQUEST_VERIFY:
      state = {
        ...state,
        isLoading: false,
        msg: action.payload,
      };
      return state;
    case ERROR_REQUEST_VERFIFY:
      state = {
        ...state,
        isLoading: false,
        error: action.payload,
      };
      return state;
    default:
      return state;
  }
}

export function verifyCode(state = {
  isLoading: false,
  msg: "",
  error: null
}, action) {
  switch (action.type) {
    case INIT_REQUEST_CODE:
      return state;
    default:
      return state;
  }
}
