import { connect } from 'react-redux';
import Video from './video';
import {withRouter} from 'react-router-dom';
import * as mylistActions from '../../actions/mylist_actions';


const mapStateToProps = (state,ownProps) => {
    let userId = state.sessions.id;
    return ({
        currentUser: state.entities.users[userId], 
        video: ownProps.video,
        handleHoverPlay: ownProps.handleHoverPlay,
        index: ownProps.index,
         
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        createMyList: (videoId) => dispatch(mylistActions.createMyList(videoId)),
        deleteMyList: (videoId) => dispatch(mylistActions.deleteMyList(videoId)),
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Video));


