import React from "react";
import foto from "./images/foto1.png";
import "./about.css";


function About() {
    return (
    <div>
      <h1 className="Acerca" id="About">Acerca de Mi</h1>
      <div className="about">
        <img className="foto" src={foto} alt="Foto perfil" />
        <p className="descripcion">Hola, mi nombre es Jonathan Vanegas, bienvenido a mi portafolio. Soy programador Full Stack, me gusta el front-end, hace 1 año inicié este camino de la tecnología y la programación y es algo que me sigue gustando mucho, me apasiona el diseño, soy creativo y me gusta resolver problemas. Por eso me gusta seguir aprendiendo cada día más al lado de la tecnología.</p>
      </div>
      </div>
    );
  }
  
  export default About;
  