import { combineReducers } from "redux";

import auth from "./authReducer";
import mostActivities from "./mostActivitiesReducer";
import stockPageInfo from "./stockPageReducer";
import homeBanner from "./homeBannerReducer";
import modals from "./modalsReducer";
import { verifyAcc } from "./verifyMobileReducer";
import { verifyCode } from "./verifyMobileReducer";
import {mobileNumber} from "./miscReducer";

export default combineReducers({
  auth: auth,
  mostActivities: mostActivities,
  stockPageInfo: stockPageInfo,
  homeBanner: homeBanner,
  modals: modals,
  verifyAcc: verifyAcc,
  verifyCode: verifyCode,
  mobileNumber: mobileNumber,  
});
