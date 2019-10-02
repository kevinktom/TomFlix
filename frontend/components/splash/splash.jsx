import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';



const splash = () => {
    return(
        <div>
            <h1>Steph Curry with the Splash</h1>
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


