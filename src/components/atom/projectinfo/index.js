import {SvgIcon} from "@mui/material";
import * as React from "react";
import './projectinfo.css';
import Button from "@mui/material/Button";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";
import MobileStepper from "@mui/material/MobileStepper";

function ProjectInfo(props) {

    function checkLinks(links) {
        if (links.live === '') {
            return <div key={"link" + props.activeStep}><a target="_blank" rel="noreferrer" href={links.github}>GitHub</a></div>
        } else {
            return <div key={"link" + props.activeStep}><a target="_blank" rel="noreferrer" href={links.github}>GitHub</a> <a target="_blank" rel="noreferrer" href={links.live}>Live Site</a></div>
        }
    }

    return (
        <div className="project-info-container">
            <div className="project-title">
                <h2>{props.projects[props.activeStep].label}</h2>
            </div>
            <div className="project-info">
                <p>{props.projects[props.activeStep].info}</p>
            </div>
            <div className="project-links-tech">
                <span>{checkLinks(props.projects[props.activeStep].links)}</span>
                <p>
                    {props.projects[props.activeStep].techs.map((tech, index) => {
                        // TODO: Handle no techs
                        if (tech !== undefined) {
                            return <SvgIcon sx={{marginLeft: "0.25rem", marginRight: "0.25rem", fontSize: "2rem"}} key={"ico" + index} component={tech}/>;
                        } else {
                            return null
                        }
                    })}
                </p>
            </div>
            <div className="buttons">
                <Button
                    size="small"
                    onClick={props.handleBack}
                    disabled={props.activeStep === 0}
                    sx={{
                        top: '5%',
                        zIndex: "10",
                    }}
                >
                    {props.theme.direction === 'rtl' ? (
                        <BiRightArrow />
                    ) : (
                        <BiLeftArrow />
                    )}
                </Button>
                <MobileStepper
                    variant="progress"
                    steps={props.maxSteps}
                    position="static"
                    activeStep={props.activeStep}
                    nextButton={null}
                    backButton={null}
                />
                <Button
                    size="small"
                    sx={{
                        top: '5%',
                        zIndex: "10",
                    }}
                    onClick={props.handleNext}
                    disabled={props.activeStep === props.maxSteps - 1}
                >
                    {props.theme.direction === 'rtl' ? (
                        <BiLeftArrow />
                    ) : (
                        <BiRightArrow />
                    )}
                </Button>
            </div>
        </div>
    )
}

export default ProjectInfo;