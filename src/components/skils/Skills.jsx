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
      <h1 className="Acerca" id="Skills" style={{marginTop:'40px'}}>Habilidades</h1>
      <ul className="skills">
       <li><img className="skill1" src={js} alt="logo js" /></li>
       <li><img className="skill2" src={css} alt="logo css" /></li>
       <li><img className="skill3" src={html} alt="logo html" /></li>
       <li><img className="skill4" src={python} alt="logo python" /></li>
       <li><img className="skill5" src={react} alt="logo react" /></li>
       <li><img className="skill6" src={boostrap} alt="logo boostrap" /></li>
       <li><img className="skill7" src={trello} alt="logo trello" /></li>
       <li><img className="skill8" src={figma} alt="logo figma" /></li>
       </ul>
    </div>
  );
}

export default Skills;
