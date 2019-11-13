import * as myListActions from '../util/mylist_api_util';

export const FETCH_MYLISTS = "FETCH_MYLISTS";
export const CREATEMYLIST = "CREATEMYLIST";
export const DELETEMYLIST = "DELETEMYLIST";


const fetchMyLists = videos => {
    return {
        type: FETCH_MYLISTS,
        videos
    }
}

const createList = videoId => {
    return{
        type: CREATEMYLIST,
        videoId
    }
}

const deleteList = videoId => {
    return{
        type: DELETEMYLIST,
        videoId
    }
}

export const fetchLists = videos => dispatch => {
    return myListActions.getMyLists(videos).then((videos) => dispatch(fetchMyLists(videos)))
}

export const createMyList = (videoId) => dispatch => {
    return myListActions.createList(videoId).then((vid) => dispatch(createList(vid)))
}

export const deleteMyList = id => dispatch => {
    return myListActions.deleteMyList(id).then(videoId => dispatch(deleteList(videoId)))
}