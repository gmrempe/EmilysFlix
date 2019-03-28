import React from 'react';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.home = this.home.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
    }

    handleChange(field) {
        return(e) => this.setState({[field]: e.currentTarget.value})
    }

    clearErrors() {
        this.props.clearErrors(user);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.clearErrors(user);
        this.props.processForm(user);
    }

    home() {
        this.props.history.push('/');
    }

    renderErrors(type) {
        const result = [];
        this.props.errors.forEach((error) => {
            if(error[0] === type) {
                result.push(
                    error
                )
            }
        });

        return (
            <ul>
                {result.map((error, i) => (
                    <li
                        key={`error-${type}${i}`}
                        >
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        
        return (
            <div className="session">
                <div className="background-image-wrapper-2">
                    <header>
                        <img className="logo" onClick={this.home} src='/assets/logo.png' alt="logo" />
                    </header>

                    <div className="session-center">
                        <section className="session-form">
                            <h1>{this.props.formType}</h1>


                            <form onSubmit={this.handleSubmit}>
                                    
                                    {this.renderErrors("I")}
                                <label className="email">
                                    <input 
                                    type="text" 
                                    onChange={this.handleChange("email")}
                                    placeholder="Email" 
                                    value={this.state.email}/>
                                    {this.renderErrors("E")}
                                </label>

                                <label className="password">
                                    <input 
                                    type="password" 
                                    onChange={this.handleChange("password")} 
                                    placeholder="Password"
                                    size="40"
                                    value={this.state.password}/>
                                    {this.renderErrors("P")}
                                </label>

                                <input type="submit" value={this.props.formType}/>
                            </form>


                            {this.props.link}
                        </section>  
                        <div className="session-footer">
                            <div>Questions? Call 1-555-555-5555</div>
                            <nav>
                                <div>Gift Card Terms</div>
                                <div>Terms of Use</div>
                                <div>Privacy Statement</div>
                            </nav>
                            {/* <div>English</div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;