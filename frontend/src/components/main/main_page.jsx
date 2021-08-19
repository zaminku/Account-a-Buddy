import React from 'react';
import { Link } from 'react-router-dom'

class MainPage extends React.Component {

    render() {
        return (
            <div className="main">
                <div className="catchphrase"> 
                    <div>
                        Help Me 
                    </div>
                    <div>
                        Help You 
                    </div> 
                </div>
                <div className="subtext"> Stay accountable for your goals with like-minded people </div>
                <Link to={`/signup`}> 
                    <button className="getstarted">Get Started Here</button>
                </Link>
            </div>
        );
    }
}

export default MainPage;