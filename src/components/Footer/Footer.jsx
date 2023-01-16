import React from "react";
import "./footer.css";
import ReactWhatsapp from "react-whatsapp";
import logo from "./logo.png";

function Footer() {
  return (
    <div className="footer">
      <h1 className="sloganFooter">
        Jonathan Vanegas <br /> Full Stack 
      </h1>
      <div className="containerF">
      <img className="logo" src={logo} alt="imagen logo" />
      <div className="footer-contact">
        <a
          href="https://www.linkedin.com/in/jonathanvanegasdeveloperandphysicaltrainer/"
          target="blank"
        >
          <i class="ri-linkedin-box-line"></i>
        </a>
        <a href="https://github.com/Jonathanvg97" target="blank">
          <i class="ri-github-fill"></i>
        </a>
        <ReactWhatsapp className="botonWha"
          number="57-310-858-0916"
          message="Buen día, me gustaría cotizar el desarrollo de una Página/Aplicativo Web. Quisiera saber más información, Mis datos de contacto son: "
        >
          <i class="ri-whatsapp-line"></i>
        </ReactWhatsapp>
      </div>

      <div className="links">
        <a href="" className="li"> About Me</a>
        <a href="" className="li"> Proyects</a>
        <a href="" className="li"> Contact </a>
      </div>
      </div>
      <span className="frase">"Ser libre es  gastar la mayor cantidad de tiempo de nuestra <br /> vida en aquello que nos gusta hacer"</span>
    </div>
  );
}

export default Footer;
