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
import {Icon, SvgIcon} from "@mui/material";
import {
        SiJavascript,
        SiPhp,
        SiReact,
        SiHtml5,
        SiCss3,
        SiGit,
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
        info: 'An API for a GP appointment booking system. Designed to work with a React front end.',
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
        info: 'This portfolio. Made using Gatsby.',
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
        info: 'Some info about the project',
        links: {
            github: 'https://github.com/bnjn/income-tax-calc',
            live: 'https://bnjn.github.io/income-tax-calc/'
        },
        techs: [SiHtml5, SiCss3, SiJavascript, SiReact]

    },
    {
        label: 'Transformers Information Application',
        imgPath:
            '/transformers.png',
        info: 'Designed and built using an MVC design pattern.',
        links: {
            github: 'https://github.com/iO-Academy/2021-aug-oopTransformers',
            live: 'https://dev.io-academy.uk/projects/2021-aug/2021-aug-oopTransformers/'
        },
        techs: [SiHtml5, SiCss3, SiPhp, SiMysql]
    },
    {
        label: 'iO Academy Portal',
        imgPath:
            '/ioportal.png',
        info: 'Designed and built using an MVC design pattern. Using SLIM framework',
        links: {
            github: 'https://github.com/iO-Academy/AcademyPortal',
            live: 'https://portal.dev.io-academy.uk/'
        },
        techs: [SiHtml5, SiCss3, SiJavascript, SiPhp, SiMysql]
    },
    {
        label: 'Night of the Living Dev',
        imgPath:
            '/nightdev.png',
        info: 'Whack-a-mole style game build in pure JS as part of a scrum team.',
        links: {
            github: 'https://github.com/iO-Academy/2021-aug-whackamole',
            live: 'https://dev.io-academy.uk/projects/2021-aug/2021-aug-whackamole/index.html'
        },
        techs: [SiHtml5, SiCss3, SiJavascript]
    },
    {
        label: 'iO Academy Aptitude Test',
        imgPath:
            '/apttest.png',
        info: 'Worked as part of a scrum team to rebuild the existing academy test in React.',
        links: {
            github: 'https://github.com/iO-Academy/aptitude-test-react',
            live: ''
        },
        techs: [SiHtml5, SiCss3, SiJavascript, SiReact]
    },
    {
        label: 'Solar System SVG Animation',
        imgPath:
            '/solar.png',
        info: 'A solar system animation built using CSS.',
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
            return <div><a href={links.github}>GitHub</a></div>
        } else {
            return <div><a href={links.github}>GitHub</a>|<a href={links.live}>Live Site</a></div>
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
                            <Typography>
                                {checkLinks(images[activeStep].links)}
                            </Typography>
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
                                {images[activeStep].techs.map((tech) => {
                                    // TODO: Handle no techs
                                    if (tech !== undefined) {
                                        return <SvgIcon component={tech}/>;
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