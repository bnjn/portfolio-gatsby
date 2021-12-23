import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { BiLeftArrow, BiRightArrow } from "react-icons/all";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import './carousel.css';
import { SvgIcon} from "@mui/material";
import {
        SiJavascript,
        SiPhp,
        SiReact,
        SiHtml5,
        SiCss3,
        SiGatsby,
        SiExpress,
        SiMongodb,
        SiMysql,
        SiNodedotjs
} from "react-icons/si";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const cache = createCache({
    key: 'css',
    prepend: true,
});

const images = [
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
        info: 'I built this portfolio using Gatsby in order to learn about the framework and showcase my knowledge of React, JS and CSS. My original portfolio was the first project I worked on at iO Academy, so it seemed like a good way to benchmark how much I have learnt since finishing the bootcamp. This is an ongoing project, I have written the code with the intention to add a CMS that will allow me to update content without redeploying.',
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

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    function checkLinks(links) {
        if (links.live === '') {
            return <div key={"link" + activeStep}><a target="_blank" href={links.github}>GitHub</a></div>
        } else {
            return <div key={"link" + activeStep}><a target="_blank" href={links.github}>GitHub</a>|<a target="_blank" href={links.live}>Live Site</a></div>
        }
    }

return (
                <CacheProvider value={cache}>
                    <Button
                        size="large"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        sx={{
                             top: '5%',
                            zIndex: "10",
                        }}
                    >
                        {theme.direction === 'rtl' ? (
                            <BiRightArrow />
                        ) : (
                            <BiLeftArrow />
                        )}
                    </Button>
                    <Box sx={{ width: "75vw", flexGrow: 1}}>
                        <Paper
                            square
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: "4rem",
                            }}
                        >
                            <Typography className="project-title">{images[activeStep].label}</Typography>
                        </Paper>
                        <Paper
                            square
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: "2rem",
                            }}
                        >
                            <Typography className="project-info">{images[activeStep].info}</Typography>
                        </Paper>
                        <Paper
                            square
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: "2rem",
                            }}
                        >
                                {checkLinks(images[activeStep].links)}
                        </Paper>
                        <Paper
                            square
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: "2rem",
                            }}
                        >
                            <Typography>
                                {images[activeStep].techs.map((tech, index) => {
                                    // TODO: Handle no techs
                                    if (tech !== undefined) {
                                        return <SvgIcon key={"ico" + index} component={tech}/>;
                                    } else {
                                        return null
                                    }
                                })}
                            </Typography>
                        </Paper>
                        <div className="project-divider"> </div>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            interval={10000}
                            enableMouseEvents
                        >
                            {images.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                            component="img"
                                            sx={{
                                                display: 'block',
                                                margin: 'auto',
                                                marginBottom: '0',
                                                maxWidth: "100%",
                                                overflow: 'hidden',
                                                width: '100%',
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                            <MobileStepper
                                variant="progress"
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                nextButton={null}
                                backButton={null}
                            />
                    </Box>
                    <Button
                        size="large"
                        sx={{
                            top: '5%',
                            zIndex: "10",
                        }}
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        {theme.direction === 'rtl' ? (
                            <BiLeftArrow />
                        ) : (
                            <BiRightArrow />
                        )}
                    </Button>
                </CacheProvider>
    );
}

export default Carousel;