import React from 'react';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        this.showBackButton = this.showBackButton.bind(this);
    }
    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.videoId);
    }


    showBackButton(e){
        e.preventDefault()
        const firstdiv = document.getElementById('root').getElementsByTagName("div")[1];
        firstdiv.removeClass('hiddenbutton');
        firstdiv.addClass('hiddenbutton');
    }

    render(){
        return (
            <div onMouseMove = {() => this.showBackButton} className='showVideoBackground'>
                <div className='backbutton hiddenbutton' onClick={() => this.props.history.goBack()}> <img src={window.backindexarrow} className="backarrow"/>  </div>
                {this.props.video ? <div className='showVideoParent'>
                    <video controls autoPlay className="showVideo"> <source src={this.props.video.video_url} type="video/mp4" /> </video> </div> : <p>no video</p>}
            </div>
        )
    }
}

export default VideoShow