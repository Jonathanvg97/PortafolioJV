import React from "react";
import foto from "./images/emoji3.png";
import "./about.css";

function About() {

  return (
    <div>
      <h1 className="Acerca" id="About">
        Acerca
      </h1>
      <div className="about">
        <img className="foto " src={foto} alt="Foto perfil" />
        <p className="descripcion animate__animated animate__slideInLeft">
          Hola! mi nombre es Jonathan Vanegas, bienvenido a mi portafolio. Soy
          programador Full Stack, me gusta el front-end. Hace 1 año inicié este
          camino de la tecnología y la programación; es algo que me sigue
          apasionando al igual que el diseño. Soy creativo y me siento cómodo resolviendo
          problemas, por eso me gustaría seguir aprendiendo cada día más
          al lado de la tecnología.
        </p>
      </div>
    </div>
  );
}

export default About;
