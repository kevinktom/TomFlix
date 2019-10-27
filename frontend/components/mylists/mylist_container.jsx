import Mylist from './mylist';
import { connect } from 'react-redux';
import * as mylistActions from '../../actions/mylist_actions';
import { renderVideos } from '../../actions/video_actions';

const mapStateToProps = (state) => {
    // debugger
    let userId = state.sessions.id;
    return ({
        // currentUser: state.entities.users[userId],
        currentUser: currentUser,
        mylists: Object.values(state.entities.mylists),
        videos: Object.values(state.entities.videos)
    })
}


const mapDispatchToProps = dispatch => {
    return ({
        fetchLists: () => dispatch(mylistActions.fetchLists()),
        renderVideos: () => dispatch(renderVideos())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Mylist);