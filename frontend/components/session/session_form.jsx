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
        this.showPassword = this.showPassword.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    
    componentWillUnmount() {
        const user = Object.assign({}, this.state);
        this.props.clearErrors(user);
    }

    home() {
        this.props.history.push('/');
    }

    showPassword() {
        const pass = document.getElementById("password");
        if (pass.type === "password") {
            pass.type = "text";
        } else {
            pass.type = "password";
        }
        this.togglePassShow(pass.type);
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

    togglePassShow(type) {
    const print = document.getElementById("show-toggle");
        if (type === "password") {
            print.value = "SHOW";
        } else {
            print.value = "HIDE";
        }
    }

    handleChange(field) {
        return (e) => (
            this.setState({ [field]: e.currentTarget.value })
        )  
    }

    render() {
        
        return (
            <div className="session">
                <div className="background-image-wrapper-2">
                    <header>
                        <img className="logo" onClick={this.home} src={window.logo} alt="logo" />
                    </header>

                    <div className="session-center">
                        <section className="session-form">
                            <h1>{this.props.formType}</h1>


                            <form noValidate onSubmit={this.handleSubmit}>
                                    
                                    {this.renderErrors("I")}
                                <label className="email">
                                    <input 
                                    type="email" 
                                    onChange={this.handleChange("email")}
                                    placeholder="Email" 
                                    value={this.state.email}
                                    name="email"
                                    pattern=".{5,}"
                                    title="Please enter a valid email."
                                    id="email"
                                    /> 
                                    <div className="form-email-message">Please enter a valid email.</div>
                                    {this.renderErrors("E")}
                                </label>

                                <input
                                    className="show-toggle"
                                    id="show-toggle"
                                    type="text"
                                    onClick={this.showPassword}
                                    value="SHOW"
                                    readOnly
                                />
                                <label className="password">
                                    <input 
                                    type="password" 
                                    onChange={this.handleChange("password")} 
                                    placeholder="Password"
                                    pattern=".{6,60}"
                                    title="Your password must contain between 4 and 60 characters."
                                    id="password"
                                    />
                                    <div className="form-password-message">Your password must contain between 4 and 60 characters.</div>
                                </label>
                                    {this.renderErrors("P")}

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