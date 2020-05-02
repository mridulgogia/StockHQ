import {
  REQUEST_INIT_REGISTER,
  REQUEST_COMPLETED_REGISTER,
  REQUEST_ERROR_REGISTER,
  REQUEST_COMPLETED_LOGIN,
  REQUEST_ERROR_LOGIN,
  REQUEST_INIT_LOGIN,
} from "../actions/authAction";
import isEmpty from "../validation/isEmpty";

export default function auth(
  state = {
    isLoading: false,
    isAuthenticated: false,
    isVerified: false,
    user: {},
    error: {},
  },
  action
) {
  switch (action.type) {
    case REQUEST_INIT_REGISTER:
      state = {
        ...state,
        isLoading: true,
        error: {},
      };
      return state;
    case REQUEST_COMPLETED_REGISTER:
      state = {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuthenticated: !isEmpty(action.payload),
      };
      return state;
    case REQUEST_ERROR_REGISTER:
      state = {
        ...state,
        isLoading: false,
        error: action.payload,
      };
      return state;
    case REQUEST_INIT_LOGIN:
      state = {
        ...state,
        isLoading: true,
        error: {},
      };
      return state;
    case REQUEST_COMPLETED_LOGIN:
      state = {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuthenticated: !isEmpty(action.payload),
        isVerified: action.payload.isVerified
      };
      return state;
    case REQUEST_ERROR_LOGIN:
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
