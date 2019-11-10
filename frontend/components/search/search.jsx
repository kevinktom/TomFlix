import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import VideoContainer from '../video/video_container';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listchange: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        }
        this.handleHoverPlay = this.handleHoverPlay.bind(this);
        this.handleHoverLeave = this.handleHoverLeave.bind(this);
        // this.removeMyList = this.removeMyList.bind(this);
        this.handleVideoList = this.handleVideoList.bind(this);
        this.checkMyList = this.checkMyList.bind(this);

    }

    handleHoverPlay(e) {
        
        let video = e.currentTarget.children[0];
        video.nextSibling.classList.remove("hiddenIcons");
        video.nextSibling.nextSibling.classList.remove("hiddenIcons");
        video.nextSibling.nextSibling.nextSibling.classList.remove("hiddenIcons");
        // debugger
        e.persist();
        video.play().then(null, () => {
            video.muted = true
            video.play();
        });

    }


    handleHoverLeave(e) {
        let video = e.currentTarget.children[0];
        video.pause();
        video.currentTime = 0;
        video.load();
        video.nextSibling.classList.add("hiddenIcons");
        video.nextSibling.nextSibling.classList.add("hiddenIcons");
        video.nextSibling.nextSibling.nextSibling.classList.add("hiddenIcons");
    }

    handleVideoList(video) {

        let currentState = this.state.listchange.slice();
        this.props.videos.forEach((vid, idx) => {
            currentState[idx] = false;
            this.props.mylists.forEach(list => {
                if (list.video_id === vid.id) {

                    currentState[idx] = true;

                }
            })

        })
        if (currentState[video.props.index]) {
            this.props.deleteMyList(video.props.video.id).then(this.props.fetchLists);
            currentState[video.props.index] = false;
            this.setState({ listchange: currentState });
            // debugger
        }
        else {
            // debugger
            this.props.createMyList(video.props.video.id).then(this.props.fetchLists);
            currentState[video.props.index] = true;
            this.setState({ listchange: currentState });
        }
        // debugger
    }

    checkMyList() {
        let currentState = this.state.listchange.slice();
        this.props.videos.forEach((video, idx) => {
            currentState[idx] = false;
            this.props.mylists.forEach(list => {
                if (list.video_id === video.id) {
                    currentState[idx] = true;

                }
            })

        })
        this.setState({ listchange: currentState });
    }

    //OLD BEFORE DIV OVER VIDEO TAG
    // handleHoverLeave(e) {
    //     // debugger
    //     // if (e.target.className !== "rowvideo" && e.target.className !== "addList"){
    //         e.currentTarget.pause();
    //         e.currentTarget.currentTime = 0;
    //         e.currentTarget.load();
    //     // }
    // }

    componentDidMount() {
        this.props.fetchLists();
        this.props.renderVideos();
       
    }


    render() {
        let lists = [];
        const currentUser = this.props.currentUser;
        this.props.mylists.forEach(list => {
            // debugger
            if (list.user_id === parseInt(currentUser)) {
                this.props.videos.forEach(video => {
                    if (video.id === list.video_id) {
                        lists.push(<VideoContainer video={video} handleHoverPlay={this.handleHoverPlay} />);
                    }
                })
            }
        })

        let searchVideos = [];

        // debugger
        const videoArr = lists.map((video, idx) => {
            // debugger
            if (idx % 6 === 0) {
                return (
                    // class = firstlist, lastlist, list
                    // video
                    // <listVideoContainer video={video} klass="div" />
                    <div key={video.props.video.id}>
                        <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodivfirstlist'>
                            {/* <video className="rowvideo" poster={video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={video.video_url} type="video/mp4" /> </video> */}
                            {video}
                            {/* {video.state.myList ? 
                            <img className="addList" src={window.removelist} alt="" /> : 
                                <img className="addList" src={window.addlist} alt="" />
                            }  */}
                            <img className="addList hiddenIcons" src={window.removelist} onClick={() => this.removeMyList(video)} />
                            <p className="videotitleover hiddenIcons" onClick={() => this.props.history.push(`/browse/${video.id}`)} >{video.props.video.title}</p>
                            <div className="redplayborder hiddenIcons">
                                <img className="redplay" src={window.redplay2} />
                            </div>

                        </div>
                    </div>
                )
            }
            else if (idx % 6 === 5) {
                return (
                    <div key={video.props.video.id}>
                        <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodivlastlist'>
                            {/* <video className="rowvideo" poster={video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={video.video_url} type="video/mp4" /> </video> */}
                            {video}
                            {/* <img className="addList hiddenIcons" src={window.removelist} onClick={() => this.props.deleteMyList(video.props.video.id)} /> */}
                            <img className="addList hiddenIcons" src={window.removelist} onClick={() => this.removeMyList(video)} />
                            <p className="videotitleover hiddenIcons" onClick={() => this.props.history.push(`/browse/${video.id}`)} >{video.props.video.title}</p>
                            <div className="redplayborder hiddenIcons">
                                <img className="redplay" src={window.redplay2} />
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div key={video.props.video.id}>
                        <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodivlist'>
                            {/* <video className="rowvideo" poster={video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={video.video_url} type="video/mp4" /> </video> */}
                            {video}
                            {/* <img className="addList hiddenIcons" src={window.removelist} onClick={() => this.props.deleteMyList(video.props.video.id)} /> */}
                            <img className="addList hiddenIcons" src={window.removelist} onClick={() => this.removeMyList(video)} />
                            <p className="videotitleover hiddenIcons" onClick={() => this.props.history.push(`/browse/${video.id}`)} >{video.props.video.title}</p>
                            <div className="redplayborder hiddenIcons">
                                <img className="redplay" src={window.redplay2} />
                            </div>
                        </div>
                    </div>
                );
            }
            
        })
        return (
            <div className="indexGrid">
                <NavBarContainer />
                {this.props.videos.length >= 1 ?
                    <div className="mylist">
                        {/* <p id="mylisttext">My List</p> */}
                        <div className="secondsectionList">
                            {videoArr}

                        </div>
                    </div>

                    : <div className="bottomhalf"></div>}


            </div>
        )




    }


}

export default Search;