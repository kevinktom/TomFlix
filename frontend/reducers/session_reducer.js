import * as ACTIONS from "../actions/session_actions.js";

export default (oldstate = {currentUser: null}, action) => {
  Object.freeze(oldstate);
  switch (action.type) {
    case ACTIONS.RECEIVE_CURRENT_USER:
      return Object.assign({},{ currentUser: action.currentUser});
    case ACTIONS.LOGOUT_CURRENT_USER:
      return {currentUser:null}
    default:
      return oldstate;
  }
};
