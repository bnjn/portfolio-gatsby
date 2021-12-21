import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {BiLeftArrow, BiRightArrow} from "react-icons/all";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import './carousel.css';

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
    },
    {
        label: 'Portfolio',
        imgPath:
            '/portfolio.png',
        info: 'This portfolio. Made using Gatsby.',
    },
    {
        label: 'UK Income Tax Calculator',
        imgPath:
            '/taxcalc.png',
        info: 'Some info about the project',
    },
    {
        label: 'Transformers Information Application',
        imgPath:
            '/transformers.png',
        info: 'Designed and built using an MVC design pattern.',
    },
    {
        label: 'iO Academy Portal',
        imgPath:
            '/ioportal.png',
        info: 'Designed and built using an MVC design pattern. Using SLIM framework',
    },
    {
        label: 'Night of the Living Dev',
        imgPath:
            '/nightdev.png',
        info: 'Whack-a-mole style game build in pure JS as part of a scrum team.',
    },
    {
        label: 'iO Academy Aptitude Test',
        imgPath:
            '/apttest.png',
        info: 'Worked as part of a scrum team to rebuild the existing academy test in React.',
    },
    {
        label: 'Solar System SVG Animation',
        imgPath:
            '/solar.png',
        info: 'A solar system animation built using CSS.',
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

    return (
                <CacheProvider value={cache}>
                    <Button
                        size="large"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        sx={{
                             left: '1%',
                             top: '5%',
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
                                                maxWidth: "90%",
                                                overflow: 'hidden',
                                                width: '90%',
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
                            right: '1%',
                            top: '5%',
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