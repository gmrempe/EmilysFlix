import React from 'react';
import { Link, withRouter} from "react-router-dom";

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    
    handleLogin() {
        const user = { email: "Saitama", password: "#OnePunch" };
        this.props.login(user);
        this.props.history.push('/browse');
    }
    

    render() {
        return (
            <div className="landing">
                <div className='background-image-wrapper'>
                    <Link className="signin-button" to="/login">Sign In</Link>
                    <div className="landing-content">
                            <img className="logo" src='/assets/logo.png' alt="logo"/>
                        <div className="landing-elements">
                            <h1 >See what’s next.</h1>
                            <h2 >WATCH ANYWHERE. CANCEL ANYTIME.</h2>

                            <span className="signup-button">
                                <Link to="/signup">WATCH FREE FOR 30 DAYS</Link>
                                <i class="fas fa-chevron-right"></i>
                            </span>

                            <button onClick={this.handleLogin}>Demo Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Splash);