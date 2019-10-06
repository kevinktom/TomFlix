import React from 'react';
// import { Link } from 'react-router-dom';
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
  }


  
  componentDidMount(){
    // const allProps = this.props;
    this.props.renderVideos();

  }

  render(){
    // debugger
    return (

    <div className='indexGrid'>
      <NavBarContainer />
      {this.props.videos.length >= 1 ? 
        <div>
          <video controls className="mainVideo"> <source src={this.props.videos[0].video_url} type="video/mp4"/> </video> </div> : <p>no video</p>}
      <h1>Welcome to the best version of Netflix</h1>
      {/* <button onClick={this.props.logoutCurrentUser}>Logout</button> */}
    </div>
  )
  }
}

export default Videos;



