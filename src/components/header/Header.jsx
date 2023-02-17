import React from "react";
import avatar from "./image/fondo6.jpg";
import "./header.css";
import About from "../about/About";
import Skills from "../skils/Skills";
import Proyects from "../proyects/Proyects";
import Slider from "../they/They";
import Footer from "../Footer/Footer";
import ReactWhatsapp from "react-whatsapp";
import { Correo } from "../correo/Correo";
import { NavHeader } from "../Menu/Menu";
import "animate.css";


function Header() {
  return (
    <>
      <NavHeader />
      <div className="header">
        <img className="avatar" src={avatar} alt="" />

        <h1 className="Principal animate__animated animate__zoomInDown">
          ¿Buscando quién puede hacer realidad la idea que tienes en mente?
        </h1>

        <ReactWhatsapp
          className="contact"
          number="57-310-858-0916"
          message="Buen día, me gustaría cotizar el desarrollo de una Página/Aplicativo Web. Quisiera saber más información, Mis datos de contacto son: "
        >
          Contact Me <i class="ri-whatsapp-line"></i>
        </ReactWhatsapp>

        <h2 className="Secundario">Toma el siguiente paso conmigo</h2>


        <div className="Fondo">
          <br />
          <br />
          <About />
          <Skills />
          <br />
          <br />
          <Proyects />
          <Slider />
          <Correo />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Header;
