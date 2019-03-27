import React from 'react';
import { Link, withRouter} from "react-router-dom";

class Splash extends React.Component {
    constructor(props) {
        super(props);
        // this.handleLogin = this.handleLogin.bind(this);
    }

    
    // handleLogin(e) {
    //     const user = { email: "Saitama", password: "#OnePunch" };
    //     debugger
    //     this.props.login(user);
    //     this.props.history.push('/browse');
    // }
    

    render() {
        return (
            <div className="landing">
                <Link className="signin-button" to="/login">Sign In</Link>
                <div className="landing-elements">
                    <h1 >See what's next.</h1>
                    <h2 >WATCH ANYWHERE. CANCEL ANYTIME.</h2>
            
                    <Link className="signup-button" to="/signup">TRY 30 DAYS FREE</Link>
                    <button onClick={this.handleLogin}>Demo Sign In</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Splash);