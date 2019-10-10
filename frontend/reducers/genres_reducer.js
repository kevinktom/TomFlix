import * as genreActions from '../actions/genre_actions';

export default (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch (action.type) {
        case genreActions.FETCH_GENRE:
            return Object.assign({}, oldstate, { [action.genre.id]: action.genre });
        default:
            return oldstate;
    }
};