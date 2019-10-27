import React from 'react';
import NavBarContainer from '../navbar/navbar_container';

class Mylist extends React.Component{
    constructor(props){
        super(props);

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
            if (list.user_id === parseInt(currentUser.id)){
                this.props.videos.forEach(video => {
                    if (video.id === list.video_id){
                        lists.push(video);
                    }
                })
            }
        })
        debugger
        return (
            <div className="indexGrid">
                <NavBarContainer />
                {this.props.videos.length >= 1 ? 
                    <div className="mylist">
                    <div className="secondsectionList">
                        {/* <p className="genreName2" >Comedy</p> */}
                        <div className='blockrow2List'>
                            <div onClick={() => this.props.history.push(`/browse/${this.props.videos[6].id}`)} className='videodivfirst'>
                                <video className="rowvideo" poster={this.props.videos[6].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[6].video_url} type="video/mp4" /> </video>
                            </div>

                            {/* <div onClick={() => this.props.history.push(`/browse/${this.props.videos[7].id}`)} className='videodiv'>
                                <video className="rowvideo" poster={this.props.videos[7].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[7].video_url} type="video/mp4" /> </video>
                            </div>

                            <div onClick={() => this.props.history.push(`/browse/${this.props.videos[8].id}`)} className='videodiv'>
                                <video className="rowvideo" poster={this.props.videos[8].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[8].video_url} type="video/mp4" /> </video>
                            </div>

                            <div onClick={() => this.props.history.push(`/browse/${this.props.videos[9].id}`)} className='videodiv'>
                                <video className="rowvideo" poster={this.props.videos[9].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[9].video_url} type="video/mp4" /> </video>
                            </div>

                            <div onClick={() => this.props.history.push(`/browse/${this.props.videos[10].id}`)} className='videodiv'>
                                <video className="rowvideo" poster={this.props.videos[10].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[10].video_url} type="video/mp4" /> </video>
                            </div>

                            <div onClick={() => this.props.history.push(`/browse/${this.props.videos[11].id}`)} className='videodivlast'>
                                <video className="rowvideo" poster={this.props.videos[11].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[11].video_url} type="video/mp4" /> </video>
                            </div> */}
                        </div>
                    </div>
                    <div className="secondsectionList">
                        {/* <p className="genreName2" >Comedy</p> */}
                        <div className='blockrow2List'>
                            <div onClick={() => this.props.history.push(`/browse/${this.props.videos[6].id}`)} className='videodivfirst'>
                                <video className="rowvideo" poster={this.props.videos[6].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[6].video_url} type="video/mp4" /> </video>
                            </div>

                            {/* <div onClick={() => this.props.history.push(`/browse/${this.props.videos[7].id}`)} className='videodiv'>
                                <video className="rowvideo" poster={this.props.videos[7].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[7].video_url} type="video/mp4" /> </video>
                            </div>

                            <div onClick={() => this.props.history.push(`/browse/${this.props.videos[8].id}`)} className='videodiv'>
                                <video className="rowvideo" poster={this.props.videos[8].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[8].video_url} type="video/mp4" /> </video>
                            </div>

                            <div onClick={() => this.props.history.push(`/browse/${this.props.videos[9].id}`)} className='videodiv'>
                                <video className="rowvideo" poster={this.props.videos[9].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[9].video_url} type="video/mp4" /> </video>
                            </div>

                            <div onClick={() => this.props.history.push(`/browse/${this.props.videos[10].id}`)} className='videodiv'>
                                <video className="rowvideo" poster={this.props.videos[10].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[10].video_url} type="video/mp4" /> </video>
                            </div>

                            <div onClick={() => this.props.history.push(`/browse/${this.props.videos[11].id}`)} className='videodivlast'>
                                <video className="rowvideo" poster={this.props.videos[11].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[11].video_url} type="video/mp4" /> </video>
                            </div> */}
                        </div>
                    </div>
                    </div>

                    : <div className="bottomhalf"></div>}


            </div>
        )




    }


}

export default Mylist;