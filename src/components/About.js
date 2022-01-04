import React from "react";
import about from "../images/aboutpicture.svg";
import moon from "../images/moon.svg";
import cake from "../images/cake.svg";
import craft from "../images/craft.svg";
import travel from "../images/travel.svg";

export const About = () => {
    return (
        <>
        <div id="about" className="about">
        <div className="aboutpicture"><img className="about-img" src={about} alt="mmpic" /></div>
            <div className="about-section__about">
                <h1>About</h1>
                <h5>I am passionate about design and people. I love creating applications that are aesthetically pleasing and easy for a user to navigate. I like to think outside of the box, try new things, and learn from others around me.</h5>
            </div>
            </div>
            <div className="about-section__interests">
                <div className="about-interest__moon">
            <div className="moon"><img className="moon-img" src={moon} alt="moonimg" /></div>
                <h5>Obsessing over my dachshund, Moon Unit</h5>
                </div>
                <div className="about-interest__cake">
                <div className="cake"><img className="cake-img" src={cake} alt="cakeimg" /></div>
                <h5>Baking and decorating vegan cakes</h5>
                </div>
                <div className="about-interest__craft">
                <div className="craft"><img className="craft-img" src={craft} alt="craftimg" /></div>
                <h5>Creating with lots of different mediums</h5>
                </div>
                <div className="about-interest__travel">
                <div className="travel"><img className="travel-img" src={travel} alt="travelimg" /></div>
                <h5>Travelling to places that feel like a Bob Ross painting.</h5>
            </div>
            </div>
        
        </>
    )
}