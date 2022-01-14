import React from "react";
import {Nav, Tab} from "react-bootstrap"
import { About } from "./About";
import {Work} from "./Work";
import {Description} from "./Description";
import "../styles/custom.scss"
import logo from "../images/mmlogo.svg";

export const NavBarB = () => {
 return ( 
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Nav className="justify-content-end" variant="tabs" >
      <div className="logo"><img className="logo-img" src={logo} alt="logopic" /></div> 
        <Nav.Item>
          <Nav.Link eventKey="first">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Work</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">About</Nav.Link>
        </Nav.Item>
      </Nav>


      <Tab.Content>
        <Tab.Pane eventKey="first">
          <Description />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Work />
        </Tab.Pane><Tab.Pane eventKey="third">
          <About />
        </Tab.Pane>
      </Tab.Content>
</Tab.Container>
)
}