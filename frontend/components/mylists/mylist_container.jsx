import Mylist from './mylist';
import { connect } from 'react-redux';
import * as mylistActions from '../../actions/mylist_actions';
import { renderVideos } from '../../actions/video_actions';

const mapStateToProps = (state) => {
    let userId = state.sessions.currentUser.id;
    return ({
        currentUser: userId,
        mylists: Object.values(state.entities.mylists),
        videos: Object.values(state.entities.videos)
    })
}


const mapDispatchToProps = dispatch => {
    return ({
        fetchLists: () => dispatch(mylistActions.fetchLists()),
        deleteMyList: (videoId) => dispatch(mylistActions.deleteMyList(videoId)),
        renderVideos: () => dispatch(renderVideos())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Mylist);