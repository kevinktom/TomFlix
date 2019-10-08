import React from 'react';
// import { Link } from 'react-router-dom';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        this.showBackButton = this.showBackButton.bind(this);
    }
    componentDidMount(){
        // debugger
        this.props.fetchVideo(this.props.match.params.videoId)
        // console.log(this.props.match.params.videoId)
        // console.log(this.props)
        // debugger
    }

    // componentDidUpdate(prevProps){
    //     // debugger
    //     if (this.props.video.id !== prevProps.match.params.videoId) {
    //         this.props.fetchVideo(this.props.video.id);
    //     }
    // }

    showBackButton(e){
        e.preventDefault()
        const firstdiv = document.getElementById('root').getElementsByTagName("div")[1];
        firstdiv.removeClass('hiddenbutton');
        // sleep(3000);
        firstdiv.addClass('hiddenbutton');
    }

    render(){
        // debugger
        return (
            <div onMouseMove = {() => this.showBackButton} className='showVideoBackground'>
                <div className='backbutton hiddenbutton' onClick={() => this.props.history.push(`/browse`)}> <img src={window.backindexarrow} className="backarrow"/>  </div>
                {this.props.video ? <div className='showVideoParent'>
                    <video controls autoPlay className="showVideo"> <source src={this.props.video.video_url} type="video/mp4" /> </video> </div> : <p>no video</p>}
            </div>
        )
    }
}

export default VideoShow