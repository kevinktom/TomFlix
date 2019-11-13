import * as videoActions from '../actions/video_actions';


export default (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch (action.type) {
        case videoActions.RECEIVE_VIDEOS:
            return action.videos;
        case videoActions.FETCH_VIDEO:
            return Object.assign({}, oldstate, {[action.video.id]: action.video});
        default:
            return oldstate;
    }
};

