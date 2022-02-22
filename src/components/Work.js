import React from "react";
import c51 from "../images/c51.png";
import moodmoons from "../images/moodmoons.png";
import "../styles/custom.scss";
import {
  CaseStudyCW,
  PrototypeCW,
  PrototypeMM,
  CaseStudyMM,
  CaseStudyMH,
  PrototypeMH,
} from "./Buttons";
import sparkdiv from "../images/sparkledivide.svg";
import messyhands from "../images/messyhands.png";

export const Work = () => {
  return (
    <>
      <div id="work" className="work">
      <div className="work-section__messyhands">
          <h1>Messy Hands</h1>
          <div className="messyhandspicture">
            <img className="messyhands" src={messyhands} alt="messyhands" />
          </div>
          <h5>
            Messy Hands is a nature crafting app designed for small children,
            and is my final capstone project for Nashville Software School.
          </h5>
          <div className="mh-btn-container">
            <CaseStudyMH />
            <PrototypeMH />
          </div>
          <div className="sparkledivide">
            <img className="sparkdiv-img" src={sparkdiv} alt="sparkdivpic" />
          </div>
        </div>
        <div className="work-section__c51">
          <h1>C51 Website</h1>
          <div className="c51picture">
            <a href="https://nss-day-cohort-51.github.io/" target="_blank">
              <img className="c51" src={c51} alt="c51" />
            </a>
          </div>
          <h5>
            Created to showcase the graduating developers in Nashville Software
            School’s Cohort 51. Contributed to the research, user testing, and
            wire-framing in addition to the creation of lo-fi and hi-fi mockups.
            Helped write code in a team-based environment for the application
            built in React JavaScript.
          </h5>
          <div className="c51-btn-container">
            <CaseStudyCW />
            <PrototypeCW />
          </div>
          <div className="sparkledivide">
            <img className="sparkdiv-img" src={sparkdiv} alt="sparkdivpic" />
          </div>
        </div>
        <div className="work-section__moodmoons">
          <h1>Mood Moons</h1>
          <div className="moodmoonspicture">
            <a href="http://mood-moons.herokuapp.com/" target="_blank">
              <img className="moodmoons" src={moodmoons} alt="moodmoons" />
            </a>
          </div>
          <h5>
            Mood Moons is an application designed to help users manage anxiety
            symptoms with accessible coping skills. The inspiration for Mood
            Moons came from interacting with others who suffered from
            unmanageable anxiety symptoms. Moon Moons is single page application
            built with React JavaScript and JSON-server.
          </h5>
          <div className="mm-btn-container">
            <CaseStudyMM />
            <PrototypeMM />
          </div>
          <div className="sparkledivide">
            <img className="sparkdiv-img" src={sparkdiv} alt="sparkdivpic" />
          </div>
        </div>
      </div>
    </>
  );
};
