import { connect } from 'react-redux';
import Video from './video';
import {withRouter} from 'react-router-dom';
// import { renderVideos } from '../../actions/video_actions';
import * as mylistActions from '../../actions/mylist_actions';


const mapStateToProps = (state,ownProps) => {
    let userId = state.sessions.id;
    return ({
        currentUser: state.entities.users[userId], //possibly take this out as logout is handled by nav
        // mylists: Object.values(state.entities.mylists),
        // videos: Object.values(state.entities.videos)
        video: ownProps.video,
        handleHoverPlay: ownProps.handleHoverPlay,
        indexList: ownProps.indexList,
         
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        //  logoutCurrentUser: () => dispatch(logout()), //possibly redundant
        // renderVideos: () => dispatch(renderVideos()),
        createMyList: (videoId) => dispatch(mylistActions.createMyList(videoId)),
        deleteMyList: (videoId) => dispatch(mylistActions.deleteMyList(videoId)),
        // fetchLists: () => dispatch(mylistActions.fetchLists())
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Video));


