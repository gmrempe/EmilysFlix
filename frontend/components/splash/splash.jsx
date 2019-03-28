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
                            <img className="logo" src={window.logo} alt="logo"/>
                        <div className="landing-elements">
                            <h1 >See what’s next.</h1>
                            <h2 >WATCH ANYWHERE. CANCEL ANYTIME.</h2>

                            <span className="signup-button">
                                <Link to="/signup">WATCH FREE FOR 30 DAYS</Link>
                                <i className="fas fa-chevron-right"></i>
                            </span>

                            <button onClick={this.handleLogin}>Demo Sign In</button>
                        </div>
                    </div>
                </div>
                <footer className="splash-footer">
                        <div>Questions? Call 1-555-555-5555</div>
                        <ul>
                            <li>FAQ</li>
                            <li>Investor Relations</li>
                            <li>Ways to Watch</li>
                            <li>Corporate Information</li>
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Terms of Use</li>
                            <li>Contact Us</li>
                            <li>Account</li>
                            <li>Redeem Gift Cards</li>
                            <li>Privacy</li>
                            <li>Speed Test</li>
                            <li>Media Center</li>
                            <li>Buy Gift Cards</li>
                            <li>Cookie Preferences</li>
                            <li>Legal Notices</li>
                        </ul>
                        <div>English</div>
                </footer>
            </div>
        )
    }
}

export default withRouter(Splash);