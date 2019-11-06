import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import VideoContainer from '../video/video_container';

class GenreShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleHoverPlay = this.handleHoverPlay.bind(this);
        this.handleHoverLeave = this.handleHoverLeave.bind(this);
        this.state = { muted: false, indexlist: false, listchange: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false] };
        this.handleMute = this.handleMute.bind(this);
        this.filterVideos = this.filterVideos.bind(this);
        this.handleMyList = this.handleMyList.bind(this);
        this.handleVideoList = this.handleVideoList.bind(this);
        this.checkMyList = this.checkMyList.bind(this);

    }

    handleHoverPlay(e) {
      // debugger
      let vid = document.getElementById("mainvid");
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
      this.setState({ muted: true });
      vid.muted = true;
    }

    handleHoverLeave(e) {
      let video = e.currentTarget.children[0];
      // debugger
      video.pause();
      video.currentTime = 0;
      video.load();
      video.nextSibling.classList.add("hiddenIcons");
      video.nextSibling.nextSibling.classList.add("hiddenIcons");
      video.nextSibling.nextSibling.nextSibling.classList.add("hiddenIcons");
    }


    handleMute() {
        // debugger
        let vid = document.getElementById("mainvid")
        if (this.state.muted) {
            this.setState({ muted: false });
            vid.muted = false;
        }
        else {
            this.setState({ muted: true });
            vid.muted = true;
        }
    }

    componentDidMount() {
        // debugger
      this.props.fetchGenre(this.props.match.params.genreId);
      this.props.renderVideos().then(() => this.checkMyList());
      // debugger
      this.props.fetchLists();

    }

    componentDidUpdate(prevProps) {
      // debugger
      if (this.props.videos.length > 0 && this.props.mylists.length > 0) {
        if (prevProps.mylists.length !== this.props.mylists.length) {
          this.checkMyList();
        }
      }
    }

    handleMyList() {
      let currState = this.state.listchange.slice();
      if (currState[0]) {
        this.props.deleteMyList(this.props.videos[0].id).then(this.props.fetchLists);
        currState[0] = false;
        this.setState({ listchange: currState }); // batch set state after the loop ****
      }
      else {
        this.props.createMyList(this.props.videos[0].id).then(this.props.fetchLists);
        currState[0] = true;
        this.setState({ listchange: currState });
      }
    }

  handleVideoList(video) {
    // debugger
    // let tempState = this.state.listchange.slice();

    let currentState = this.state.listchange.slice();
    this.props.videos.forEach((vid, idx) => {
      currentState[idx] = false;
      this.props.mylists.forEach(list => {
        if (list.video_id === vid.id) {
          // indexList = true;
          // debugger
          currentState[idx] = true; // change to setState
          //   return;
          // }
          // else {
        }
      })

    })
    if (currentState[video.props.index]) {
      this.props.deleteMyList(video.props.video.id).then(this.props.fetchLists);
      currentState[video.props.index] = false;
      this.setState({ listchange: currentState }); //The state isnt changing for some reason
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
            // indexList = true;
            currentState[idx] = true; // change to setState
            //   return;

            // }
            // else {
          }
        })

      })
      // debugger
      this.setState({ listchange: currentState });
    }

    filterVideos(){
        // debugger
        let vids = this.props.videos.filter(video => {
            return (video.genre_ids.includes(this.props.genre.id))
        });
      const IndividualVideos = vids.map((video, idx) => {
        // let indexList = false;
        return (<VideoContainer video={video} handleHoverPlay={this.handleHoverPlay} index={idx} />)
      }) 
      return IndividualVideos
    }


    render() {
      let videos = [];  
      if (this.props.genre){
        videos = this.filterVideos();
        }
        let genresRender
        if (videos.length === 20){
          genresRender = 
          <div>
                    <div className="mainVideoDiv">
                        {/* autoPlay loop */}
                        <video muted={false} className="mainVideo" id="mainvid"  > <source src={videos[10].video_url} type="video/mp4" /> </video>
                        {/* <div className='mainVideoDescription'>{videos[1].description}</div> */}
                        {/* <Link to={`/browse/${video.id}`}>Play</Link>  */}
                        <img src={window.minions} className="mainvideoLogo" />
                        {!this.state.muted ?
                            <img src={window.soundon} className="soundindex" id="soundon" onClick={this.handleMute} /> :
                            <img src={window.soundoff} className="soundindex" id="soundoff" onClick={this.handleMute} />}
                        <div id="mainvidrating">
                            <p >{videos[10].video.maturity_rating}</p>
                        </div>
                        <div onClick={() => this.props.history.push(`/browse/${videos[10].video.id}`)} className="playButton transparentPlay"> <img src={window.playicon} /> <p className="playText">Play</p> </div>
              {this.state.listchange[10] ?
                <div onClick={this.handleMyList} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListRemove} /> <p className="playText">My List</p> </div> :
                <div onClick={this.handleMyList} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListAdd} /> <p className="playText">My List</p> </div>}



                {/* NEED TO REFACTOR HOW VIDEOS ARE DISPLAYED. CHECK VIDEOS.JSX */}
                        <div className="rowsection">
                            <p className="genreName" >Watch It Again</p>
                            <div className='blockrow'>
                                <div onClick={() => this.props.history.push(`/browse/${videos[1].video.id}`)} className='videodivfirst'>
                                    <video className="rowvideo" poster={videos[1].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[1].video.video_url} type="video/mp4" /> </video>
                                    {/* <p className='videotitle'>{videos[1].title}</p> */}
                                </div>

                                {/* <div onClick= { () => this.props.history.push(`/browse/${videos[19].video.id}`)} className='videodiv'>
                                  <video className="rowvideo" poster={videos[19].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[19].video.video_url} type="video/mp4" /> </video>
                                </div>

                                <div onClick= { () => this.props.history.push(`/browse/${videos[18].video.id}`)} className='videodiv'>
                                  <video className="rowvideo" poster={videos[18].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[18].video.video_url} type="video/mp4" /> </video>
                                </div>

                                <div onClick= { () => this.props.history.push(`/browse/${videos[17].video.id}`)} className='videodiv'>
                                  <video className="rowvideo" poster={videos[17].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[17].video.video_url} type="video/mp4" /> </video>
                                </div>

                                <div onClick= { () => this.props.history.push(`/browse/${videos[16].video.id}`)} className='videodiv'>
                                  <video className="rowvideo" poster={videos[16].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[16].video.video_url} type="video/mp4" /> </video>
                                </div>

                                <div onClick= { () => this.props.history.push(`/browse/${videos[15].video.id}`)} className='videodivlast'>
                                  <video className="rowvideo" poster={videos[15].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[15].video.video_url} type="video/mp4" /> </video>
                                </div> */}
                            </div>
                        </div>
                    </div> 
                <div className="middlebottomhalfmovies">
                    <div className="secondsection">
                        <p className="genreName2" >Continue Watching</p>
                        <div className='blockrow2'>
                            <div onClick={() => this.props.history.push(`/browse/${videos[14].video.id}`)} className='videodivfirst'>
                                <video className="rowvideo" poster={videos[14].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[14].video.video_url} type="video/mp4" /> </video>
                            </div>

                            {/* <div onClick={() => this.props.history.push(`/browse/${videos[13].video.id}`)} className='videodiv'>
                                <video className="rowvideo" poster={videos[13].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[13].video.video_url} type="video/mp4" /> </video>
                            </div>

                            <div onClick={() => this.props.history.push(`/browse/${videos[12].video.id}`)} className='videodiv'>
                                <video className="rowvideo" poster={videos[12].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[12].video.video_url} type="video/mp4" /> </video>
                            </div>

                            <div onClick={() => this.props.history.push(`/browse/${videos[11].video.id}`)} className='videodiv'>
                                <video className="rowvideo" poster={videos[11].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[11].video.video_url} type="video/mp4" /> </video>
                            </div>

                            <div onClick={() => this.props.history.push(`/browse/${videos[9].video.id}`)} className='videodiv'>
                                <video className="rowvideo" poster={videos[9].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[9].video.video_url} type="video/mp4" /> </video>
                            </div>

                            <div onClick={() => this.props.history.push(`/browse/${videos[8].video.id}`)} className='videodivlast'>
                                <video className="rowvideo" poster={videos[8].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[8].video.video_url} type="video/mp4" /> </video>
                            </div> */}
                        </div>
                    </div>



                        <div className="secondsection">
                            <p className="genreName2" >Trending Now</p>
                            <div className='blockrow2'>
              <div onClick={() => this.props.history.push(`/browse/${videos[7].video.id}`)} className='videodivfirst'>
                <video className="rowvideo" poster={videos[7].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[7].video_url} type="video/mp4" /> </video>
              </div>

              {/* <div onClick={() => this.props.history.push(`/browse/${videos[6].video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={videos[6].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[6].video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${videos[5].video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={videos[5].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[5].video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${videos[4].video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={videos[4].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[4].video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${videos[3].video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={videos[3].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[3].video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${videos[2].video.id}`)} className='videodivlast'>
                <video className="rowvideo" poster={videos[2].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[2].video.video_url} type="video/mp4" /> </video>
              </div> */}
            </div>
                        </div>




                        {/* <div className="secondsection">
                            <p className="genreName2" >New Releases</p>
                            <div className='blockrow2'>
              <div onClick={() => this.props.history.push(`/browse/${videos[1].video.id}`)} className='videodivfirst'>
                <video className="rowvideo" poster={videos[1].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[1].video.video_url} type="video/mp4" /> </video>
              </div> */}

              {/* <div onClick={() => this.props.history.push(`/browse/${videos[0].video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={videos[0].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[0].video.video_url} type="video/mp4" /> </video>
              </div> */}

              {/* <div onClick={() => this.props.history.push(`/browse/${videos[16].video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={videos[16].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[16].video.video_url} type="video/mp4" /> </video>
              </div>


              <div onClick={() => this.props.history.push(`/browse/${videos[15].video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={videos[15].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[15].video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${videos[14].video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={videos[14].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[14].video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${videos[17].video.id}`)} className='videodivlast'>
                <video className="rowvideo" poster={videos[17].video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[17].video.video_url} type="video/mp4" /> </video>
              </div> */}
              
            {/* </div>
                        </div> */}




                        <div className="bottomhalf">
                            <div className="bottomdivtext">
                                <p className='footertext'>Questions? Email KevinKTom@gmail.com</p>
                                <a href="https://github.com/kevinktom" className="github"><img src={window.github} /> </a>
                                <a href="https://www.linkedin.com/in/kevin-tom-b36951a9/" className="linkedin"><img src={window.linkedin} /> </a>
                            </div>
                        </div>
                    </div>
          </div>
        }








        else if(videos.length === 4){
          genresRender =
            <div>
              <div className="mainVideoDiv">
                {/* autoPlay loop */}
                <video autoPlay loop muted={false} className="mainVideo" id="mainvid"  > <source src={videos[0].video_url} type="video/mp4" /> </video>
                {/* <div className='mainVideoDescription'>{videos[1].description}</div> */}
                {/* <Link to={`/browse/${video.id}`}>Play</Link>  */}
                <img src={window.office} className="mainvideoLogo" />
                {!this.state.muted ?
                  <img src={window.soundon} className="soundindex" id="soundon" onClick={this.handleMute} /> :
                  <img src={window.soundoff} className="soundindex" id="soundoff" onClick={this.handleMute} />}
                <div id="mainvidrating">
                  <p >{videos[0].maturity_rating}</p>
                </div>
                <div onClick={() => this.props.history.push(`/browse/${videos[0].id}`)} className="playButton transparentPlay"> <img src={window.playicon} /> <p className="playText">Play</p> </div>




                 <div className="rowsection">
                <p className="genrenametvshows" >Watch It Again</p>
                  <div className='blockrowtvshows'>
                    <div onClick={() => this.props.history.push(`/browse/${videos[0].id}`)} className='videodivfirst'>
                      <video className="rowvideo" poster={videos[0].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[0].video_url} type="video/mp4" /> </video>
            
                    </div>
                    {/* <div onClick={() => this.props.history.push(`/browse/${videos[1].id}`)} className='videodivfirst'>
                      <video className="rowvideo" poster={videos[1].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[1].video_url} type="video/mp4" /> </video>
            
                    </div>

                    <div onClick={() => this.props.history.push(`/browse/${videos[2].id}`)} className='videodiv'>
                      <video className="rowvideo" poster={videos[2].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[2].video_url} type="video/mp4" /> </video>
                    </div>

                    <div onClick={() => this.props.history.push(`/browse/${videos[3].id}`)} className='videodiv'>
                      <video className="rowvideo" poster={videos[3].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[3].video_url} type="video/mp4" /> </video>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <div className="middlebottomhalf">
                <div className="secondsection">
                  <p className="genreName2" >Continue Watching</p>
                  <div className='blockrow2'>
                    <div onClick={() => this.props.history.push(`/browse/${videos[14].id}`)} className='videodivfirst'>
                      <video className="rowvideo" poster={videos[14].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[14].video_url} type="video/mp4" /> </video>
                    </div>

                    <div onClick={() => this.props.history.push(`/browse/${videos[13].id}`)} className='videodiv'>
                      <video className="rowvideo" poster={videos[13].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[13].video_url} type="video/mp4" /> </video>
                    </div>

                    <div onClick={() => this.props.history.push(`/browse/${videos[12].id}`)} className='videodiv'>
                      <video className="rowvideo" poster={videos[12].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[12].video_url} type="video/mp4" /> </video>
                    </div>

                    <div onClick={() => this.props.history.push(`/browse/${videos[11].id}`)} className='videodiv'>
                      <video className="rowvideo" poster={videos[11].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[11].video_url} type="video/mp4" /> </video>
                    </div>

                    <div onClick={() => this.props.history.push(`/browse/${videos[9].id}`)} className='videodiv'>
                      <video className="rowvideo" poster={videos[9].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[9].video_url} type="video/mp4" /> </video>
                    </div>

                    <div onClick={() => this.props.history.push(`/browse/${videos[8].id}`)} className='videodivlast'>
                      <video className="rowvideo" poster={videos[8].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[8].video_url} type="video/mp4" /> </video>
                    </div>
                  </div>
                </div> */}


                  {/*
                <div className="secondsection">
                  <p className="genreName2" >Trending Now</p>
                  <div className='blockrow2'>
                    <div onClick={() => this.props.history.push(`/browse/${videos[7].id}`)} className='videodivfirst'>
                      <video className="rowvideo" poster={videos[7].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[7].video_url} type="video/mp4" /> </video>
                    </div>

                    <div onClick={() => this.props.history.push(`/browse/${videos[6].id}`)} className='videodiv'>
                      <video className="rowvideo" poster={videos[6].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[6].video_url} type="video/mp4" /> </video>
                    </div>

                    <div onClick={() => this.props.history.push(`/browse/${videos[5].id}`)} className='videodiv'>
                      <video className="rowvideo" poster={videos[5].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[5].video_url} type="video/mp4" /> </video>
                    </div>

                    <div onClick={() => this.props.history.push(`/browse/${videos[4].id}`)} className='videodiv'>
                      <video className="rowvideo" poster={videos[4].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[4].video_url} type="video/mp4" /> </video>
                    </div>

                    <div onClick={() => this.props.history.push(`/browse/${videos[3].id}`)} className='videodiv'>
                      <video className="rowvideo" poster={videos[3].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[3].video_url} type="video/mp4" /> </video>
                    </div>

                    <div onClick={() => this.props.history.push(`/browse/${videos[2].id}`)} className='videodivlast'>
                      <video className="rowvideo" poster={videos[2].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[2].video_url} type="video/mp4" /> </video>
                    </div>
                  </div>
                </div>




                <div className="secondsection">
                  <p className="genreName2" >New Releases</p>
                  <div className='blockrow2'>
                    <div onClick={() => this.props.history.push(`/browse/${videos[1].id}`)} className='videodivfirst'>
                      <video className="rowvideo" poster={videos[1].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[1].video_url} type="video/mp4" /> </video>
                    </div>

                    <div onClick={() => this.props.history.push(`/browse/${videos[0].id}`)} className='videodiv'>
                      <video className="rowvideo" poster={videos[0].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[0].video_url} type="video/mp4" /> </video>
                    </div> */}

                    {/* <div onClick={() => this.props.history.push(`/browse/${videos[16].id}`)} className='videodiv'>
                <video className="rowvideo" poster={videos[16].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[16].video_url} type="video/mp4" /> </video>
              </div>


              <div onClick={() => this.props.history.push(`/browse/${videos[15].id}`)} className='videodiv'>
                <video className="rowvideo" poster={videos[15].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[15].video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${videos[14].id}`)} className='videodiv'>
                <video className="rowvideo" poster={videos[14].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[14].video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${videos[17].id}`)} className='videodivlast'>
                <video className="rowvideo" poster={videos[17].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[17].video_url} type="video/mp4" /> </video>
              </div> */}

                  {/* </div>
                </div> */}




                <div className="bottomhalftvshows">
                  <div className="bottomdivtext">
                    <p className='footertext'>Questions? Email KevinKTom@gmail.com</p>
                    <a href="https://github.com/kevinktom" className="github"><img src={window.github} /> </a>
                    <a href="https://www.linkedin.com/in/kevin-tom-b36951a9/" className="linkedin"><img src={window.linkedin} /> </a>
                  </div>
                </div>
              </div>
            // </div>
        }
        return (

            <div className='indexGrid'>
                <NavBarContainer />
                {genresRender}
              
            </div>
        )
    }

}



export default GenreShow;