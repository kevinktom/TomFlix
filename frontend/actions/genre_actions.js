import {fetchGenre} from '../util/genre_api_util';

export const FETCH_GENRE = "FETCH_GENRE";

const receiveGenre = genre => {
    return {
        type: FETCH_GENRE,
        genre
    }
}

export const getGenre = id => dispatch => {
    return fetchGenre(id).then(genre => dispatch(receiveGenre(genre)));
}

