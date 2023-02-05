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
import log from './image/logo.png'
import {NavHeader} from '../Menu/Menu'



function Header() {
  return (
    <>
    <NavHeader/>
    <div className="header">
      <img className="avatar" src={avatar} alt="" />
      
      <img className="log" src={log} alt="logo" />
      <h1 className="Principal">
      ¿Buscando quién puede hacer realidad la <br /> idea que <br /> 
        tienes en mente?
      </h1>
   
        <ReactWhatsapp className="contact"
          number="57-310-858-0916"
          message="Buen día, me gustaría cotizar el desarrollo de una Página/Aplicativo Web. Quisiera saber más información, Mis datos de contacto son: "
        >
          Contact Me <i class="ri-whatsapp-line"></i>
        </ReactWhatsapp>
   

      <h2 className="Secundario">
     Toma el siguiente paso conmigo
      </h2>
      
      <div className="Fondo">
        <br />
        <br />
        <About /> 
        <Skills />
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
    </>

  );
}

export default Header;


