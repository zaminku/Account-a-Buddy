import React from 'react';
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

    render() {
        return (
            <div className="main">
                <div className="catchphrase"> Help Me <pre/> Help You </div>
                <div className="subtext"> Stay accountable for your goals with like-minded people </div>
                <Link className="getstarted" to={`/signup`}>Get Started Here</Link>
            </div>
        );
    }
}

export default MainPage;