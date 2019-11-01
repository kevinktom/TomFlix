import React from 'react';

class Video extends React.Component {
    constructor(props) {
        super(props);
        // this.video = props.video;
        this.state = { myList: false };
        this.handleHoverPlay = this.handleHoverPlay.bind(this);
        this.handleHoverLeave = this.handleHoverLeave.bind(this);
    }

    handleHoverPlay(e) {
        // debugger
        let vid = document.getElementById("mainvid");
        e.persist();
        e.target.play().then(null, () => {
            e.target.muted = true
            e.target.play();
        });
        this.setState({ muted: true });
        vid.muted = true;
    }


    handleHoverLeave(e) {
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
        e.currentTarget.load();
    }

    handleMyList() {
        // let listbutton = document.getElementById("addlistbutton")
        if (this.state.myList) {
            this.props.deleteMyList(this.props.video.id).then(this.props.fetchLists);
            this.setState({ myList: false });
        }
        else {
            this.props.createMyList(this.props.video.id).then(this.props.fetchLists);
            this.setState({ myList: true });
        }
    }

    // videos -> VIDEOCONTAINER <VideoContainer video={video} handleHoverPlay={this.handleHoverPLay}/>
        // mylist -> VIDEOCONTAINER <VideoContainer video={video} handleHoverPlay={this.handleHoverPLay}/>
    render(){

    return(
        <video className="rowvideo" poster={this.props.video.photo_url} onClick={() => this.props.history.push(`/browse/${this.props.video.id}`)} > <source src={this.props.video.video_url} type="video/mp4" /> </video>
        // <video className="rowvideo" poster={this.props.video.photo_url} onMouseOver={this.props.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.video.video_url} type="video/mp4" /> </video>
    )
    }
}

export default Video;