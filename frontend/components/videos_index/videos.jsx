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
    debugger
    // debugger
  }

  render(){
    // debugger
    return (
    <div className='indexGrid'>
      <NavBarContainer />
      {this.props.videos ? 
      <video src={this.props.videos[21].video_url}></video> : null}
      <h1>Welcome to the best version of Netflix</h1>
      {/* <button onClick={this.props.logoutCurrentUser}>Logout</button> */}
    </div>
  )
  }
}

export default Videos;



