import { combineReducers } from "redux";

import auth from "./authReducer";
import mostActivities from "./mostActivitiesReducer";
import stockPageInfo from "./stockPageReducer";
export default combineReducers({
  auth: auth,
  mostActivities: mostActivities,
  stockPageInfo: stockPageInfo,
});
