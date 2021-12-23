import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import './carousel.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel(props) {

    const cache = createCache({
        key: 'css',
        prepend: true,
    });

return (
                <CacheProvider value={cache}>
                    <div className="carousel-container">
                        <Box sx={{ width: "100%", flexGrow: 1}}>
                            <AutoPlaySwipeableViews
                                axis={props.theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={props.activeStep}
                                onChangeIndex={props.handleStepChange}
                                interval={100000}
                                enableMouseEvents
                            >
                                {props.projects.map((step, index) => (
                                    <div key={step.label}>
                                        {Math.abs(props.activeStep - index) <= 2 ? (
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
                        </Box>
                    </div>
                </CacheProvider>
    );
}

export default Carousel;