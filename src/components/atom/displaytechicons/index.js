import * as React from "react";
import * as ReactIcons from "react-icons/si";

function DisplayTechIcons(props) {
//     SiJavascript,
//         SiPhp,
//         SiReact,
//         SiHtml5,
//         SiCss3,
//         SiGit,
//         SiGatsby,
//         SiExpress,
//         SiMongodb,
//         IoLogoNodejs,
//         SiMysql,
//         SiNodedotjs
// }
    function checkTechs(techs) {
        if (techs !== undefined) {
            console.log(techs);
            return techs;
            // techs.forEach((tech) => {
            //     console.log(tech);
            //     return React.createElement(ReactIcons[tech]);
            // })
        } else {
            return "No technology used."
        }

    }

    return (
        <span>{checkTechs(props.techs).map((tech) => {
            console.log(tech);
        })}</span>
    )
}

export default DisplayTechIcons;