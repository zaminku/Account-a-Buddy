import React from 'react'

function ContactPage() {

    return (
        <div className="contact-page" >
            <div>Who We Are</div>
            <div></div>

            <div>Meet the Team</div>

            <ul className="team">

                <li>Zamin
                    <div className="Zamin"><img src="../zamin.jpeg" alt="user"/></div>
                    <div className="links">
                    <a href="https://github.com/zaminku"><img className="github" src="../github-logo.png" alt="Github-logo" /></a>
                    <a href=""><img className="linkedin" src="../linkedin-logo.png" alt="LinkedIn-Logo" /></a>
                    </div>
                </li>

                <li>Sam
                    <div className="Sam"><img src="../sam.jpg" alt="user"/></div>
                    <div className="links">
                    <a href="https://github.com/samsongs1991"><img className="github" src="../github-logo.png" alt="Github-logo" /></a>
                    <a href=""><img className="linkedin" src="../linkedin-logo.png" alt="LinkedIn-Logo" /></a>
                    </div>
                </li>

                <li>Jenny
                    <div className="Jenny"><img src="../jenny.jpeg" alt="user"/></div>
                    <div className="links">
                    <a href="https://github.com/j3nhan"><img className="github" src="../github-logo.png" alt="Github-logo" /></a>
                    <a href=""><img className="linkedin" src="../linkedin-logo.png" alt="LinkedIn-Logo" /></a>
                    </div>
                </li>

                <li>Ben
                    <div className="Ben"><img src="../ben.jpeg" alt="user"/></div>
                    <div className="links">
                    <a href="https://github.com/b-chai"><img className="github" src="../github-logo.png" alt="Github-logo" /></a>
                    <a href="https://www.linkedin.com/in/ben-chai/"><img className="linkedin" src="../linkedin-logo.png" alt="LinkedIn-Logo" /></a>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}

export default ContactPage