import React from 'react'

function ContactPage() {

    return (
        <div className="contact-page" >
            <div>Who We Are</div>
            <div></div>

            <div>Meet the Team</div>
            <ul>
                <li>Zamin
                    <div className="Zamin"></div>
                    <div>
                        Links :
                    <a href="https://github.com/zaminku"><img src="../github-logo.png" alt="Github-logo" /></a>
                    <a href=""><img src="../linkedin-logo.png" alt="LinkedIn-Logo" /></a>
                    </div>
                </li>
                <li>Sam
                    <div className="Sam"></div>
                    <div>
                        Links :
                    <a href="https://github.com/samsongs1991"><img src="../github-logo.png" alt="Github-logo" /></a>
                    <a href=""><img src="../linkedin-logo.png" alt="LinkedIn-Logo" /></a>
                    </div>
                </li>
                <li>Jenny
                    <div className="Jenny"></div>
                    <div>
                        Links :
                    <a href="https://github.com/j3nhan"><img src="../github-logo.png" alt="Github-logo" /></a>
                    <a href=""><img src="../linkedin-logo.png" alt="LinkedIn-Logo" /></a>
                    </div>
                </li>
                <li>Ben
                    <div className="Ben"></div>
                    <div className="links">
                        Links :
                    <a href="https://github.com/b-chai"><img src="../github-logo.png" alt="Github-logo" /></a>
                    <a href="https://www.linkedin.com/in/ben-chai/"><img src="../linkedin-logo.png" alt="LinkedIn-Logo" /></a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ContactPage