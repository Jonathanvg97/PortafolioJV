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
import { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
function Skills() {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const [show2, setShow2] = useState(false);
  const target2 = useRef(null);

  return (
    <>
      <div className="Hab">
        <h1 className="Acerca" id="Skills" style={{ marginTop: "40px" }}>
          Tecnologias
        </h1>
        <ul className="skills">
          <li>
            {" "}
            <img
              className="skill1"
              src={js}
              alt="logo js"
              ref={target}
              onMouseOver={() => setShow(!show)}
            />
          </li>
          <Overlay target={target.current} show={show} placement="bottom-start">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                JavaScript es un lenguaje de programación que los
                desarrolladores utilizan para hacer páginas web interactivas.

          
                <div id="contenedor">
                  <div id="barra">
                    <div id="texto"></div>
                  </div>
                </div>
           
              </Tooltip>
            )}
          </Overlay>

          <li>
            <img className="skill2" src={css} alt="logo css" ref={target2}
              onClick={() => setShow2(!show2)}/>
          </li>
          <Overlay target={target2.current} show={show2} placement="bottom-start">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
               El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos
                <div id="contenedor">
                  <div id="barra">
                    <div id="texto"></div>
                  </div>
                </div>
           
              </Tooltip>
            )}
          </Overlay>
          <li>
            <img className="skill3" src={html} alt="logo html" />
          </li>
          <li>
            <img className="skill4" src={python} alt="logo python" />
          </li>
          <li>
            <img className="skill5" src={react} alt="logo react" />
          </li>
          <li>
            <img className="skill6" src={boostrap} alt="logo boostrap" />
          </li>
          <li>
            <img className="skill7" src={trello} alt="logo trello" />
          </li>
          <li>
            <img className="skill8" src={figma} alt="logo figma" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Skills;
