import React from 'react';
import {Link} from "react-router-dom";

const Splash = () => {
    
    return (
        <div>
            <h1>See what's next.</h1>
            <h2>WATCH ANYWHERE. CANCEL ANYTIME.</h2>
    
            <Link path={"/signup"}>TRY 30 DAYS FREE ></Link>
        </div>
    )
}

export default Splash;