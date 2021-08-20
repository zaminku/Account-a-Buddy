import React from 'react'
import "./about_page.css"

function AboutPage() {

    return (
        <div className="about-page" >
            <div className="about-description" >
                <div>
                    <h3>Account-a-Buddy</h3>
                    <div>
                        <p>Account-a-Buddy is an application for those
                            with aspirations of overcoming challenges in
                            their life. When you sign up, you can create
                            goals for breaking a bad habit or forming a 
                            good one. You can find an accountability
                            partner on the app based on the type of goal you 
                            have created and we will find a like-minded individual 
                            to keep you accountable. The match allows you to 
                            chat online with your partner, but the relationship 
                            is a two-way street. You will be eachother's 
                            accountability partners, and together, you may 
                            finally achieve that thing that which has been 
                            itching at your heart and soul for so long.
                        </p>
                    </div>
                </div>
            </div>

            <div className="about-lang" >
                <div>
                    <h3>Languages</h3>
                    <div>
                        <img className="lang" src="../../html-js-css_logo.png" 
                        alt="Pic of HTML5, CSS3, JS" />
                    </div>
                </div>
            </div>

            <div className="about-tech" >
                <div> 
                    <h3>Technologies</h3>
                    <div className="tech-list" >
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1XVtjEYPj0BoSZ9nrSBJ5nr319wO73dEcfD17BSzTf-m-q-rSZ9FGDO4yzzvd_AWQqo&usqp=CAU" alt="React" />
                            <img src="https://www.codespot.org/assets/cover/redux-landscape.png" alt="Redux" />
                            <img src="https://logowik.com/content/uploads/images/nodejs.jpg" alt="NodeJS" />
                        </div>
                        <div>
                        </div>
                        <div>
                            <img src="https://thecodebarbarian.com/images/mongoose5.png" alt="Mongoose" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVC_M97fJwNtEm9qydNVQoeV64Z6u-mlcZfStqoT4em6hxjFKHqLISBbON_E-32adeGU&usqp=CAU" alt="MongoDB" />
                            <img src="https://www.onlogic.com/company/io-hub/wp-content/uploads/2013/07/socket-io-logo.jpg" alt="Socket.io" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage