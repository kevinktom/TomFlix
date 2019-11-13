import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import VideoContainer from '../video/video_container';

class Mylist extends React.Component{
    constructor(props){
        super(props);
        this.handleHoverPlay = this.handleHoverPlay.bind(this);
        this.handleHoverLeave = this.handleHoverLeave.bind(this);
        this.removeMyList = this.removeMyList.bind(this);
    }

    handleHoverPlay(e) {
        let video = e.currentTarget.children[0];
        video.nextSibling.classList.remove("hiddenIcons");
        video.nextSibling.nextSibling.classList.remove("hiddenIcons");
        video.nextSibling.nextSibling.nextSibling.classList.remove("hiddenIcons");
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


    componentDidMount(){
        this.props.fetchLists();
        this.props.renderVideos();
    }

    removeMyList(video){
        this.props.deleteMyList(video.props.video.id).then(this.props.fetchLists);
    }

    render(){
        let lists = [];
        const currentUser = this.props.currentUser;
        this.props.mylists.forEach(list => {
            if (list.user_id === parseInt(currentUser)){
                this.props.videos.forEach(video => {
                    if (video.id === list.video_id){
                        lists.push(<VideoContainer video={video} handleHoverPlay={this.handleHoverPlay} />);
                    }
                })
            }
        })

        const videoArr = lists.map((video, idx) => {
            if (idx % 6 === 0){
                return (
                    <div   key={video.props.video.id}>
                        <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodivfirstlist'>
                            {video}
                            <img className="addList hiddenIcons" src={window.removelist} onClick={() => this.removeMyList(video)} />
                            <p className="videotitleover hiddenIcons" onClick={() => this.props.history.push(`/browse/${video.id}`)} >{video.props.video.title}</p>
                            <div className="redplayborder hiddenIcons" onClick={() => this.props.history.push(`/browse/${video.id}`)}>
                                <img className="redplay" src={window.redplay2} />
                            </div>
                            
                        </div>
                    </div>
                )
            }
            else if (idx % 6 === 5){
                return (
                    <div   key={video.props.video.id}>
                        <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodivlastlist'>
                            {video}
                            <img className="addList hiddenIcons" src={window.removelist} onClick={() => this.removeMyList(video)} />
                            <p className="videotitleover hiddenIcons" onClick={() => this.props.history.push(`/browse/${video.id}`)} >{video.props.video.title}</p>
                            <div className="redplayborder hiddenIcons" onClick={() => this.props.history.push(`/browse/${video.id}`)}>
                                <img className="redplay" src={window.redplay2} />
                            </div>
                        </div>
                    </div>
                )
            }
            else{
            return (
                <div  key={video.props.video.id}>
                    <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodivlist'>
                        {video}
                        <img className="addList hiddenIcons" src={window.removelist} onClick={() => this.removeMyList(video)} />
                        <p className="videotitleover hiddenIcons" onClick={() => this.props.history.push(`/browse/${video.id}`)} >{video.props.video.title}</p>
                        <div className="redplayborder hiddenIcons" onClick={() => this.props.history.push(`/browse/${video.id}`)}>
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