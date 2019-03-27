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
                <header>
                    <p>EMILYSFLIX</p>
                </header>

                <div className="session-center">
                    <section className="session-form">
                        <h3>{this.props.formType}</h3>

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
            </div>

        )
    }
}

export default SessionForm;