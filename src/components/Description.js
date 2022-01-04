import React from "react";
import profile from "../images/profile.svg";

export const Description = () => {
    return (
        <>
        <div id="description" className="description">
            <div className="description-section__about">
            <h1>Howdy, Im Morgan Massey. A UI/UX Designer & Front-End Developer</h1>
            </div>
            <div className="profilepicture"><img className="profile-img" src={profile} alt="mmpic" /></div>
            </div>
            </>
    )
}