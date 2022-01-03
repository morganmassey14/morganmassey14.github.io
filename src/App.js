import React from "react";
import "./styles/custom.scss";
import { NavBar } from "./components/NavBar";
import {Description} from "./components/Description";
import {About} from "./components/About";
import {Work} from "./components/Work";
import { Link } from "react-router-dom";
// import {Footer} from "./components/Footer"


export const App = () => {
return (
    <div className="page">
            <NavBar />
        <Description />
        <Work />
        <About />

    
    </div>
)    
}