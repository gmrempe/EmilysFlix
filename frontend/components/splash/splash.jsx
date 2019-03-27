import React from 'react';
import { Link } from "react-router-dom";
// import {logout} from "../../actions/session_actions"; //todo remove

const Splash = () => {
    
    return (
        <div>
            <Link to="/login">Sign In</Link>
            <h1>See what's next.</h1>
            <h2>WATCH ANYWHERE. CANCEL ANYTIME.</h2>
    
            <Link to="/signup">TRY 30 DAYS FREE ></Link>
        </div>
    )
}

export default Splash;

// testing   <button onClick={logout}>Sign Out</button>
