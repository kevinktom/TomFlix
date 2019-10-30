import React from 'react';
import NavBarContainer from '../navbar/navbar_container';

class Mylist extends React.Component{
    constructor(props){
        super(props);
        this.handleHoverPlay = this.handleHoverPlay.bind(this);
        this.handleHoverLeave = this.handleHoverLeave.bind(this);

    }

    handleHoverPlay(e) {
        // let vid = document.getElementById("mainvid");
        e.persist();
        e.target.play().then(null, () => {
            e.target.muted = true
            e.target.play();
        });
        // this.setState({ muted: true });
        // vid.muted = true;
    }


    handleHoverLeave(e) {
        // debugger
        // if (e.target.className !== "rowvideo" && e.target.className !== "addList"){
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
            e.currentTarget.load();
        // }
    }

    componentDidMount(){
        this.props.fetchLists();
        this.props.renderVideos();
        // debugger
    }

    render(){
        // debugger
        let lists = [];
        const currentUser = this.props.currentUser;
        this.props.mylists.forEach(list => {
            // debugger
            if (list.user_id === parseInt(currentUser)){
                this.props.videos.forEach(video => {
                    if (video.id === list.video_id){
                        lists.push(video);
                    }
                })
            }
        })
        // debugger
        const videoArr = lists.map((video, idx) => {
            if (idx % 6 === 0){
                return (
                    <div onClick={() => this.props.history.push(`/browse/${video.id}`)} className='videodivfirstlist' key={video.id}>
                        <video className="rowvideo" poster={video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={video.video_url} type="video/mp4" /> </video>
                        <img className="addList" src={window.removelist} alt="" />
                    </div>
                )
            }
            else if (idx % 6 === 5){
                return (
                    <div onClick={() => this.props.history.push(`/browse/${video.id}`)} className='videodivlastlist' key={video.id}>
                        <video className="rowvideo" poster={video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={video.video_url} type="video/mp4" /> </video>
                    </div>
                )
            }
            else{
            return (
                <div onClick={() => this.props.history.push(`/browse/${video.id}`)} className='videodivlist' key={video.id}>
                    <video className="rowvideo" poster={video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={video.video_url} type="video/mp4" /> </video>
                    
                </div>
            );
            }
        })
        return (
            <div className="indexGrid">
                <NavBarContainer />
                {this.props.videos.length >= 1 ? 
                    <div className="mylist">
                        <p id="mylisttext">My List</p>
                        <div className="secondsectionList">
                        {videoArr}

                    </div>
                    </div>

                    : <div className="bottomhalf"></div>}


            </div>
        )




    }


}

export default Mylist;