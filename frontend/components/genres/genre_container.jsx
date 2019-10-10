import { connect } from 'react-redux';
import GenreShow from './genre';
import { getGenre } from '../../actions/genre_actions';
import { renderVideos } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    
    let genreId = ownProps.match.params.genreId;
    debugger
    return ({
        genre: state.entities.genres[genreId],
        videos: Object.values(state.entities.videos)

    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchGenre: id => dispatch(getGenre(id)),
        renderVideos: () => dispatch(renderVideos())
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreShow)