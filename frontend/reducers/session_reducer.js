import * as ACTIONS from "../actions/session_actions.js";

export default (oldstate = {}, action) => {
  Object.freeze(oldstate);
  switch (action.type) {
    case ACTIONS.RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case ACTIONS.LOGOUT_CURRENT_USER:
      return {id: null};
    default:
      return oldstate;
  }
};
