import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./login.css";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Goals page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/goals');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.login(user)
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    otherForm() {
        return(
            <div>
                <div className="account-info">Don't have an account?
                    <Link className="signup-link" to={'/signup'}>  Signup</Link>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <div></div>

                <div className = "card">
                    <div className="inner-box">
                        <div className="card-front">
                            <h1>Sign In</h1>
                            <form  onSubmit={this.handleSubmit}>
                                <div>
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
                                    <div className="error-div">
                                        {this.renderErrors()}
                                    </div>

                                    <input className="submit-btn" type="submit" value="Submit" />
                                    {this.otherForm()}
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
        
            </div>
        );
    }
}

export default withRouter(LoginForm);