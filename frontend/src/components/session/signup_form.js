import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./login.css";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        return (
            <ul className="errors-list">
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    otherForm() {
        return (
            <div>
                <div className="account-info-signup">Already have an account?
                    <Link className="login-link" to={'/login'}> Login</Link>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                    <div className="inner-box" id="card">
                        <div className="card-back">
                            <h1 className="session-title">Sign Up</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className="session-inputs">
                                    <input type="text"
                                        className="input-box"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        placeholder="Email"
                                    />
                                    <input type="text"
                                        className="input-box"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        placeholder="Username"
                                    />
                                    <input type="password"
                                        className="input-box"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        placeholder="Password"
                                    />
                                    <input type="password"
                                        className="input-box"
                                        value={this.state.password2}
                                        onChange={this.update('password2')}
                                        placeholder="Confirm Password"
                                    />
                                    {this.renderErrors()} 
                                    
                                    <div className="session-buttons">
                                        <input className="submit-btn" type="submit" value="Submit" /> 
                                    </div>
                                    {this.otherForm()}
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        );
    }
}

export default withRouter(SignupForm);