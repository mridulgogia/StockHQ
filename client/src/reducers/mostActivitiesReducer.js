import {
  FETCHING_ACTIVE,
  FETCHED_ACTIVE,
  ERROR_ACTIVE,
  FETCHING_GAINERS,
  FETCHED_GAINERS,
  ERROR_GAINERS,
  FETCHING_LOSERS,
  FETCHED_LOSERS,
  ERROR_LOSERS,
} from "../actions/mostActivitiesAction";

export default function mostActives(
  state = {
    mostActive: {
      isLoading: false,
      data: {},
      error: null,
    },
    mostGainer: {
      isLoading: false,
      data: {},
      error: null,
    },
    mostLoser: {
      isLoading: false,
      data: {},
      error: null,
    },
  },
  action
) {
  switch (action.type) {
    case FETCHING_ACTIVE:
      state = {
        ...state,
        mostActive: {
          ...state.mostActive,
          isLoading: true,
          error: null,
        },
      };
      return state;
    case FETCHED_ACTIVE:
      state = {
        ...state,
        mostActive: {
          ...state.mostActive,
          isLoading: false,
          error: null,
          data: action.payload,
        },
      };
      return state;
    case ERROR_ACTIVE:
      state = {
        ...state,
        mostActive: {
          ...state.mostActive,
          isLoading: false,
          error: action.payload,
        },
      };
      return state;
    case FETCHING_GAINERS:
      state = {
        ...state,
        mostGainer: {
          ...state.mostGainer,
          isLoading: true,
          error: null,
        },
      };
      return state;
    case FETCHED_GAINERS:
      state = {
        ...state,
        mostGainer: {
          ...state.mostGainer,
          isLoading: false,
          error: null,
          data: action.payload,
        },
      };
      return state;
    case ERROR_GAINERS:
      state = {
        ...state,
        mostGainer: {
          ...state.mostGainer,
          isLoading: false,
          error: action.payload,
        },
      };
      return state;
    case FETCHING_LOSERS:
      state = {
        ...state,
        mostLoser: {
          ...state.mostLoser,
          isLoading: true,
          error: null,
        },
      };
      return state;
    case FETCHED_LOSERS:
      state = {
        ...state,
        mostLoser: {
          ...state.mostLoser,
          isLoading: false,
          error: null,
          data: action.payload,
        },
      };
      return state;
    case ERROR_LOSERS:
      state = {
        ...state,
        mostLoser: {
          ...state.mostLoser,
          isLoading: false,
          error: action.payload,
        },
      };
      return state;
    default:
      return state;
  }
}
