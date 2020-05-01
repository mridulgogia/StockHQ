import {
  FETCHING_INFO,
  ERROR_INFO,
  FETCHED_INFO_META,
  FETCHED_INFO_QUOTE,
  FETCHING_HISTORICAL_CHART,
  FETCHED_HISTORICAL_CHART,
  ERROR_HISTORICAL_CHART,
} from "../actions/stockPageAction";
import {
  FETCHED_FOLLOW_STATE,
  ERROR_FOLLOW_STATE,
} from "../actions/followWidgetAction";

export default function stockPageInfo(
  state = {
    isLoading: false,
    info: {},
    quote: {},
    historicalChart: {
      isLoading: false,
      data: {},
      error: null,
    },
    duration: "15min",
    error: null,
    isFollowed: false,
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
    case FETCHING_HISTORICAL_CHART:
      state = {
        ...state,
        historicalChart: {
          ...state.historicalChart,
          isLoading: true,
        },
      };
      return state;
    case FETCHED_HISTORICAL_CHART:
      state = {
        ...state,
        historicalChart: {
          ...state.historicalChart,
          isLoading: false,
          data: action.payload,
        },
      };
      return state;
    case ERROR_HISTORICAL_CHART:
      state = {
        ...state,
        historicalChart: {
          ...state.historicalChart,
          isLoading: false,
          error: action.payload,
        },
      };
      return state;
    case FETCHED_FOLLOW_STATE:
      state = {
        ...state,
        isFollowed: action.payload,
      };
      return state;
    case ERROR_FOLLOW_STATE:
      state = {
        ...state,
        isFollowed: false,
      };
      return state;
    default:
      return state;
  }
}
