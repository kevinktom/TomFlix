import Search from './search';
import { connect } from 'react-redux';
import * as mylistActions from '../../actions/mylist_actions';
import { renderVideos } from '../../actions/video_actions';

const mapStateToProps = (state) => {
    let userId = state.sessions.currentUser.id;
    return ({
        currentUser: userId,
        videos: Object.values(state.entities.videos),
        mylists: Object.values(state.entities.mylists)
    })
}


const mapDispatchToProps = dispatch => {
    return ({
        fetchLists: () => dispatch(mylistActions.fetchLists()),
        createMyList: (videoId) => dispatch(mylistActions.createMyList(videoId)),
        deleteMyList: (videoId) => dispatch(mylistActions.deleteMyList(videoId)),
        renderVideos: () => dispatch(renderVideos())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);