import { FETCHING_COMPANYLIST, FETCHED_COMPANYLIST, ERROR_COMPANYLIST } from "../actions/homeBannerAction";

export default function homeBanner(state = {
    isLoading: false,
    list: [],
    error: null,
}, action) {
    switch (action.type) {
        case FETCHING_COMPANYLIST:
            state = {
                ...state,
                isLoading: true,
                error: null
            }
            return state;
        case FETCHED_COMPANYLIST:
            state = {
                ...state,
                list: action.payload,
            }
            return state;
        case ERROR_COMPANYLIST:
            state = {
                ...state,
                isLoading: false,
                error: action.payload
            }
            return state;
        default:
            return state;
    }
}