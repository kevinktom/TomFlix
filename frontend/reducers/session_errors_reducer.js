import * as ACTIONS from "../actions/session_actions.js";

export default (oldstate = [], action) => {
  Object.freeze(oldstate);
  switch (action.type) {
    case ACTIONS.RECEIVE_ERRORS:
      // let newstate = Object.assign({}, {[errors]: action.errors})
      return action.errors;
    case ACTIONS.RECEIVE_CURRENT_USER:
      // let newstate2 = Object.assign({}, { [errors]: action.errors });
      // return newstate2;
      return [];
    default:
      return oldstate;
  }
};
