import React from "react";
import c51 from "../images/c51.svg";
import moodmoons from "../images/moodmoons.svg";
import "../styles/custom.scss";


export const Work = () => {
    return (
        <>
        <div id="work" className="work">
        <div className="work-section__c51">
        <div className="c51"><img className="c51-img" src={c51} alt="c51img" /></div>
            <h1>C51 Website</h1>
            <h5>Contributed to UI/UX design planning, creating wireframes and mockeups. Helped conduct user testing, implementing changes. Wrote code in React Javascript</h5>
        </div>
        <div className="work-section__moodmoons">
        <div className="moodmoons"><img className="moodmoons-img" src={moodmoons} alt="moodmoonsimg" /></div>
            <h1>Mood Moons</h1>
            <h5>Mood Moons is an app designed for users to select different exercises to help with managing anxiety. The users are able to choose different breathing, meditation, and yoga</h5>
        </div>
        </div>
        </>
    )
}
