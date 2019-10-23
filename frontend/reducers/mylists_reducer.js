import * as myListActions from '../actions/mylist_actions';

export default (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch (action.type){
        case myListActions.FETCH_MYLISTS:
            return action.videos;
        case myListActions.CREATEMYLIST:
            return Object.assign({}, oldstate, {[action.mylistId.id]: mylistId});
        case myListActions.DELETEMYLIST:
            let newstate = merge({}, oldstate);
            delete newstate[action.videoId];
            return newstate;
        default:
            return oldstate;
    }
};