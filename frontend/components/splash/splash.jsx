import React from 'react';
import { Link } from 'react-router-dom';

export const Splash = (props) => {
    const handleDemo = (e) => {
        const testUser = { email: "hire@me.please", password: "password" }
        e.preventDefault();
        props.action(testUser);
    }
    return(
        <div className="containerSplash" >
            <img src={window.logo} className="sessionlogo"/>
            <img src={window.splash} className="background"/>
            <h1 className='textone'>See what's next.</h1>
            <h2 className='texttwo'>WATCH ANYWHERE. CANCEL ANYTIME.</h2>
            <Link to='/signin' className="signin"> <button> Sign In </button> </Link>
            <br/>
            <label className='haveAccount'>Have an account? 
                <Link to='/signin'> Sign In</Link>
            </label>
            <button onClick={handleDemo} className='demo'>Try a Demo!</button>   
        </div>
    )
}





