import { combineReducers } from "redux";

import auth from "./authReducer";
import mostActivities from "./mostActivitiesReducer";
import stockPageInfo from "./stockPageReducer";
import modals from "./modalsReducer";
import { verifyAcc } from "./verifyMobileReducer";
import { verifyCode } from "./verifyMobileReducer";
export default combineReducers({
  auth: auth,
  mostActivities: mostActivities,
  stockPageInfo: stockPageInfo,
  modals: modals,
  verifyAcc: verifyAcc,
  verifyCode: verifyAcc,
});
