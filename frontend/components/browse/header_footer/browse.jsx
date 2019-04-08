import React from 'react';
import { withRouter } from 'react-router-dom';

class Browse extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this)
        this.handleLogoClick = this.handleLogoClick.bind(this)
        this.handleMyListClick = this.handleMyListClick.bind(this)
        this.handleHomeClick = this.handleHomeClick.bind(this)
        this.handleSearchSelect = this.handleSearchSelect.bind(this)
    }

    handleSearchSelect(e) {
        e.preventDefault();
        debugger
        e.target.focus();
        e.target.select();
    }

    handleLogoClick() {
        this.props.history.push('/')
    }

    handleMyListClick() {
        this.props.history.push('/browse/my-list')
    }

    handleHomeClick() {
        this.props.history.push('/browse')
    }

    handleLogout() {
        this.props.logout();
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="header-wrapper">
                <header className='main-header'>
                    <nav>
                        <div>
                            <img className='logo-main' src={window.logo} onClick={this.handleLogoClick} alt="logo"/>
                            <div className="browse-dropdown">
                                <h3 className="browse-dropdown-header">Browse</h3>
                                <ul className="browse-dropdown-header-content">
                                    <li onClick={this.handleHomeClick} >Home</li>
                                    <li>TV Shows</li>
                                    <li>Movies</li>
                                    <li>Recently Added</li>
                                    <li onClick={this.handleMyListClick}>My List</li>
                                </ul>
                            </div>
                        </div>
                        <div className='header-icons'>
                            <label htmlFor="search" id="search-bar-container" >
                                <button id="search-bar" >
                                        <i className="fas fa-search fa-lg" ></i>
                                        <input id="search-bar-input" maxLength="80" type="search" name="search"
                                        placeholder="Title, genre, people"/>
                                </button>
                            </label>
                            <div className="nav-menu">
                                <img id="avatar" src={window.avatar}/>
                                {/* <i className="fas fa-sort-down"></i> */}
                                <div className="header-dropdown-items">
                                    <i className="fas fa-sort-up"></i>
                                    <ul id="header-menu" className="header-dropdown">
                                        <li>Manage Profiles</li>
                                        <li>Account</li>
                                        <li className='Sign out' onClick={this.handleLogout}>Sign Out of Emilysflix</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>

        )
    }
}

export default withRouter(Browse);