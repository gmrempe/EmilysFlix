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

    renderErrors() {
       return( 
        <ul>
            {this.props.errors.map((error, i) => (
                <li key={i}>
                    {error}
                </li>   
            ))}
        </ul>
        );
    }

    render() {
        
        return (
            <section>
                <header>
                    {this.props.link}
                </header>

                {this.renderErrors()}

                <form onSubmit={this.handleSubmit}>
                        
                    <label>
                        <input type="text" onChange={this.handleChange("email")} value={this.state.email}/>
                    </label>

                    <label>
                        <input type="password" onChange={this.handleChange("password")} value={this.state.password}/>
                    </label>

                    <input type="submit" value={this.props.formType}/>
                </form>
            </section>
        )
    }
}

export default SessionForm;