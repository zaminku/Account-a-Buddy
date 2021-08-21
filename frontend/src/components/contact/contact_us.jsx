import React from 'react'
import "./contact.css"

function ContactPage() {

    return (
        <div className="contact-page" >
            {/* <div className="contact-text">Who We Are</div> */}

            <div className="contact-text">Meet the Team</div>

            <ul className="team">

                <li>Zamin
                    <div className="Zamin"><img src="../zamin.jpeg" alt="user"/></div>
                    <div className="links">
                    <a href="https://github.com/zaminku"><img className="github" src="../github-logo.png" alt="Github-logo" /></a>
                    <a href="https://www.linkedin.com/in/zamin-k/"><img className="linkedin" src="../linkedin-logo.png" alt="LinkedIn-Logo" /></a>
                    </div>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                </li>

                <li>Sam
                    <div className="Sam"><img src="../sam.jpg" alt="user"/></div>
                    <div className="links">
                    <a href="https://github.com/samsongs1991"><img className="github" src="../github-logo.png" alt="Github-logo" /></a>
                    <a href=""><img className="linkedin" src="../linkedin-logo.png" alt="LinkedIn-Logo" /></a>
                    </div>
                    <div>
                        I am a 2nd generation Korean-American who 
                        was raised in Seattle by a single-mom.
                        A few things I am proud of are that I paid 
                        my own way through university, I cycled
                        across the country alone, and I served in the US 
                        Peace Corps where I also became fluent in Spanish.
                    </div>
                </li>

                <li>Jenny
                    <div className="Jenny"><img src="../jenny.jpeg" alt="user"/></div>
                    <div className="links">
                    <a href="https://github.com/j3nhan"><img className="github" src="../github-logo.png" alt="Github-logo" /></a>
                    <a href=""><img className="linkedin" src="../linkedin-logo.png" alt="LinkedIn-Logo" /></a>
                    </div>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                </li>

                <li>Ben
                    <div className="Ben"><img src="../ben.jpeg" alt="user"/></div>
                    <div className="links">
                    <a href="https://github.com/b-chai"><img className="github" src="../github-logo.png" alt="Github-logo" /></a>
                    <a href="https://www.linkedin.com/in/ben-chai/"><img className="linkedin" src="../linkedin-logo.png" alt="LinkedIn-Logo" /></a>
                    
                    </div>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                </li>
                
            </ul>
        </div>
    )
}

export default ContactPage