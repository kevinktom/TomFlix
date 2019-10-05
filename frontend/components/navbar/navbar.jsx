import React from 'react';
// import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    // componentDidMount() {
    //     // debugger
    //     // const allProps = this.props;
    //     // this.props.renderNav();
    // }
    
    render() {
        
        return (
            <div >
                {/* <div> */}
                    <Link to='/browse'><img src={window.logo} className="sessionlogo" /> </Link>
                    <div>
                        <Link to='/browse'> Home </Link>
                        <Link to='/browse/test1'> TV Shows </Link>
                        <Link to='/browse/test2'> Movies </Link>
                        <Link to='/browse/test3'> Recently Added </Link>
                        <Link to='/browse/my-list'> My List </Link>

                    </div>
                    <div>
                        <a href="https://github.com/kevinktom" className="github"><img src={window.github} /> </a>
                        <ul>
                            <li><button onClick={this.props.logoutCurrentUser}>Sign out of Tomflix</button></li>
                        </ul>
                    </div>
                {/* </div> */}
            </div>
        )
    }
}

export default Nav;



