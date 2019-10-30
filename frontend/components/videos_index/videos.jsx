import React from 'react';
import { Link } from 'react-router-dom';
import {logout} from '../../actions/session_actions';
// import Nav from '../navbar/navbar';
import NavBarContainer from '../navbar/navbar_container';


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
      this.props.deleteMyList(this.props.videos[0].id);
      this.setState({ indexlist: false });
    }
    else {
      this.props.createMyList(this.props.videos[0].id);
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
  componentDidUpdate(prevProps){
    // debugger
    if (((prevProps.mylists.length !== this.props.mylists.length || this.props.videos.length !== prevProps.videos.length)) && (this.props.videos[0])){
      this.props.mylists.forEach(list => {
        // debugger
        
        if (list.video_id === this.props.videos[0].id) {
          this.setState({indexlist: true});
        }
        else {
          this.setState({ indexlist: false });
        }
      })
    }
  }

  render(){
    // debugger
    // let listbutton = <div></div>
  //   if (this.props.mylists.length > 0){
  //   this.props.mylists.forEach(list => {
  //     if (list.video_id === this.props.videos[0].id) {
  //       this.state.indexlist = true;
  //     }
  //     else{
  //       this.state.indexlist = false;
  //     }
  //   })
  // }
    return (

    <div className='indexGrid'>
      <NavBarContainer />
      {this.props.videos.length >= 2 ? 
        <div className="mainVideoDiv">
            {/* autoPlay loop */}
            <video autoPlay loop muted={false} className="mainVideo" id="mainvid" > <source src={this.props.videos[0].video_url} type="video/mp4"/> </video> 
            {/* <div className='mainVideoDescription'>{this.props.videos[1].description}</div> */}
          {/* <Link to={`/browse/${video.id}`}>Play</Link>  */}
          <img src={window.inceptionlogo} className="mainvideoLogo"/>
          {!this.state.muted ? 
          <img src={window.soundon} className="soundindex" id="soundon" onClick={this.handleMute}/> : 
          <img src={window.soundoff} className="soundindex" id="soundoff" onClick={this.handleMute}/> }
          <div id="mainvidrating">
            <p >{this.props.videos[0].maturity_rating}</p>
          </div>
          <div onClick= { () => this.props.history.push(`/browse/${this.props.videos[0].id}`)} className="playButton transparentPlay"> <img src={window.playicon}/> <p className="playText">Play</p> </div>
          {this.state.indexlist ? 
              <div onClick={this.handleMyList} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListRemove} /> <p className="playText">My List</p> </div> :
              <div onClick={this.handleMyList} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListAdd} /> <p className="playText">My List</p> </div> }
          {/* {this.props.mylists.forEach(list => {
            if (list.video_id === this.props.videos[0].id){
              listbutton = <div onClick={() => this.props.deleteMyList(this.props.videos[0].id)} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListRemove} /> <p className="playText">My List</p> </div>
            }
            else{
              listbutton = <div onClick={() => this.props.createMyList(this.props.videos[0].id)} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListAdd} /> <p className="playText">My List</p> </div>
            }
          })}
          {listbutton} */}
          {/* <div onClick={() => this.props.createMyList(this.props.videos[0].id)} className="playButton transparentPlay" id="addlistbutton"> <img src={window.indexListAdd}/> <p className="playText">My List</p> </div> */}
          



          <div className="rowsection"> 
            <p className="genreName" >Fantasy/Sci-fi</p>
            <div className='blockrow'>
              <div onClick= { () => this.props.history.push(`/browse/${this.props.videos[0].id}`)} className='videodivfirst'>
                <video className="rowvideo" poster={this.props.videos[0].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[0].video_url} type="video/mp4" /> </video>
                {/* <p className='videotitle'>{this.props.videos[1].title}</p> */}
              </div>

              {/* <div onClick= { () => this.props.history.push(`/browse/${this.props.videos[1].id}`)} className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[1].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[1].video_url} type="video/mp4" /> </video>
                  
              </div>

              <div onClick= { () => this.props.history.push(`/browse/${this.props.videos[2].id}`)} className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[2].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[2].video_url} type="video/mp4" /> </video>
              </div>

              <div onClick= { () => this.props.history.push(`/browse/${this.props.videos[3].id}`)} className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[3].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[3].video_url} type="video/mp4" /> </video>
              </div>

              <div onClick= { () => this.props.history.push(`/browse/${this.props.videos[4].id}`)} className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[4].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[4].video_url} type="video/mp4" /> </video>
              </div>

              <div onClick= { () => this.props.history.push(`/browse/${this.props.videos[5].id}`)} className='videodivlast'>
                <video className="rowvideo" poster={this.props.videos[5].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[5].video_url} type="video/mp4" /> </video>
              </div> */}
            </div>
          </div>


          

          
          



        </div> : <div className='mainBackground'> </div>}

        {this.props.videos.length >= 2 ? 
        
        <div className="middlebottomhalf">
          <div className="secondsection">
            <p className="genreName2" >Comedy</p>
            <div className='blockrow2'>
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



          <div className="secondsection">
            <p className="genreName2" >Because you watched Bohemian Rhapsody</p>
            <div className='blockrow2'>
              <div onClick={() => this.props.history.push(`/browse/${this.props.videos[18].id}`)} className='videodivfirst'>
                <video className="rowvideo" poster={this.props.videos[18].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[18].video_url} type="video/mp4" /> </video>
              </div>

              {/* <div onClick={() => this.props.history.push(`/browse/${this.props.videos[19].id}`)} className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[19].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[19].video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${this.props.videos[22].id}`)} className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[22].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[22].video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${this.props.videos[21].id}`)} className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[21].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[21].video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${this.props.videos[20].id}`)} className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[20].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[20].video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${this.props.videos[23].id}`)} className='videodivlast'>
                <video className="rowvideo" poster={this.props.videos[23].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[23].video_url} type="video/mp4" /> </video>
              </div> */}
            </div>
          </div> 




          <div className="secondsection">
            <p className="genreName2" >Children & Family Movies</p>
            <div className='blockrow2'>
              <div onClick={() => this.props.history.push(`/browse/${this.props.videos[12].id}`)} className='videodivfirst'>
                <video className="rowvideo" poster={this.props.videos[12].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[12].video_url} type="video/mp4" /> </video>
              </div>

              {/* <div onClick={() => this.props.history.push(`/browse/${this.props.videos[13].id}`)} className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[13].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[13].video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${this.props.videos[16].id}`)} className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[16].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[16].video_url} type="video/mp4" /> </video>
              </div>


              <div onClick={() => this.props.history.push(`/browse/${this.props.videos[15].id}`)} className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[15].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[15].video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${this.props.videos[14].id}`)} className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[14].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[14].video_url} type="video/mp4" /> </video>
              </div>

              <div onClick={() => this.props.history.push(`/browse/${this.props.videos[17].id}`)} className='videodivlast'>
                <video className="rowvideo" poster={this.props.videos[17].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[17].video_url} type="video/mp4" /> </video>
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
        {/* {this.props.videos.length >= 1 ?
          <div>
      <video controls className='testvid' > <source src={this.props.videos[0].video_url} type="video/mp4" /> </video> 
          </div> : <div className='mainBackground'> </div>} */}
      {/* <button onClick={this.props.logoutCurrentUser}>Logout</button> */}
    </div>
  )
  }
}


export default Videos;



