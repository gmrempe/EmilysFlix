import React from 'react';
import { withRouter } from 'react-router-dom';

class Browse extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this)
    }


    handleLogout() {
        this.props.logout();
        this.props.history.push('/')
    }

    render() {
        return (
            <header className='main-header'>
                <nav>
                    <div>
                        <img className='logo-main' src={window.logo} alt="logo"/>
                        <ul>
                            <li>Home</li>
                            <li>TV Shows</li>
                            <li>Movies</li>
                            <li>Recently Added</li>
                            <li>My List</li>
                        </ul>
                    </div>
                    <div>
                        <div className="search-bar"></div>
                        <div className="notifications-icon"></div>
                        <div className="menu"></div>
                    </div>
                </nav>
                <button className='Sign out of Emilysflix' onClick={this.handleLogout}>Sign Out</button>
            </header>

        )
    }
}

export default withRouter(Browse);