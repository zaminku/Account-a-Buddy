import React from 'react'
import "./contact.css"

const TEAM = {
    zamin: {
        name: "Zamin Kugshia", 
        img: {
            src: "../zamin.jpeg", 
            alt: "Photo of Zamin the Zombie"
        }, 
        personalSite: "",
        github: "https://github.com/zaminku", 
        linkedin: "https://www.linkedin.com/in/zamin-k/", 
        angellist: "https://angel.co/u/zamin-kugshia-1",
        description: "I am Zamin the zombie."
    }, 
    sam: {
        name: "Sam Song", 
        img: {
            src: "../sam.jpg", 
            alt: "Photo of Sam"
        }, 
        personalSite: "",
        github: "https://github.com/samsongs1991", 
        linkedin: "https://www.linkedin.com/in/samuel-song-a0b64a21a/", 
        angellist: "https://angel.co/u/samsongs",
        description: "Hey! I'm a web developer passionate about learning and creating! In my past life I had professions in education and mental health, but I carry those experiences with me into my current role as a software engineer. I believe one of the most important things in life is giving a helping hand to fellow humans. Teaching and taking care of others' mental and emotional needs taught me that sometimes helping means just putting in the effort to make a real connection with someone. I hope to continue making those connections and helping others. Go to my website to find out more!"
    }, 
    jenny: {
        name: "Jenny Nhan", 
        img: {
            src: "../jenny.jpeg", 
            alt: "Photo of Jenny the happy one"
        }, 
        personalSite: "",
        github: "https://github.com/j3nhan", 
        linkedin: "https://www.linkedin.com/in/jennynhan/", 
        angellist: "https://angel.co/u/jenny-nhan",
        description: "Three fun facts about me! Chocolate is my guilty pleasure. Brewing kombucha is one of my hobbies. Movies with Keanu Reeves are my favorite."
    }, 
    ben: {
        name: "Ben Chai", 
        img: {
            src: "../ben.jpeg", 
            alt: "Photo of Ben"
        }, 
        personalSite: "",
        github: "https://github.com/b-chai", 
        linkedin: "https://www.linkedin.com/in/ben-chai/", 
        angellist: "https://angel.co/u/ben-chai-1",
        description: "I am a NYC based coder that has been honing my programming ability since 2020. I have a background in business management and when I'm not coding I'll be either playing sports or online games. I aspire to learn as much as possible so I can pay that knowledge forward to other people I meet along the way."
    }
}

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "Zamin Kugshia": false,
            "Sam Song": false,
            "Jenny Nhan": false,
            "Ben Chai": false
        }
        this.showDev = this.showDev.bind(this);
        this.showTeam = this.showTeam.bind(this);
        this.setModal = this.setModal.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    showModal(dev) {
        return (
            <div className={this.state[dev.name] ? 
                `show ${dev.name.split(' ')[0]}` : 
                `hide ${dev.name.split(' ')[0]}`
            } >
                <p>{dev.description}</p>
            </div>
        );
    }

    setModal(bool, devName) {
        this.setState({ [devName]: bool });
    }

    showDev(dev) {
        return (
            <li>
                <h3 id="name-size">{dev.name}</h3>
                <img src={dev.img.src} alt={dev.img.alt} 
                    onMouseOver={() => this.setModal(true, dev.name)} 
                    onMouseOut={() => this.setModal(false, dev.name)} 
                />
                <div className="links" >
                    <a href={dev.github}><img src="../github-logo2.png" alt="Github" /></a>
                    <a href={dev.linkedin}><img src="../linkedin-logo.png" alt="LinkedIn" /></a>
                    <a href={dev.angellist}><img src="../angellist-logo.png" alt="AngelList" /></a>
                    <a href={dev.personalSite}><img src="../website-logo.png" alt="Portfolio Site" /></a> 
                </div>
                {this.showModal(dev)}
            </li>
        );
    }

    showTeam() {
        const { zamin, sam, jenny, ben } = TEAM;
        return (
            <ul className="team" >
                <div className="top">
                    {this.showDev(zamin)}
                    {this.showDev(sam)}
                </div>
                <div className="bottom">
                    {this.showDev(jenny)}
                    {this.showDev(ben)}
                </div>
            </ul>
        );
    }

    render() {
        return (
            <div className="contact-page" >
                <h2 className="contact-text">Meet the Team</h2>
                {this.showTeam()}
            </div>
        )
    }
}

export default ContactPage