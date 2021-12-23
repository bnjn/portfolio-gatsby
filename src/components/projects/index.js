import * as React from "react";
import './projects.css';
import Carousel from "../atom/carousel";
import {useTheme} from "@mui/material/styles";
import {
    SiCss3,
    SiExpress,
    SiGatsby,
    SiHtml5,
    SiJavascript,
    SiMongodb, SiMysql,
    SiNodedotjs,
    SiPhp,
    SiReact
} from "react-icons/si";
import ProjectInfo from "../atom/projectinfo";

const Projects = () => {

    const projects = [
        {
            label: 'Pulse API',
            imgPath:
                '/pulseapi.png',
            info: 'For my final project with iO Academy, we built an API for a GP booking system as part of a small Scrum team. I enjoyed working with and learning about the technology stack, using bcrypt to hash and salt passwords was also a great learning experience. The API features create and read functionality as well as basic authentication so only doctors can view their upcoming appointments.',
            links: {
                github: 'https://github.com/iO-Academy/2021-aug-pulse-be',
                live: ''
            },
            techs: [SiMongodb, SiExpress, SiNodedotjs]
        },
        {
            label: 'Portfolio',
            imgPath:
                '/portfolio.png',
            info: 'I built this portfolio using Gatsby in order to learn about the framework and showcase my knowledge of React, JS and CSS. My original portfolio was the first project I worked on at iO Academy, so it seemed like a good way to benchmark how much I have learnt since finishing the bootcamp, you can find a link to the old version on the repo for this page. This is an ongoing project, I have written the code with the intention to add a CMS that will allow me to update content without redeploying.',
            links: {
                github: 'https://github.com/bnjn/portfolio-gatsby',
                live: ''
            },
            techs: [SiHtml5, SiCss3, SiJavascript, SiGatsby]
        },
        {
            label: 'UK Income Tax Calculator',
            imgPath:
                '/taxcalc.png',
            info: 'This is my attempt at a coding exercise and creating a useful application using React. Writing the code to calculate how much is paid over each tax band was an interesting problem to solve. I plan to refactor the code to make it more DRY and reusable.',
            links: {
                github: 'https://github.com/bnjn/income-tax-calc',
                live: 'https://bnjn.github.io/income-tax-calc/'
            },
            techs: [SiHtml5, SiCss3, SiJavascript, SiReact]

        },
        {
            label: 'iO Academy Aptitude Test',
            imgPath:
                '/apttest.png',
            info: 'Three Scrum teams worked on an ongoing project to move the existing iO Academy aptitude test to React. My team worked on the admin page and I added a fuzzy search feature for the user list. It uses the awesome fuse.js library to enable AJAX fuzzy searching and queries both the name and email fields from the database.',
            links: {
                github: 'https://github.com/iO-Academy/aptitude-test-react',
                live: ''
            },
            techs: [SiHtml5, SiCss3, SiJavascript, SiReact]
        },
        {
            label: 'iO Academy Portal',
            imgPath:
                '/ioportal.png',
            info: 'Using the Slim PHP framework, an MVC design pattern and OOP principles, our Scrum team worked with two others to add features to the iO Academy Portal. My user story involved populating a list of attending applicants to the relevant day on the events page, I also added a QOL feature that allows an academy admin to copy all the attendees email addresses by clicking a button. This was the first live project I worked on and I found it very satisfying to implement a feature that will see regular use by the end users.',
            links: {
                github: 'https://github.com/iO-Academy/AcademyPortal',
                live: 'https://portal.dev.io-academy.uk/'
            },
            techs: [SiHtml5, SiCss3, SiJavascript, SiPhp, SiMysql]
        },
        {
            label: 'Transformers Application',
            imgPath:
                '/transformers.png',
            info: 'As part of a Scrum team, we used PHP to create an application that displays information about Transformers from a MySQL database. The projects main purpose was to test our recently gained knowledge with OOP and the MVC design pattern. I worked on the transformer details page and used URL parameters sent from the index page for the SQL query.',
            links: {
                github: 'https://github.com/iO-Academy/2021-aug-oopTransformers',
                live: 'https://dev.io-academy.uk/projects/2021-aug/2021-aug-oopTransformers/'
            },
            techs: [SiHtml5, SiCss3, SiPhp, SiMysql]
        },
        {
            label: 'Night of the Living Dev',
            imgPath:
                '/nightdev.png',
            info: 'This was my first experience of working in a Scrum team, I immediately realised the benefits of working in an agile manner and I have been applying it to my work ever since. The project brief was to build a whack-a-mole style game in pure JS, we went with a "Night of the Living Dead" theme. I worked on the function for randomly showing the zombies. As my first real coding challenge, I enjoyed solving the problem and working with other to optimise my solution.',
            links: {
                github: 'https://github.com/iO-Academy/2021-aug-whackamole',
                live: 'https://dev.io-academy.uk/projects/2021-aug/2021-aug-whackamole/index.html'
            },
            techs: [SiHtml5, SiCss3, SiJavascript]
        },
        {
            label: 'Solar System SVG Animation',
            imgPath:
                '/solar.png',
            info: 'A solar system animation built using CSS and no Javascript. It was originally an exercise with iO Academy but I intend to update it to simulate the real solar system in the future.',
            links: {
                github: 'https://github.com/bnjn/solar-system',
                live: 'https://bnjn.github.io/solar-system/'
            },
            techs: [SiHtml5, SiCss3]
        },
    ];

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = projects.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
            <div className="projects-container start-hidden">
                    <ProjectInfo activeStep={activeStep} maxSteps={maxSteps} projects={projects} handleNext={handleNext} handleBack={handleBack} handleStepChange={handleStepChange} theme={theme}/>
                    <Carousel projects={projects} handleNext={handleNext} handleBack={handleBack} handleStepChange={handleStepChange} activeStep={activeStep} maxSteps={maxSteps} theme={theme}/>
            </div>
    )
}

export default Projects;
