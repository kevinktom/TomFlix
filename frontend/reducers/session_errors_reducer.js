import * as ACTIONS from "../actions/session_actions.js";

export default (oldstate = [], action) => {
  Object.freeze(oldstate);
  switch (action.type) {
    case ACTIONS.RECEIVE_ERRORS:
      return action.errors;
    case ACTIONS.RECEIVE_CURRENT_USER:
      return [];
    case ACTIONS.CLEAR_SESSION_ERRORS:
      return [];
    default:
      return oldstate;
  }
};
