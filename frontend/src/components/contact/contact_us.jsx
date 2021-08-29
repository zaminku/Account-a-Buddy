import React from 'react'
import "./contact.css"

const TEAM = {
    zamin: {
        name: "Zamin Kugshia", 
        img: {
            src: "../zamin.jpeg", 
            alt: "Photo of Zamin the Zombie"
        }, 
        personalSite: "", // for our personalSite website 
        github: "https://github.com/zaminku", 
        linkedin: "https://www.linkedin.com/in/zamin-k/", 
        angellist: "", // for angel list profile
        description: "I am Zamin the zombie."
    }, 
    sam: {
        name: "Sam Song", 
        img: {
            src: "../sam.jpg", 
            alt: "Photo of Sam the Pokemon Master"
        }, 
        personalSite: "", // for our personalSite website 
        github: "https://github.com/samsongs1991", 
        linkedin: "https://www.linkedin.com/in/samuel-song-a0b64a21a/", 
        angellist: "https://angel.co/u/samsongs",
        description: "I am Sam the Pokemon master."
    }, 
    jenny: {
        name: "Jenny Nhan", 
        img: {
            src: "../jenny.jpeg", 
            alt: "Photo of Jenny the happy one"
        }, 
        personalSite: "", // for our personalSite website 
        github: "https://github.com/j3nhan", 
        linkedin: "https://www.linkedin.com/in/zamin-k/", 
        angellist: "", // for angel list profile
        description: "I am Jenny the happy one."
    }, 
    ben: {
        name: "Ben Chai", 
        img: {
            src: "../ben.jpeg", 
            alt: "Photo of Ben with the calming voice"
        }, 
        personalSite: "", // for our personalSite website 
        github: "https://github.com/b-chai", 
        linkedin: "https://www.linkedin.com/in/ben-chai/", 
        angellist: "", // for angel list profile
        description: "I am Ben the calm voice."
    }
}

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.showTeam = this.showTeam.bind(this);
    }

    showTeam() {
        return (
            Object.values(TEAM).map((dev, index) => (
                <li key={index} >
                    <h3>{dev.name}</h3>
                    <img src={dev.img.src} alt={dev.img.alt} />
                    <div className="links" >
                        <a href={dev.github}><img src="../github-logo2.png" alt="Github icon" /></a>
                        <a href={dev.linkedin}><img src="../linkedin-logo.png" alt="LinkedIn icon" /></a>
                        <a href={dev.angellist}><img src="../angellist-logo.png" alt="AngelList icon" /></a>
                        <a href={dev.personalSite}><img src="../website-logo.png" alt="Webpage icon" /></a> 
                    </div>
                    <p>{dev.description}</p>
                </li>
            ))
        );
    }

    render() {
        return (
            <div className="contact-page" >
                <h2 className="contact-text">Meet the Team</h2>
                <ul className="team">
                    {this.showTeam()}
                </ul>
            </div>
        )
    }
}

export default ContactPage