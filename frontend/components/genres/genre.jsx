import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
// import { Link } from 'react-router-dom';

class GenreShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleHoverPlay = this.handleHoverPlay.bind(this);
        this.handleHoverLeave = this.handleHoverLeave.bind(this);
        this.state = { muted: false };
        this.handleMute = this.handleMute.bind(this);
        this.filterVideos = this.filterVideos.bind(this);

    }

    handleHoverPlay(e) {
        e.persist();
        e.target.play().then(null, () => {
            e.target.muted = true
            e.target.play();
        });
        // e.currentTarget.play().then(e.currentTarget.muted=false, e.currentTarget.muted = true);
        // e.currentTarget.play().then(null, e.currentTarget.setAttribute("muted", null));
        // return e => {
        //   e.currentTarget.play();
        // }
        // let play = e.currentTarget.play();
        // if (play){
        //   play.catch(function(error) {console.error(error)})
        // }
    }

    handleHoverLeave(e) {
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
        e.currentTarget.load();
        // let pause = e.currentTarget.pause();
        // if (pause) {
        //   pause.catch(function (error) { console.error(error) })
        // }
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
        this.props.renderVideos();
        // console.log(this.props.match.params.videoId)
        // console.log(this.props)
        // debugger
    }

    filterVideos(){
        // debugger
        return this.props.videos.filter(video => {
            return (video.genre_ids.includes(this.props.genre.id))
        });
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
                            <p >{videos[10].maturity_rating}</p>
                        </div>
                        <div onClick={() => this.props.history.push(`/browse/${videos[10].id}`)} className="playButton transparentPlay"> <img src={window.playicon} /> <p className="playText">Play</p> </div>




                        <div className="rowsection">
                            <p className="genreName" >Watch It Again</p>
                            <div className='blockrow'>
                                <div onClick={() => this.props.history.push(`/browse/${videos[1].id}`)} className='videodivfirst'>
                                    <video className="rowvideo" poster={videos[1].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[1].video_url} type="video/mp4" /> </video>
                                    {/* <p className='videotitle'>{videos[1].title}</p> */}
                                </div>

                                <div onClick= { () => this.props.history.push(`/browse/${videos[19].id}`)} className='videodiv'>
                                  <video className="rowvideo" poster={videos[19].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[19].video_url} type="video/mp4" /> </video>
                                </div>

                                <div onClick= { () => this.props.history.push(`/browse/${videos[18].id}`)} className='videodiv'>
                                  <video className="rowvideo" poster={videos[18].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[18].video_url} type="video/mp4" /> </video>
                                </div>

                                <div onClick= { () => this.props.history.push(`/browse/${videos[17].id}`)} className='videodiv'>
                                  <video className="rowvideo" poster={videos[17].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[17].video_url} type="video/mp4" /> </video>
                                </div>

                                <div onClick= { () => this.props.history.push(`/browse/${videos[16].id}`)} className='videodiv'>
                                  <video className="rowvideo" poster={videos[16].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[16].video_url} type="video/mp4" /> </video>
                                </div>

                                <div onClick= { () => this.props.history.push(`/browse/${videos[15].id}`)} className='videodivlast'>
                                  <video className="rowvideo" poster={videos[15].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[15].video_url} type="video/mp4" /> </video>
                                </div>
                            </div>
                        </div>
                    </div> 
                <div className="middlebottomhalfmovies">
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
                    </div>



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




                        {/* <div className="secondsection">
                            <p className="genreName2" >New Releases</p>
                            <div className='blockrow2'>
              <div onClick={() => this.props.history.push(`/browse/${videos[1].id}`)} className='videodivfirst'>
                <video className="rowvideo" poster={videos[1].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[1].video_url} type="video/mp4" /> </video>
              </div> */}

              {/* <div onClick={() => this.props.history.push(`/browse/${videos[0].id}`)} className='videodiv'>
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
                    <div onClick={() => this.props.history.push(`/browse/${videos[1].id}`)} className='videodivfirst'>
                      <video className="rowvideo" poster={videos[1].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[1].video_url} type="video/mp4" /> </video>
            
                    </div>

                    <div onClick={() => this.props.history.push(`/browse/${videos[2].id}`)} className='videodiv'>
                      <video className="rowvideo" poster={videos[2].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[2].video_url} type="video/mp4" /> </video>
                    </div>

                    <div onClick={() => this.props.history.push(`/browse/${videos[3].id}`)} className='videodiv'>
                      <video className="rowvideo" poster={videos[3].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={videos[3].video_url} type="video/mp4" /> </video>
                    </div>
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