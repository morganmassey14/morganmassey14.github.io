import React from "react";
import profile from "../images/profile.svg";
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";

export const Description = () => {
    return (
        <>
        <div id="description" className="description">
        <section className="description_text"> <div className="description-section__about">
            <h1>Hey Ya'll, Im Morgan Massey. A UI/UX Designer & Front End Developer</h1>
            </div></section>
        <section>   
             <div className="profilepicture"><img className="profile-img" src={profile} alt="mmpic" /></div>
            

            <div className="icon-container">
            <div className="description__icon">
                <a href="https://www.linkedin.com/in/morganelizmassey/"
                target="_blank"
                rel="noreferrer"
                title="Visit LinkedIn">
                    <BsLinkedin />

                </a>
            </div>

            <div className="description__icon">
                <a href="https://github.com/morganmassey14"
                target="_blank"
                rel="noreferrer"
                title="Visit GitHub">
                    <BsGithub />

                </a>
            </div>

            <div className="description__icon">
                <a href={"mailto:" + "morganelizmassey@gmail.com" }
                target="_blank"
                rel="noreferrer"
                title="Send Email">
                    <BsFillEnvelopeFill />

                </a>
            </div>
            </div>
            </section>

            </div>
            </>
    )
}