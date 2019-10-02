import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import {logout} from '../../actions/session_actions';
// import {handleDemo} from ''


export const Splash = () => {
    return(
        <div className="containerSplash">
            <div className="containerSplash logo">ge</div>
            <h1>See what's next.</h1>
            <h2>WATCH ANYWHERE. CANCEL ANYTIME.</h2>
            {/* <button onClick={logout}>Test Logout</button>  */}
            {/* <GreetingContainer/> */}
            <Link to='/signup'>Sign Up</Link>
            <br/>
            <label htmlFor="signup">Have an account?</label>
            <Link id="signup" to='/signin'>Sign In</Link>
            <button onClick={handleDemo}>Try a Demo!</button>   
        </div>
    )
}

export const handleDemo = (e) => {
    const testUser = { email: "demo@demo.com", password: "password" }
    e.preventDefault();
    dispatch(login(testUser))
}

// class Splash extends React.Component{

//     render(){
//         return (
//             <div>
//                 <h1>Steph Curry with the Splash</h1>
//                 <GreetingContainer/>
//             </div>
//         )
//     }
// }

// export default Splash


