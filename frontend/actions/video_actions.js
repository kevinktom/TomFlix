import * as videoActions from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const FETCH_VIDEO = "FETCH_VIDEO";

const receiveAllVideos = videos => {
    return {
        type: RECEIVE_VIDEOS,
        videos
    }
}

const receiveVideo = video => {
    return {
        type: FETCH_VIDEO,
        video
    }
}

export const renderVideos = videos => dispatch => {
    return videoActions.allvids(videos).then( videos => {
        dispatch(receiveAllVideos(videos))});
}

export const fetchVideo = id => dispatch => {
    return videoActions.fetchVideo(id).then( video => {dispatch(receiveVideo(video))})
}