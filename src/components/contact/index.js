import * as React from "react";
import './contact.css';

const Contact = () => {

    const links = {
        github: "https://github.com/bnjn/",
        linkedin: "https://www.linkedin.com/in/bnjn/",
        cv: "https://drive.google.com/file/d/1uChickWYW2EQP4qAoWmSZVpjsMcVjlk1/view?usp=sharing"
    }

    return (
        <div className='start-hidden contact-container'>
            <a target="_blank" rel="noreferrer" href={links.github}>GitHub</a>
            <a target="_blank" rel="noreferrer" href={links.linkedin}>LinkedIn</a>
            <a target="_blank" rel="noreferrer" href={links.cv}>Get CV</a>
        </div>
    )
}

export default Contact;
