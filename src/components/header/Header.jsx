import React from "react";
import avatar from "./image/header2.jpg";
import "./header.css";
import About from "../about/About";

function Header() {
  return (
    <div className="header">
      <img className="avatar" src={avatar} alt="" />
      <ul className="btn">
        <li>
          <button className="btnHeader">About Me</button>
        </li>
        <li>
          <button className="btnHeader">Proyects</button>
        </li>
        <li>
          <button className="btnHeader">Contact</button>
        </li>
      </ul>
      <h1 className="Principal">
        take the next <br /> step with me
      </h1>
      <button className="contact"> Contact Me <i class="ri-whatsapp-line"></i></button>
      <h2 className="Secundario">
        Looking for who can make the <br /> idea come true What <br /> do you
        have in mind?
      </h2>
      <p className="respuesta">
        You are in the right place, <br /> I design incredible web pages, for
        amazing projects
      </p>
      <div className="Fondo">
      <About />
      </div>
    </div>
  );
}

export default Header;
