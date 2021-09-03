import React from 'react';
import { Link } from 'react-router-dom'
import "./main.css"

class MainPage extends React.Component {

    render() {
        return (

            <div className="mainpage-cont">
                <div className="left-cont">
                    <div className="title bubble bubble-bottom-right">
                        <div className="title-one">Help Me</div> 
                        <div className="title-two">Help You</div>
                    </div>

                    <div className="subtitle"> Stay accountable for your goals with like-minded people </div>

                    <div>
                        <Link to={`/signup`}> 
                            <button className="getstarted-btn">Get Started</button>
                        </Link>
                    </div>
                </div>

                <div className="right-cont">
                    <img className="background-img" src="./placeholder.jpg" alt="background-img"/>
                </div>
            </div>
        );
    }
}

export default MainPage;