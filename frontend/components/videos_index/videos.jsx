import React from 'react';
import { Link } from 'react-router-dom';
import {logout} from '../../actions/session_actions';
// import Nav from '../navbar/navbar';
import NavBarContainer from '../navbar/navbar_container'


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
    this.handleHoverPlay = this.handleHoverPlay.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);
  }

  handleHoverPlay(e){
    e.currentTarget.play();
  }

  handleHoverLeave(e){
    e.currentTarget.pause();
  }
  
  componentDidMount(){
    // const allProps = this.props;
    this.props.renderVideos();
    // debugger

  }

  render(){
    // debugger
    return (

    <div className='indexGrid'>
      <NavBarContainer />
      {this.props.videos.length >= 2 ? 
        <div className="mainVideoDiv">
          <video className="mainVideo"> <source src={this.props.videos[1].video_url} type="video/mp4"/> </video> 
            {/* <div className='mainVideoDescription'>{this.props.videos[1].description}</div> */}
          {/* <Link to={`/browse/${video.id}`}>Play</Link>  */}
          <img src={window.inceptionlogo} className="mainvideoLogo"/>
          <div onClick= { () => this.props.history.push(`/browse/${this.props.videos[1].id}`)} className="playButton transparentPlay"> <img src={window.playicon}/> <p className="playText">Play</p> </div>




          <div className="rowsection"> 
            <p className="genreName" >Fantasy/Sci-fi</p>
            <div className='blockrow'>
              <div className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[1].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[1].video_url} type="video/mp4" /> </video>
              </div>

              <div className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[2].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[2].video_url} type="video/mp4" /> </video>
              </div>

              <div className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[10].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[10].video_url} type="video/mp4" /> </video>
              </div>

              <div className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[9].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[9].video_url} type="video/mp4" /> </video>
              </div>

              <div className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[4].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[4].video_url} type="video/mp4" /> </video>
              </div>

              <div className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[11].photo_url} onMouseOver={this.handleHoverPlay} onMouseLeave={this.handleHoverLeave}> <source src={this.props.videos[11].video_url} type="video/mp4" /> </video>
              </div>
            </div>
          </div>


          

          {/* <div className="secondsection">
            <p className="genreName" >Fantasy/Sci-fi</p>
            <div className='blockrow'>
              <div className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[1].photo_url}> <source src={this.props.videos[1].video_url} type="video/mp4" /> </video>
              </div>

              <div className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[2].photo_url}> <source src={this.props.videos[2].video_url} type="video/mp4" /> </video>
              </div>

              <div className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[10].photo_url}> <source src={this.props.videos[10].video_url} type="video/mp4" /> </video>
              </div>

              <div className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[9].photo_url}> <source src={this.props.videos[9].video_url} type="video/mp4" /> </video>
              </div>

              <div className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[4].photo_url}> <source src={this.props.videos[4].video_url} type="video/mp4" /> </video>
              </div>

              <div className='videodiv'>
                <video className="rowvideo" poster={this.props.videos[11].photo_url}> <source src={this.props.videos[11].video_url} type="video/mp4" /> </video>
              </div>
            </div>
          </div> */}
          



        </div> : <div className='mainBackground'> </div>}
        <div className="bottomhalf"></div>
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



