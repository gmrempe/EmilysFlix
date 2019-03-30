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

    handleHover() {
        const menu = document.getElementById("header-menu").style.zIndex = 3;
    }

    handleHoverO() {
        const menu = document.getElementById("header-menu").style.zIndex = -1;
    }

    render() {
        return (
            <div className="header-wrapper">

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
                        <div className='header-icons'>
                            <form id="search-bar">
                                <input type="search" placeholder="Title,people,genres"/>
                            </form>
                            {/* <i className="fas fa-search"></i> */}
                            <div className="nav-menu">
                                <img onMouseOver={this.handleHover} onMouseOut={this.handleHoverO} id="avatar" src={window.avatar}/>
                                {/* <i className="fas fa-sort-down"></i> */}
                            </div>
                        </div>
                    </nav>
                </header>
                <ul id="header-menu" className="header-dropdown">
                    <li>Manage Profiles</li>
                    <li>Account</li>
                    <li className='Sign out' onClick={this.handleLogout}>Sign Out of Emilysflix</li>
                </ul>
            </div>

        )
    }
}

export default withRouter(Browse);