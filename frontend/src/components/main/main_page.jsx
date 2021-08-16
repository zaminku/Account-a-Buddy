import React from 'react';
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

    render() {
        return (
            <div className="main">
                <div className="catchphrase"> Catchphrase </div>
                <div className="subtext"> Description </div>
                <Link to={`/signup`}>Get Started</Link>
            </div>
        );
    }
}

export default MainPage;