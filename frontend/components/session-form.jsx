import React from 'react';
import {Link} from "react-router-dom";

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange() {

    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        if(formType === 'Sign Up') {
            const header = <Link to={/login}>Sign In</Link>
        } else {
            const header = <Link to={/signup}>Sign Up</Link>
        }

        return (
            <section>
                <header>
                    {header}
                </header>

                <form>
                    <label>
                        <input type="text" onChange={this.handleChange("email")} value="email"/>
                    </label>

                    <label>
                        <input type="password" onChange={this.handleChange("password")} value="password"/>
                    </label>

                    <button type="submit" onSubmit={this.handleSubmit} >{this.props.formType}</button>
                </form>
            </section>
        )
    }
}

export default SessionForm;