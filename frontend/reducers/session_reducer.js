import * as ACTIONS from "../actions/session_actions.js";

export default (oldstate = {}, action) => {
  Object.freeze(oldstate);
  switch (action.type) {
    case ACTIONS.RECEIVE_CURRENT_USER:
      // return Object.assign({},{ id: action.currentUser.id });
      return Object.assign({},{ currentUser: action.currentUser});
    case ACTIONS.LOGOUT_CURRENT_USER:
      // return {id: null};
      return {currentUser:null}
    default:
      return oldstate;
  }
};
