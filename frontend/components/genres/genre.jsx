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
        // let vids = this.props.videos.filter(video => {
        //     return (video.genre_ids.includes(this.props.genre.id))
        // });
      let videos = this.props.videos.map((video, idx) => {
        // let indexList = false;
        return (<VideoContainer video={video} handleHoverPlay={this.handleHoverPlay} index={idx} />)
      }) 
      videos = videos.filter(video => {
        return (video.video.genre_ids.includes(this.props.genre.id))
      })
      return videos
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
                <video autoPlay loop muted={this.state.muted} className="mainVideo" id="mainvid" > <source src={videos[10].props.video.video_url} type="video/mp4" /> </video>
                <img src={window.minions} className="mainvideoLogo" />
                {!this.state.muted ?
                  <img src={window.soundon} className="soundindex" id="soundon" onClick={this.handleMute} /> :
                  <img src={window.soundoff} className="soundindex" id="soundoff" onClick={this.handleMute} />}
                <div id="mainvidrating">
                  <p >{videos[0].props.video.maturity_rating}</p>
                </div>
                <div onClick={() => this.props.history.push(`/browse/${videos[10].props.video.id}`)} className="playButton transparentPlay"> <img src={window.playicon} /> <p className="playText">Play</p> </div>
                {this.state.listchange[10] ?
                  <div onClick={() => this.handleVideoList(videos[10])} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListRemove} /> <p className="playText">My List</p> </div> :
                  <div onClick={() => this.handleVideoList(videos[10])} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListAdd} /> <p className="playText">My List</p> </div>}

              <div className="rowsection">
                <p className="genreName" >Watch It Again</p>
                <div className='blockrow'>

                  <div className='videodivfirst'>
                    <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                      {videos[1]}
                      {this.state.listchange[1] ?
                        <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[1])} /> :
                        <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[1])} />}
                      <p className="videotitleover hiddenIcons" onClick={() => this.props.history.push(`/browse/${videos[1].props.video.id}`)} >{videos[1].props.video.title}</p>
                      <div className="redplayborder hiddenIcons">
                        <img className="redplay" src={window.redplay2} />
                      </div>
                    </div>
                  </div>


                  <div >
                    <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodiv'>
                  {videos[19]}
                  {this.state.listchange[19] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[19])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[19])}/> }
                      <p className="videotitleover hiddenIcons">{videos[19].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div >
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodiv'>
                  {videos[18]}
                  {this.state.listchange[18] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[18])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[18])}/> }
                      <p className="videotitleover hiddenIcons">{videos[18].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div >
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodiv'>
                  {videos[17]}
                  {this.state.listchange[17] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[17])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[17])}/> }
                      <p className="videotitleover hiddenIcons">{videos[17].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div>
                    <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodiv'>
                  {videos[16]}
                  {this.state.listchange[16] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[16])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[16])}/> }
                      <p className="videotitleover hiddenIcons">{videos[16].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div >
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className="videodivlast">
                  {videos[15]}
                  {this.state.listchange[15] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[15])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[15])}/> }
                    <p className="videotitleover hiddenIcons">{videos[15].props.video.title}</p>
                    <div className = "redplayborder hiddenIcons">
                    <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>


                </div>
              </div>
            </div> 
          {/* </div> */}

          <div className="middlebottomhalfmovies">
            <div className="secondsection">
              <p className="genreName2" >Continue Watching</p>
              <div className='blockrow2'>
                <div className='videodivfirst'>
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                    {videos[14]}
                    {this.state.listchange[14] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[14])} /> :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[14])} />}
                    <p className="videotitleover hiddenIcons">{videos[14].props.video.title}</p>
                    <div className="redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2} />
                    </div>
                    {/* <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[6])} /> */}
                  </div>
                </div>


                <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {videos[13]}
                  {this.state.listchange[13] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[13])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[13])}/> }
                      <p className="videotitleover hiddenIcons">{videos[13].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>
              
              <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {videos[12]}
                  {this.state.listchange[12] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[12])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[12])}/> }
                      <p className="videotitleover hiddenIcons">{videos[12].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {videos[11]}
                  {this.state.listchange[11] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[11])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[11])}/> }
                      <p className="videotitleover hiddenIcons">{videos[11].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {videos[9]}
                  {this.state.listchange[9] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[9])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[9])}/> }
                      <p className="videotitleover hiddenIcons">{videos[9].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div >
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className="videodivlast">
                  {videos[8]}
                  {this.state.listchange[8] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[8])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[8])}/> }
                      <p className="videotitleover hiddenIcons">{videos[8].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              </div>
            </div>



            <div className="secondsection">
              <p className="genreName2" >Trending Now</p>
              <div className='blockrow2'>


                <div className='videodivfirst'>
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                    {videos[7]}
                    {this.state.listchange[7] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[7])} /> :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[7])} />}
                    <p className="videotitleover hiddenIcons">{videos[7].props.video.title}</p>
                    <div className="redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2} />
                    </div>
                  </div>
                </div>

                <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {videos[6]}
                  {this.state.listchange[6] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[6])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[6])}/> }
                      <p className="videotitleover hiddenIcons">{videos[6].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div >
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodiv'>
                  {videos[5]}
                  {this.state.listchange[5] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[5])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[5])}/> }
                      <p className="videotitleover hiddenIcons">{videos[5].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {videos[4]}
                  {this.state.listchange[4] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[4])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[4])}/> }
                      <p className="videotitleover hiddenIcons">{videos[4].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div >
                    <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodiv'>
                  {videos[3]}
                  {this.state.listchange[3] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[3])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[3])}/> }
                      <p className="videotitleover hiddenIcons">{videos[3].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div >
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className="videodivlast">
                  {videos[2]}
                  {this.state.listchange[2] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[2])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[2])}/> }
                      <p className="videotitleover hiddenIcons">{videos[2].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              </div>
            </div>




            




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
          debugger
          genresRender =
            <div>
   
            <div className="mainVideoDiv">
              {/* autoPlay loop */}
              <video autoPlay loop muted={this.state.muted} className="mainVideo" id="mainvid" > <source src={videos[0].props.video.video_url} type="video/mp4" /> </video>
              {/* <div className='mainVideoDescription'>{videos[1].props.video.description}</div> */}
              {/* <Link to={`/browse/${video.id}`}>Play</Link>  */}
              <img src={window.office} className="mainvideoLogo" />
              {!this.state.muted ?
                <img src={window.soundon} className="soundindex" id="soundon" onClick={this.handleMute} /> :
                <img src={window.soundoff} className="soundindex" id="soundoff" onClick={this.handleMute} />}
              <div id="mainvidrating">
                <p >{videos[0].props.video.maturity_rating}</p>
              </div>
              <div onClick={() => this.props.history.push(`/browse/${videos[0].props.video.id}`)} className="playButton transparentPlay"> <img src={window.playicon} /> <p className="playText">Play</p> </div>
              {this.state.listchange[0] ?
                <div onClick={this.handleMyList} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListRemove} /> <p className="playText">My List</p> </div> :
                <div onClick={this.handleMyList} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListAdd} /> <p className="playText">My List</p> </div>}



              <div className="rowsection">
                <p className="genrenametvshows" >Watch It Again</p>
                <div className='blockrowtvshows'>

                  <div className='videodivfirst'>
                    <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                      {videos[0]}
                      {this.state.listchange[0] ?
                        <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[0])} /> :
                        <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[0])} />}
                      <p className="videotitleover hiddenIcons" onClick={() => this.props.history.push(`/browse/${videos[0].props.video.id}`)} >{videos[0].props.video.title}</p>
                      <div className="redplayborder hiddenIcons">
                        <img className="redplay" src={window.redplay2} />
                      </div>
                    </div>
                  </div>


                 <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {videos[1]}
                  {this.state.listchange[1] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[1])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[1])}/> }
                      <p className="videotitleover hiddenIcons">{videos[1].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>
              <div >
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodiv'>
                  {videos[2]}
                  {this.state.listchange[2] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[2])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[2])}/> }
                      <p className="videotitleover hiddenIcons">{videos[2].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>
              <div >
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodiv'>
                  {videos[3]}
                  {this.state.listchange[3] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(videos[3])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(videos[3])}/> }
                      <p className="videotitleover hiddenIcons">{videos[3].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>
                </div>
              </div>
            </div>

                <div className="bottomhalftvshows">
                  <div className="bottomdivtext">
                    <p className='footertext'>Questions? Email KevinKTom@gmail.com</p>
                    <a href="https://github.com/kevinktom" className="github"><img src={window.github} /> </a>
                    <a href="https://www.linkedin.com/in/kevin-tom-b36951a9/" className="linkedin"><img src={window.linkedin} /> </a>
                  </div>
                </div>
              </div>
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