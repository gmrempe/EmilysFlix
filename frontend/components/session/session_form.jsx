import React from 'react';


class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return(e) => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    home() {
        this.props.history.push('/');
    }

    renderErrors() {
       return( 
        <ul>
            {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>
                    {error}
                </li>   
            ))}
        </ul>
        );
    }

    render() {
        
        return (
            <div className="session">
                <div className="background-image-wrapper">
                    <header>
                        <img className="logo" src='/assets/logo.png' alt="logo" />
                    </header>

                    <div className="session-center">
                        <section className="session-form">
                            <h1>{this.props.formType}</h1>

                            {this.renderErrors()}

                            <form onSubmit={this.handleSubmit}>
                                    
                                <label className="email">
                                    <input 
                                    type="text" 
                                    onChange={this.handleChange("email")}
                                    placeholder="Email" 
                                    value={this.state.email}/>
                                </label>

                                <label className="password">
                                    <input 
                                    type="password" 
                                    onChange={this.handleChange("password")} 
                                    placeholder="Password"
                                    value={this.state.password}/>
                                </label>
                                <input type="submit" value={this.props.formType}/>
                            </form>


                            {this.props.link}
                        </section>  
                    </div>
                    <div className="session-footer">
                        <div>Questions? Call 1-555-555-5555</div>
                        <nav>
                            <div>Gift Card Terms</div>
                            <div>Terms of Use</div>
                            <div>Privacy Statement</div>
                        </nav>
                        <div>English</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;