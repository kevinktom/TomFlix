import * as videoActions from '../actions/video_actions';


export default (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch (action.type) {
        case videoActions.RECEIVE_VIDEOS:
            // let newstate = Object.assign({}, oldstate, {[videos]: action.videos });
            return action.videos;
        default:
            return oldstate;
    }
};

