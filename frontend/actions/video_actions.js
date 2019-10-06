import {allvids} from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";

const receiveAllVideos = videos => {
    return {
        type: RECEIVE_VIDEOS,
        videos
    }
}

export const renderVideos = videos => dispatch => {
    return allvids(videos).then( videos => {
        // debugger
        dispatch(receiveAllVideos(videos))});
}