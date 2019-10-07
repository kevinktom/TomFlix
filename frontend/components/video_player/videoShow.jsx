import React from 'react';
// import { Link } from 'react-router-dom';

class VideoShow extends React.Component {
    componentDidMount(){
        debugger
        this.props.fetchVideo(this.props.match.params.videoId)
    }

    render(){
        return (
            <div className='showVideoBackground'>
                {this.props.video ? <div className='showVideoParent'>
                    <video controls autoplay className="showVideo"> <source src={this.props.video.video_url} type="video/mp4" /> </video> </div> : <p>no video</p>}
            </div>
        )
    }
}

export default VideoShow