import {
  FETCHING_INFO,
  ERROR_INFO,
  FETCHED_INFO_META,
  FETCHED_INFO_QUOTE,
} from "../actions/stockPageAction";

export default function stockPageInfo(
  state = {
    isLoading: false,
    info: {},
    quote: {},
    error: null,
  },
  action
) {
  switch (action.type) {
    case FETCHING_INFO:
      state = {
        ...state,
        isLoading: true,
        // error: null,
      };
      return state;
    case FETCHED_INFO_META:
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
      return state;
    case FETCHED_INFO_QUOTE:
      state = {
        ...state,
        isLoading: false,
        quote: action.payload,
      };
      return state;
    default:
      return state;
  }
}
