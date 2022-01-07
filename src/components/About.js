import React from "react";
import about from "../images/aboutpicture.svg";
import moon from "../images/moon.svg";
import cake from "../images/cake.svg";
import craft from "../images/craft.svg";
import travel from "../images/travel.svg";
import resume from "../images/resume.svg";
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";
import unicorn from "../images/unicorn.svg";


export const About = () => {
    return (
        <>
        <div id="about" className="about">
        <div className="aboutpicture"><img className="about-img" src={about} alt="mmpic" /></div>
            <div className="about-section__about">
            <div className="resumepicture"><a href="https://arizonaatwork.com" target="_blank"><img className="resume-img rotating" src={resume} alt="resume"/></a></div>
                <div className="about-section__icon">
                <div className="media-btn">
                <h3>About</h3>
            <div className="icon">
                <a href="https://www.linkedin.com/in/morganelizmassey/"
                target="_blank"
                rel="noreferrer"
                title="Visit LinkedIn">
                    <BsLinkedin />

                </a>
            </div>

            <div className="icon">
                <a href="https://github.com/morganmassey14"
                target="_blank"
                rel="noreferrer"
                title="Visit GitHub">
                    <BsGithub />

                </a>
            </div>

            <div className="icon">
                <a href={"mailto:" + "morganelizmassey@gmail.com" }
                target="_blank"
                rel="noreferrer"
                title="Send Email">
                    <BsFillEnvelopeFill />

                </a>
            </div>
        </div>
        </div>
            
                <h5>I am passionate about design and people. I love creating applications that are aesthetically pleasing and easy for a user to navigate. I like to think outside of the box, try new things, and learn from others around me.</h5>
                <div className="unicornpicture"><img className="unicorn-img" src={unicorn} alt="unicorn"/></div>
            </div>
            </div>
            <div className="about-section__interests">
                <div className="about-interest">
            <div className="moon"><img className="moon-img" src={moon} alt="moonimg" />
                <h5>Obsessing over my dachshund, Moon Unit</h5>
                </div>
                </div>
                <div className="about-interest">
                <div className="cake"><img className="cake-img" src={cake} alt="cakeimg" />
                <h5>Baking and decorating vegan cakes</h5>
                </div>
                </div>
                <div className="about-interest">
                <div className="craft"><img className="craft-img" src={craft} alt="craftimg" />
                <h5>Creating with lots of different mediums</h5>
                </div>
                </div>
                <div className="about-interest">
                <div className="travel"><img className="travel-img" src={travel} alt="travelimg" />
                <h5>Travelling to places that feel like a Bob Ross painting.</h5>
            </div>
            </div>
            </div>
        
        </>
    )
}