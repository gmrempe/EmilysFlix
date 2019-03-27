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
                <h1 className='logo' >EMILYSFLIX</h1>
                <button className='signout-button' onClick={this.handleLogout}>Sign Out</button>

                <h2>You made it!</h2>
            </header>

        )
    }
}

export default withRouter(Browse);