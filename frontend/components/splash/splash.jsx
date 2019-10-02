import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import {logout} from '../../actions/session_actions';



const splash = () => {
    return(
        <div>
            <h1>See what's next.</h1>
            <h2>WATCH ANYWHERE.CANCEL ANYTIME.</h2>
            {/* <button onClick={logout}>Test Logout</button>  */}
            <GreetingContainer/>
        </div>
    )
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

export default splash


