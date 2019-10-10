import {combineReducers} from 'redux';
import users from './users_reducer';
import videos from './videos_reducer';
import genres from './genres_reducer';

export default combineReducers({
  users,
  videos,
  genres,
})