import './downarrow.css';
import * as React from "react";
import { BiDownArrow } from 'react-icons/bi';
import { HideOn } from "react-hide-on-scroll";


function DownArrow() {

        return (
            <HideOn atHeight height={200}>
                <BiDownArrow id="hide" className="start-hidden down-arrow" />
            </HideOn>
    )
}

export default DownArrow;