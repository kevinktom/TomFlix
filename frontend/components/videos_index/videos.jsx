import React from 'react';
import { Link } from 'react-router-dom';
import {logout} from '../../actions/session_actions';
// import Nav from '../navbar/navbar';
import NavBarContainer from '../navbar/navbar_container';
import VideoContainer from '../video/video_container';


// export const Videos = (props) => {
//   return (
//     <div>
//       <h1>Welcome to the best version of Netflix</h1>
//       <button onClick={props.logoutCurrentUser}>Logout</button>
//     </div>
//   )
// }

class Videos extends React.Component{
  constructor(props){
    super(props);
    this.state = {muted: false, indexlist: false};
    this.handleHoverPlay = this.handleHoverPlay.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.handleMyList = this.handleMyList.bind(this);
  }

  handleHoverPlay(e){
    let vid = document.getElementById("mainvid");
    e.persist();
    e.target.play().then(null, () => {
      e.target.muted = true
      e.target.play();
    });
    this.setState({ muted: true });
    vid.muted = true;
  }


  handleHoverLeave(e){
    e.currentTarget.pause();
    e.currentTarget.currentTime = 0;
    e.currentTarget.load();
  }


  handleMute(){
    // debugger
    let vid = document.getElementById("mainvid")
    if (this.state.muted){
      this.setState({muted: false});
    }
    else{
      this.setState({muted: true});
      vid.muted = true;
    }
  }

  handleMyList(){
    // let listbutton = document.getElementById("addlistbutton")
    if (this.state.indexlist) {
      this.props.deleteMyList(this.props.videos[0].id).then(this.props.fetchLists);
      this.setState({ indexlist: false });
    }
    else {
      this.props.createMyList(this.props.videos[0].id).then(this.props.fetchLists);
      this.setState({ indexlist: true });
    }
  }
  
  componentDidMount(){
    // const allProps = this.props;
    this.props.renderVideos();
    // debugger
    this.props.fetchLists();
    // debugger

  }

  render(){
    // debugger
    // let listbutton = <div></div>
    if (this.props.mylists.length > 0 && this.props.videos.length > 0){
    this.props.mylists.forEach(list => {
      if (list.video_id === this.props.videos[0].id) {
        this.state.indexlist = true;
      }
      else{
        this.state.indexlist = false;
      }
    })
  }

  const IndividualVideos = this.props.videos.map(video => {
    return (<VideoContainer video={video} handleHoverPlay={this.handleHoverPlay} />)
  })
  
    return (

    <div className='indexGrid'>
      <NavBarContainer />
      {IndividualVideos.length >= 2 ? 
        <div className="mainVideoDiv">
            {/* autoPlay loop */}
            <video autoPlay loop muted={false} className="mainVideo" id="mainvid" > <source src={IndividualVideos[0].props.video.video_url} type="video/mp4"/> </video> 
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
          {this.state.indexlist ? 
              <div onClick={this.handleMyList} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListRemove} /> <p className="playText">My List</p> </div> :
              <div onClick={this.handleMyList} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListAdd} /> <p className="playText">My List</p> </div> }
          {/* {this.props.mylists.forEach(list => {
            if (list.video_id === IndividualVideos[0].props.video.id){
              listbutton = <div onClick={() => this.props.deleteMyList(IndividualVideos[0].props.video.id)} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListRemove} /> <p className="playText">My List</p> </div>
            }
            else{
              listbutton = <div onClick={() => this.props.createMyList(IndividualVideos[0].props.video.id)} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListAdd} /> <p className="playText">My List</p> </div>
            }
          })}
          {listbutton} */}
          {/* <div onClick={() => this.props.createMyList(IndividualVideos[0].props.video.id)} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListAdd}/> <p className="playText">My List</p> </div> */}
          



          <div className="rowsection"> 
            <p className="genreName" >Fantasy/Sci-fi</p>
            <div className='blockrow'>
              <div onClick= { () => this.props.history.push(`/browse/${IndividualVideos[0].props.video.id}`)} className='videodivfirst'>
                <video className="rowvideo" poster={IndividualVideos[0].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[0].props.video.video_url} type="video/mp4" /> </video>
                {/* <p className='videotitle'>{IndividualVideos[1].props.video.title}</p> */}
              </div>

              {/* <div onClick= { () => this.props.history.push(`/browse/${IndividualVideos[1].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[1].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[1].props.video.video_url} type="video/mp4" /> </video>
                  
              </div>

              <div onClick= { () => this.props.history.push(`/browse/${IndividualVideos[2].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[2].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[2].props.video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick= { () => this.props.history.push(`/browse/${IndividualVideos[3].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[3].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[3].props.video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick= { () => this.props.history.push(`/browse/${IndividualVideos[4].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[4].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[4].props.video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick= { () => this.props.history.push(`/browse/${IndividualVideos[5].props.video.id}`)} className='videodivlast'>
                <video className="rowvideo" poster={IndividualVideos[5].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[5].props.video.video_url} type="video/mp4" /> </video>
              </div> */}
            </div>
          </div>


          

          
          



        </div> : <div className='mainBackground'> </div>}

        {IndividualVideos.length >= 2 ? 
        
        <div className="middlebottomhalf">
          <div className="secondsection">
            <p className="genreName2" >Comedy</p>
            <div className='blockrow2'>
              <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[6].props.video.id}`)} className='videodivfirst'>
                <video className="rowvideo" poster={IndividualVideos[6].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[6].props.video.video_url} type="video/mp4" /> </video>
              </div>

              {/* <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[7].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[7].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[7].props.video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[8].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[8].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[8].props.video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[9].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[9].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[9].props.video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[10].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[10].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[10].props.video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[11].props.video.id}`)} className='videodivlast'>
                <video className="rowvideo" poster={IndividualVideos[11].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[11].props.video.video_url} type="video/mp4" /> </video>
              </div> */}
            </div>
          </div>



          <div className="secondsection">
            <p className="genreName2" >Because you watched Bohemian Rhapsody</p>
            <div className='blockrow2'>
              <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[18].props.video.id}`)} className='videodivfirst'>
                <video className="rowvideo" poster={IndividualVideos[18].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[18].props.video.video_url} type="video/mp4" /> </video>
              </div>

              {/* <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[19].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[19].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[19].props.video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[22].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[22].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[22].props.video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[21].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[21].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[21].props.video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[20].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[20].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[20].props.video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[23].props.video.id}`)} className='videodivlast'>
                <video className="rowvideo" poster={IndividualVideos[23].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[23].props.video.video_url} type="video/mp4" /> </video>
              </div> */}
            </div>
          </div> 




          <div className="secondsection">
            <p className="genreName2" >Children & Family Movies</p>
            <div className='blockrow2'>
              <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[12].props.video.id}`)} className='videodivfirst'>
                <video className="rowvideo" poster={IndividualVideos[12].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[12].props.video.video_url} type="video/mp4" /> </video>
              </div>

              {/* <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[13].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[13].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[13].props.video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[16].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[16].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[16].props.video.video_url} type="video/mp4" /> </video>
              </div>


              <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[15].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[15].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[15].props.video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[14].props.video.id}`)} className='videodiv'>
                <video className="rowvideo" poster={IndividualVideos[14].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[14].props.video.video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${IndividualVideos[17].props.video.id}`)} className='videodivlast'>
                <video className="rowvideo" poster={IndividualVideos[17].props.video.photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={IndividualVideos[17].props.video.video_url} type="video/mp4" /> </video>
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
      {/* <h1>Welcome to the best version of Netflix</h1> */}
        {/* {IndividualVideos.lenprops.video.gth >= 1 ?
          <div>
      <video controls className='testvid' > <source src={IndividualVideos[0].props.video.video_url} type="video/mp4" /> </video> 
          </div> : <div className='mainBackground'> </div>} */}
      {/* <button onClick={this.props.logoutCurrentUser}>Logout</button> */}
    </div>
  )
  }
}



export default Videos;



