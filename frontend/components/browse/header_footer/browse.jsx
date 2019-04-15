import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchBarContainer from "../../search/search_container";

class Browse extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this)
        this.handleLogoClick = this.handleLogoClick.bind(this)
        this.handleMyListClick = this.handleMyListClick.bind(this)
        this.handleHomeClick = this.handleHomeClick.bind(this)
        this.handleNatureClick = this.handleNatureClick.bind(this)
        this.handleAnimalClick = this.handleAnimalClick.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllGenres();  //todo can fetch in individual components
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = event.currentTarget.scrollY
        const header = document.getElementsByClassName("main-header")
        if (header) {
            if (scrollTop > 0) {
                header[0].classList.add("black")
            } else {
                header[0].classList.remove("black")
            }
        }
    }

    handleLogoClick() {
        this.props.clearSearch();
        this.props.history.push('/')
    }
    
    handleMyListClick() {
        this.props.clearSearch();
        this.props.history.push('/browse/my-list')
    }
    
    handleHomeClick() {
        this.props.clearSearch();
        this.props.history.push('/browse')
    }
    
    handleNatureClick() {
        this.props.clearSearch();
        this.props.history.push(`/browse/genre/${this.props.genres[1].id}`)
    }
    
    handleAnimalClick() {
        this.props.clearSearch();
        this.props.history.push(`/browse/genre/${this.props.genres[0].id}`)
    }
    
    handleLogout() {
        this.props.clearSearch();
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
                                    <li onClick={this.handleNatureClick} >Nature</li>
                                    <li onClick={this.handleAnimalClick} >Animal</li>
                                    {/* <li>Recently Added</li> */}
                                    <li onClick={this.handleMyListClick}>My List</li>
                                </ul>
                            </div>
                        </div>
                        <div className='header-icons'>
                            <SearchBarContainer />
                            <div className="nav-menu">
                                <img id="avatar" src={window.avatar}/>
                                {/* <i className="fas fa-sort-down"></i> */}
                                <div className="header-dropdown-items">
                                    <i className="fas fa-sort-up"></i>
                                    <ul id="header-menu" className="header-dropdown">
                                        {/* <li>Manage Profiles</li>
                                        <li>Account</li> */}
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