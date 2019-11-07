import { connect } from 'react-redux';
import GenreShow from './genre';
import { getGenre } from '../../actions/genre_actions';
import { renderVideos } from '../../actions/video_actions';
import * as mylistActions from '../../actions/mylist_actions';

const mapStateToProps = (state, ownProps) => {
    
    let genreId = ownProps.match.params.genreId;
    debugger
    return ({
        genre: state.entities.genres[genreId],
        mylists: Object.values(state.entities.mylists),
        videos: Object.values(state.entities.videos)

    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchGenre: id => dispatch(getGenre(id)),
        renderVideos: () => dispatch(renderVideos()),
        createMyList: (videoId) => dispatch(mylistActions.createMyList(videoId)),
        deleteMyList: (videoId) => dispatch(mylistActions.deleteMyList(videoId)),
        fetchLists: () => dispatch(mylistActions.fetchLists())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreShow)