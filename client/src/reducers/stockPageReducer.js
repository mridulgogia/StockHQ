import {
  FETCHING_INFO,
  FETCHED_INFO,
  ERROR_INFO,
} from "../actions/stockPageAction";

export default function stockPageInfo(
  state = {
    isLoading: false,
    info: {},
    error: null,
  },
  action
) {
  switch (action.type) {
    case FETCHING_INFO:
      state = {
        ...state,
        isLoading: true,
        error: null,
      };
      return state;
    case FETCHED_INFO:
      state = {
        ...state,
        isLoading: false,
        error: null,
        info: action.payload,
      };
      return state;
    case ERROR_INFO:
      state = {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
