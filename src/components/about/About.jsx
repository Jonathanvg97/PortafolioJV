import React from "react";
import foto from "./images/foto.png";
import "./about.css";


function About() {
    return (
    <div>
      <h1 className="Acerca">About Me</h1>
      <div className="about">
        <img className="foto" src={foto} alt="Foto perfil" />
        <p className="descripcion">Hello, my name is Jonathan Vanegas, welcome to my briefcase. I am a Full Stack programmer, I like the front-end, 1 year ago I started this path of technology and programming and it is something that I still like a lot, I am passionate about design, I am creative and I like to solve problems. This is why I like to continue learning more every day next to technology.</p>
      </div>
      </div>
    );
  }
  
  export default About;
  