import { combineReducers } from "redux";

import mostActivities from "./mostActivitiesReducer";
import stockPageInfo from "./stockPageReducer";

export default combineReducers({
  mostActivities: mostActivities,
  stockPageInfo: stockPageInfo,
});
