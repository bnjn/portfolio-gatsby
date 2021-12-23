import * as React from "react";
import './contact.css';

const Contact = () => {

    const links = {
        github: "https://github.com/bnjn/",
        linkedin: "",
        cv: ""
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
