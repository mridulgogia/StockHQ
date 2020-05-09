import {
  FETCHING_MOBILE_NUMBER,
  FETCHED_MOBILE_NUMBER,
  ERROR_MOBILE_NUMBER,
} from "../actions/miscAction";

export function mobileNumber(
  state = {
    isLoading: false,
    mobile: "",
    error: null,
  },
  action
) {
  switch (action.type) {
    case FETCHING_MOBILE_NUMBER:
      state = {
        ...state,
        isLoading: true,
        error: null,
      };
      return state;
    case FETCHED_MOBILE_NUMBER:
      state = {
        ...state,
        isLoading: false,
        mobile: action.payload.mobile,
      };
      return state;
    case ERROR_MOBILE_NUMBER:
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
