import * as React from "react";
import './intro.css';
import Typical from 'react-typical';

const Intro = (handleIntro) => {

    return (
        <div className="intro-container">
            <h2 className='start-hidden'>Ben Johnson</h2>
            <Typical
                steps={['$', 500, '$ ./benjohnson.sh', 1000, handleIntro.handleIntro]}
                wrapper="p"
                className="intro-typical"
            />
            <Typical
                steps={['I make websites', 1000, 'I make APIs', 1000, 'I design things', 1000, 'I solve problems', 1000]}
                wrapper="p"
                loop={Infinity}
                className="start-hidden"
            />
        </div>
    )
}

export default Intro;
