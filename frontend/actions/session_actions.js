export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import * as AjaxRequests from "../util/session_api_util";

const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = user => dispatch => {
  return AjaxRequests.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    failedResponse => dispatch(receiveErrors(failedResponse))
  );
};

export const logout = () => dispatch => {
  return AjaxRequests.logout().then(dispatch(logoutCurrentUser()));
};

export const signup = user => dispatch => {
  return AjaxRequests.signup(user).then(user =>
    dispatch(receiveCurrentUser(user))
  );
};
