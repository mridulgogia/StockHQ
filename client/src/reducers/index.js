import { combineReducers } from "redux";

import mostActivities from './mostActivitiesReducer';

export default combineReducers({
    mostActivities: mostActivities
});