import * as ACTIONS from "../actions/session_actions.js";

export default (oldstate = {}, action) => {
  Object.freeze(oldstate);
  switch (action.type) {
    case ACTIONS.RECEIVE_CURRENT_USER:
      let newstate = Object.assign({}, oldstate, {[action.currentUser.id]: action.currentUser});
      return newstate;
    default:
      return oldstate;
  }
};
