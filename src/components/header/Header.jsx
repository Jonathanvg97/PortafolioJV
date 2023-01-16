import React from "react";
import avatar from "./image/header2.jpg";
import "./header.css";
import About from "../about/About";
import Skills from "../skils/Skills";
import Proyects from "../proyects/Proyects";
import Slider from "../they/They";
import Footer from "../Footer/Footer";
import ReactWhatsapp from "react-whatsapp";
import {Correo} from '../correo/Correo'

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
   
        <ReactWhatsapp className="contact"
          number="57-310-858-0916"
          message="Buen día, me gustaría cotizar el desarrollo de una Página/Aplicativo Web. Quisiera saber más información, Mis datos de contacto son: "
        >
          Contact Me <i class="ri-whatsapp-line"></i>
        </ReactWhatsapp>
     

      <h2 className="Secundario">
        Looking for who can make the <br /> idea come true What <br /> do you
        have in mind?
      </h2>
      <p className="respuesta">
        You are in the right place, <br /> I design incredible web pages, for
        amazing projects
      </p>
      <div className="Fondo">
        <br />
        <br />
        <About />
        <br />
        <br />
        <Skills />
        <br />
        <br />
        <br />
        <br />
        <Proyects />
        <Slider />
        <Correo/>
        <br />
        <br />
        <br />
        <Footer/>
      </div>
    </div>
  );
}

export default Header;


