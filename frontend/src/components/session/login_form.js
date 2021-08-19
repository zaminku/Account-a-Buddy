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
                <div>Don't have an account?</div>
                <Link to={'/signup'}>Signup</Link>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <form onSubmit={this.handleSubmit}>
                        <div className="inner-box">
                            <div className="card-front">
                                <h1>Sign In</h1>
                                <div>
                                    <input type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        placeholder="Username"
                                    />
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        placeholder="Password"
                                    />
                                    {this.renderErrors()}
                                    <input type="submit" value="Submit" />
                                    {this.otherForm()}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);