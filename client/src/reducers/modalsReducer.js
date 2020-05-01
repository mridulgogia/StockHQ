import {
  ACTIVATE_SUCCESS_MODAL,
  DEACTIVATE_SUCCESS_MODAL,
  ACTIVATE_FAILED_MODAL,
  DEACTIVATE_FAILED_MODAL,
  ACTIVATE_VERIFY_MODAL,
  DEACTIVATE_VERIFY_MODAL,
} from "../actions/modalsActions";

export default function modals(
  state = {
    verifyModal: true,
    successModal: false,
    failedModal: false,
  },
  action
) {
  switch (action.type) {
    case ACTIVATE_SUCCESS_MODAL:
      state = { ...state, successModal: true };
      return state;
    case DEACTIVATE_SUCCESS_MODAL:
      state = { ...state, successModal: false };
      return state;
    case ACTIVATE_FAILED_MODAL:
      state = { ...state, FailedModal: true };
      return state;
    case DEACTIVATE_FAILED_MODAL:
      state = { ...state, FailedModal: false };
      return state;
    case ACTIVATE_VERIFY_MODAL:
      state = { ...state, VerifyModal: true };
      return state;
    case DEACTIVATE_VERIFY_MODAL:
      state = { ...state, VerifyModal: false };
      return state;
    default:
      return state;
  }
}
