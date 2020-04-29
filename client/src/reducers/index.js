import { combineReducers } from "redux";

import authReducer from "./authReducer";
import mostActivities from "./mostActivitiesReducer";
import stockPageInfo from "./stockPageReducer";
export default combineReducers({
  authReducer: authReducer,
  mostActivities: mostActivities,
  stockPageInfo: stockPageInfo,
});
