export const ACTIVATE_SUCCESS_MODAL = "ACTIVATE_SUCCESS_MODAL";
export const DEACTIVATE_SUCCESS_MODAL = "DEACTIVATE_SUCCESS_MODAL";

export const ACTIVATE_FAILED_MODAL = "ACTIVATE_FAILED_MODAL";
export const DEACTIVATE_FAILED_MODAL = "DEACTIVATE_FAILED_MODAL";

export const ACTIVATE_VERIFY_MODAL = "ACTIVATE_VERIFY_MODAL";
export const DEACTIVATE_VERIFY_MODAL = "DEACTIVATE_VERIFY_MODAL";

export const displaySuccessModal = () => (dispatch) => {
  dispatch({ type: ACTIVATE_SUCCESS_MODAL });
  setTimeout(() => dispatch({ type: DEACTIVATE_SUCCESS_MODAL }), 1000);
};

export const displayFailedModal = () => (dispatch) => {
  dispatch({ type: ACTIVATE_FAILED_MODAL });
  setTimeout(() => dispatch({ type: DEACTIVATE_FAILED_MODAL }), 1000);
};

export const displayVerifyModal = () => (dispatch) => {
  dispatch({ type: ACTIVATE_VERIFY_MODAL });
  setTimeout(() => dispatch({ type: DEACTIVATE_VERIFY_MODAL }), 1000);
};

export const displaySuccessModalAction = (dispatch) => {
  dispatch({ type: ACTIVATE_SUCCESS_MODAL });
  setTimeout(() => dispatch({ type: DEACTIVATE_SUCCESS_MODAL }), 1000);
};

export const displayFailedModalAction = (dispatch) => {
  dispatch({ type: ACTIVATE_FAILED_MODAL });
  setTimeout(() => dispatch({ type: DEACTIVATE_FAILED_MODAL }), 1000);
};

export const displayVerifyModalAction = (dispatch) => {
  dispatch({ type: ACTIVATE_VERIFY_MODAL });
  setTimeout(() => dispatch({ type: DEACTIVATE_VERIFY_MODAL }), 1000);
};

