import React from "react";
import about from "../images/about.png";
import moon from "../images/moon.png";
import cake from "../images/cake.png";
import craft from "../images/craft.png";
import travel from "../images/travel.png";
import resume from "../images/resume.svg";
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";
import unicorn from "../images/unicorn.png";
import sparkleleft from "../images/sparkleleft.svg";
import sparkleright from "../images/sparkleright.svg";
import dachshund from "../images/dachshund.png";
import cupcake from "../images/cupcake.png";
import palette from "../images/palette.png";
import plane from "../images/plane.png";


export const About = () => {
    return (
        <>
        <div id="about" className="about">
        <div className="aboutpicture"><img className="about-img" src={about} alt="mmpic" /></div>
            <div className="about-section__about">
            <div className="resumepicture"><a href="https://drive.google.com/file/d/1UeIW5zKuBer1YpJa4WVyY-_6DkCnRtia/view?usp=sharing" target="_blank"><img className="resume-img rotating" src={resume} alt="resume"/></a></div>
                <div className="about-section__icon">
                <div className="media-btn">
                <h3>About</h3>
                <div className="unicornpicture"><img className="unicorn-img" src={unicorn} alt="unicorn"/></div>
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
                <div className="about-section__text">
                <h5>As a Front-End Developer, I am passionate about creating user-focused and responsive applications. I strive to use my creativity in a way that makes the world around me beautiful and harmonious. I'm focused on connecting with others through hearing their stories and seeing things from their perspective. I strive to construct an inclusive environment where everyone feels welcome and seen. My Superpowers are my positivity, kindness, enthusiasm for whatever gets thrown my way. Above all, I value human connection, authenticity, and mutual support.</h5>
            </div>
            </div>
            </div>
            <div className="about-interest__header">
                <img className="sparkle-left" src={sparkleleft} alt="sparkleft" />
                <h2>When I'm not coding, you can find me.....</h2>
                <img className="sparkle-right" src={sparkleright} alt="sparkright" />
            </div>
            <div className="about-section__interests">
                <div className="about-interest">
            <div className="moon"><img className="moon-img" src={moon} alt="moonimg" />
            <div className="text-icon">
                <img className="dachshund-img" src={dachshund} alt="dachshundimg" />    
                <h5>Playing with my dachshund, Moon Unit</h5>
                </div>
                </div>
                </div>
                <div className="about-interest">
                <div className="cake"><img className="cake-img" src={cake} alt="cakeimg" />
                <div className="text-icon">
                <img className="cupcake-img" src={cupcake} alt="cupcakeimg" />
                <h5>Baking and decorating vegan cakes</h5>
                </div>
                </div>
                </div>
                <div className="about-interest">
                <div className="craft"><img className="craft-img" src={craft} alt="craftimg" />
                <div className="text-icon">
                <img className="palette-img" src={palette} alt="paletteimg" />
                <h5>Creating art with many different mediums</h5>
                </div>
                </div>
                </div>
                <div className="about-interest">
                <div className="travel"><img className="travel-img" src={travel} alt="travelimg" />
                <div className="text-icon">
                <img className="plane-img" src={plane} alt="planeimg" />
                <h5>Travelling to places that feel like a Bob Ross painting</h5>
                </div>
            </div>
            </div>
            </div>
        
        </>
    )
}