import { connect } from 'react-redux';
import Videos from './videos';
import {renderVideos} from '../../actions/video_actions';
import * as mylistActions from '../../actions/mylist_actions';


const mapStateToProps = state => {
  let userId = state.sessions.id;
  return ({
     currentUser:state.entities.users[userId], 
     mylists: Object.values(state.entities.mylists),
     videos: Object.values(state.entities.videos)
  })
}

const mapDispatchToProps = dispatch => {
   return ({
    renderVideos: () => dispatch(renderVideos()),
    createMyList: (videoId) => dispatch(mylistActions.createMyList(videoId)),
    deleteMyList: (videoId) => dispatch(mylistActions.deleteMyList(videoId)),
    fetchLists: () => dispatch(mylistActions.fetchLists())
   })
}

export default connect(mapStateToProps, mapDispatchToProps)(Videos);


