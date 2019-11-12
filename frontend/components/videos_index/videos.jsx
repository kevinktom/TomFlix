import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import VideoContainer from '../video/video_container';


class Videos extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      muted: false, 
      indexlist: false, 
      listchange: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]};
    this.handleHoverPlay = this.handleHoverPlay.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);
    this.handleMute = this.handleMute.bind(this);
    // this.handleMyList = this.handleMyList.bind(this);
    this.handleVideoList = this.handleVideoList.bind(this);
    this.checkMyList = this.checkMyList.bind(this);
  }

  handleHoverPlay(e){
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
    if (this._isMounted){
      this.setState({ muted: true });
    }
    vid.muted = true;
  }


  handleHoverLeave(e){
    let video = e.currentTarget.children[0];
    // debugger
    video.pause();
    video.currentTime = 0;
    video.load();
    video.nextSibling.classList.add("hiddenIcons");
    video.nextSibling.nextSibling.classList.add("hiddenIcons");
    video.nextSibling.nextSibling.nextSibling.classList.add("hiddenIcons");
  }


  handleMute(){
    // debugger
    let vid = document.getElementById("mainvid")
    if (this.state.muted && this._isMounted){
      this.setState({muted: false});
    }
    else{
      if (this._isMounted){
        this.setState({muted: true});
        vid.muted = true;
      }
    }
  }

  // handleMyList(){
  //   let currState = this.state.listchange.slice();
  //   if (currState[0]) {
  //     this.props.deleteMyList(this.props.videos[0].id).then(this.props.fetchLists);
  //     currState[0] = false;
  //     this.setState({ listchange: currState }); // batch set state after the loop ****
  //   }
  //   else {
  //     this.props.createMyList(this.props.videos[0].id).then(this.props.fetchLists);
  //     currState[0] = true;
  //     this.setState({ listchange: currState });
  //   }
  // }

  handleVideoList(video){

    let currentState = this.state.listchange.slice();
    this.props.videos.forEach((vid, idx) => {
      currentState[idx] = false;
      this.props.mylists.forEach(list => {
        if (list.video_id === vid.id) {

          currentState[idx] = true; 

        }
      })

    })
    if (currentState[video.props.index]){
      this.props.deleteMyList(video.props.video.id).then(this.props.fetchLists);
      currentState[video.props.index] = false;
      if (this._isMounted){
        this.setState({listchange: currentState}); 
      }
      // debugger
    }
    else{
      // debugger
      this.props.createMyList(video.props.video.id).then(this.props.fetchLists);
      currentState[video.props.index] = true;
      if (this._isMounted){
        this.setState({ listchange: currentState });
      }
    }
    // debugger
  }

  checkMyList(){
    let currentState = this.state.listchange.slice();
    this.props.videos.forEach((video, idx) => {
      currentState[idx] = false;
      this.props.mylists.forEach(list => {
        if (list.video_id === video.id) {
          currentState[idx] = true; 

        }
      })

    })
    if (this._isMounted){
      this.setState({ listchange: currentState });
    }
  }
  
  componentDidMount(){
    // const allProps = this.props;
    this._isMounted = true
    this.props.renderVideos().then(() => this.checkMyList());
    // debugger
    this.props.fetchLists();
    
  }
  componentWillUnmount(){
    this._isMounted = false;
  }

  componentDidUpdate(prevProps){
    // debugger
    if (this.props.videos.length > 0 && this.props.mylists.length > 0){
      if (prevProps.mylists.length !== this.props.mylists.length){
        this.checkMyList();
      }
    }
  }



  render(){
    
  
  const IndividualVideos = this.props.videos.map((video, idx) => {
    
    return (<VideoContainer video={video} handleHoverPlay={this.handleHoverPlay} index={idx}/>)
  })
  
  
  
    return (

    <div className='indexGrid'>
      <NavBarContainer />
      {IndividualVideos.length >= 2 ? 
        <div className="mainVideoDiv">
            {/* autoPlay loop */}
            <video loop muted={this.state.muted} className="mainVideo" id="mainvid" > <source src={this.props.videos[0].video_url} type="video/mp4"/> </video> 
            {/* <div className='mainVideoDescription'>{IndividualVideos[1].props.video.description}</div> */}
          {/* <Link to={`/browse/${video.id}`}>Play</Link>  */}
          <img src={window.inceptionlogo} className="mainvideoLogo"/>
          {!this.state.muted ? 
          <img src={window.soundon} className="soundindex" id="soundon" onClick={this.handleMute}/> : 
          <img src={window.soundoff} className="soundindex" id="soundoff" onClick={this.handleMute}/> }
          <div id="mainvidrating">
            <p >{IndividualVideos[0].props.video.maturity_rating}</p>
          </div>
          <div onClick= { () => this.props.history.push(`/browse/${IndividualVideos[0].props.video.id}`)} className="playButton transparentPlay"> <img src={window.playicon}/> <p className="playText">Play</p> </div>
          {this.state.listchange[0] ? 
              <div onClick={() => this.handleVideoList(IndividualVideos[0])} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListRemove} /> <p className="playText">My List</p> </div> :
              <div onClick={() => this.handleVideoList(IndividualVideos[0])} className="playButton transparentPlay" id="addlistbutton"> <img src={window.addmainlister} /> <p className="playText">My List</p> </div> }



          <div className="rowsection"> 
            <p className="genreName" >Fantasy/Sci-fi</p>
            <div className='blockrow'>
  
              <div className='videodivfirst'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {IndividualVideos[0]}
                    {this.state.listchange[0] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[0])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[0])}/> }
                    <p className="videotitleover hiddenIcons" onClick={() => this.props.history.push(`/browse/${IndividualVideos[0].props.video.id}`)} >{IndividualVideos[0].props.video.title}</p>
                    <div className="redplayborder hiddenIcons" onClick={() => this.props.history.push(`/browse/${IndividualVideos[0].props.video.id}`)}>
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>


              {/* <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {IndividualVideos[1]}
                  {this.state.listchange[1] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[1])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[1])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[1].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div >
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodiv'>
                  {IndividualVideos[2]}
                  {this.state.listchange[2] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[2])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[2])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[2].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div >
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodiv'>
                  {IndividualVideos[3]}
                  {this.state.listchange[3] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[3])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[3])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[3].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {IndividualVideos[4]}
                  {this.state.listchange[4] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[4])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[4])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[4].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div >
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className="videodivlast">
                  {IndividualVideos[5]}
                  {this.state.listchange[5] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[5])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[5])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[5].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div> */}

              
            </div>
          </div>


          

          
          



        </div> : <div className='mainBackground'> </div>}

        {IndividualVideos.length >= 2 ? 
        
        <div className="middlebottomhalf">
          <div className="secondsection">
            <p className="genreName2" >Comedy</p>
            <div className='blockrow2'>
              <div className='videodivfirst'>
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                    {IndividualVideos[6]} 
                    {this.state.listchange[6] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[6])} /> :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[6])} />}
                      <p className="videotitleover hiddenIcons">{IndividualVideos[6].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                      {/* <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[6])} /> */}
                  </div>
              </div>
                  

              {/* <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {IndividualVideos[7]}
                  {this.state.listchange[7] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[7])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[7])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[7].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>
              
              <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {IndividualVideos[8]}
                  {this.state.listchange[8] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[8])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[8])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[8].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {IndividualVideos[9]}
                  {this.state.listchange[9] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[9])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[9])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[9].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {IndividualVideos[10]}
                  {this.state.listchange[10] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[10])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[10])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[10].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div >
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className="videodivlast">
                  {IndividualVideos[11]}
                  {this.state.listchange[11] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[11])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[11])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[11].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div> */}

            </div>
          </div>



          <div className="secondsection">
            <p className="genreName2" >Because you watched Bohemian Rhapsody</p>
            <div className='blockrow2'>
              

              <div className='videodivfirst'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {IndividualVideos[18]}
                    {this.state.listchange[18] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[18])} /> :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[18])} />}
                      <p className="videotitleover hiddenIcons">{IndividualVideos[18].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              {/* <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {IndividualVideos[19]}
                  {this.state.listchange[19] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[19])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[19])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[19].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>


              <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {IndividualVideos[21]}
                  {this.state.listchange[21] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[21])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[21])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[21].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div className='videodiv'>
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                  {IndividualVideos[22]}
                  {this.state.listchange[22] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[22])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[22])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[22].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div >
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodiv'>
                  {IndividualVideos[20]}
                  {this.state.listchange[20] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[20])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[20])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[20].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div>

              <div >
                <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className="videodivlast">
                  {IndividualVideos[23]}
                  {this.state.listchange[23] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[23])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[23])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[23].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                </div>
              </div> */}

            </div>
          </div> 




          <div className="secondsection">
            <p className="genreName2" >Children & Family Movies</p>
            <div className='blockrow2'>
             
                <div className='videodivfirst'>
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                    {IndividualVideos[12]}
                    {this.state.listchange[12] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[12])} /> :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[12])} />}
                      <p className="videotitleover hiddenIcons">{IndividualVideos[12].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                  </div>
                </div>

                {/* <div className='videodiv'>
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                    {IndividualVideos[13]}
                    {this.state.listchange[13] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[13])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[13])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[13].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                  </div>
                </div>


                <div className='videodiv'>
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                    {IndividualVideos[15]}
                    {this.state.listchange[15] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[15])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[15])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[15].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                  </div>
                </div>

                <div className='videodiv'>
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}>
                    {IndividualVideos[16]}
                    {this.state.listchange[16] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[16])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[16])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[16].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                  </div>
                </div>

                <div className="videodiv">
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} >
                    {IndividualVideos[17]}
                    {this.state.listchange[17] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[17])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[17])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[17].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                  </div>
                </div>

                <div >
                  <div onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave} className='videodivlast'>
                    {IndividualVideos[14]}
                    {this.state.listchange[14] ?
                      <img className="addList hiddenIcons" src={window.minicheck} onClick={() => this.handleVideoList(IndividualVideos[14])}/>   :
                      <img className="addList hiddenIcons" src={window.indexListAdd} onClick={() => this.handleVideoList(IndividualVideos[14])}/> }
                      <p className="videotitleover hiddenIcons">{IndividualVideos[14].props.video.title}</p>
                      <div className = "redplayborder hiddenIcons">
                      <img className="redplay" src={window.redplay2}  />
                    </div>
                  </div>
                </div> */}
              
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

          : <div className="bottomhalf"></div>}
      
    </div>
  )
  }
}



export default Videos;



