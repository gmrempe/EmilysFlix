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
        this.props.clearErrors();
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

    handleFocus() {
        const showPasswordButton = document.getElementById("show-toggle").style.opacity = 1;
    }
    
    handleInput() {
        let password = document.getElementById("password-placeholder").style.top = "20px";
        let password2 = document.getElementById("password-placeholder").style.fontSize = "11px";
    }
    handleEmailInput() {
        let email = document.getElementById("email-placeholder").style.top = "20px";
        let email2 = document.getElementById("email-placeholder").style.fontSize = "11px";
    }

    render() {
        
        return (
            <div className="session">
                <div className="background-image-wrapper-2">
                    <header className="session-form-header">
                        <img className="logo" onClick={this.home} src={window.logo} alt="logo" />
                    </header>

                    <div className="session-center">
                        <section className="session-form">
                            <h1>{this.props.formType}</h1>


                            <form noValidate onSubmit={this.handleSubmit} >
                                    
                                <label htmlFor="email" className="email"> 
                                    <span id="email-placeholder">Email</span>
                                    <input 
                                    type="email" 
                                    onChange={this.handleChange("email")}
                                    onInput={this.handleEmailInput}
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
                                <label htmlFor="password" className="password">
                                    <span id="password-placeholder">Password</span>
                                    <input 
                                    type="password" 
                                    onChange={this.handleChange("password")} 
                                    onFocus={this.handleFocus}
                                    onInput={this.handleInput}
                                    pattern=".{6,60}"
                                    title="Your password must contain between 6 and 60 characters."
                                    id="password"
                                    />
                                    <div className="form-password-message">Your password must contain between 6 and 60 characters.</div>
                                </label>
                                    {this.renderErrors("P")}

                                <input type="submit" value={this.props.formType}/>
                            </form>


                            {this.props.link}
                        </section>  
                    </div>
                        <div className="splash-footer">
                            <a href="https://github.com/gmrempe">
                                <img src={window.github} alt="Github link" />
                            </a>
                            <a href="https://www.linkedin.com/in/gregory-rempe-4372b3107/">
                                <img width="32" height="auto" src={window.linkedin} alt="Linkedin link" />
                            </a>
                            <a style={{ width: "40px" }} href="http://gregory-rempe.com/">
                            <img width="32" height="auto" src={window.personalsite} alt="Personal Site" />
                            </a>
                            <a href="https://angel.co/gregory-rempe-1">
                                <i className="fab fa-angellist fa-2x"></i>
                            </a>
                        </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;