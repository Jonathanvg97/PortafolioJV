import React from "react";
import "./skills.css";
import js from "./image/js.png";
import css from "./image/css.png";
import html from "./image/html.png";
import python from "./image/python.png";
import react from "./image/react.png";
import boostrap from "./image/bootstrap.png";
import trello from "./image/trello.png";
import figma from "./image/figma.png";

function Skills() {
  return (
    <div className="Hab">
      <h1 className="Acerca" style={{marginTop:'40px'}}>Skills</h1>
      <ul className="skills">
       <li><img className="skill" src={js} alt="logo js" /></li>
       <li><img className="skill" src={css} alt="logo css" /></li>
       <li><img className="skill" src={html} alt="logo html" /></li>
       <li><img className="skill" src={python} alt="logo python" /></li>
       </ul>
       <ul className="skills">
       <li><img className="skill" src={react} alt="logo react" /></li>
       <li><img className="skill" src={boostrap} alt="logo boostrap" /></li>
       <li><img className="skill" src={trello} alt="logo trello" /></li>
       <li><img className="skill" src={figma} alt="logo figma" /></li>
       </ul>
    </div>
  );
}

export default Skills;
