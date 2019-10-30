import * as myListActions from '../actions/mylist_actions';
import { merge } from 'lodash';

export default (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch (action.type){
        case myListActions.FETCH_MYLISTS:
            return action.videos;
        case myListActions.CREATEMYLIST:
            // debugger
            return Object.assign({}, oldstate, { [action.videoId.id]: action.videoId});
        case myListActions.DELETEMYLIST:
            let newstate = merge({}, oldstate);
            delete newstate[action.videoId];
            return newstate;
        default:
            return oldstate;
    }
};