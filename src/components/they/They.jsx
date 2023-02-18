import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "./image/Juli.png";
import image2 from "./image/stiven.png";
import image3 from "./image/download-removebg-preview.png";

import "./they.css";

const imageData = [
  {
    id: 1,
    label: "Juliana Fajardo",
    alt: image1,
    Text: "Es un estudiante destacado y responsable.Siempre cumple con su trabajo de manera idónea en cuanto a código, es un excelente gestor en proyectos y product owner.",
    url:"https://www.linkedin.com/in/julianafajardo",
    url2:"https://github.com/wjulifajarb/wjulifajarb"
  },
  {
    id: 2,
    label: "Andrea Niño",
    alt: image3,
    Text: "Me parece un buen estudiante , es creatvio , curioso e innovador.",
  },
  {
    id: 3,
    label: "Stiven Saavedra",
    alt: image2,
    Text: "Me parece un buen estudiante , es creatvio , curioso e innovador.",
  },
  {
    id: 4,
    label: " Jimmy Murillo",
    alt: image2,
    Text: "Me parece un buen estudiante , es creatvio , curioso e innovador.",
  },
 
];

const renderSlides = imageData.map((image) => (
  <div className="container">
    <div key={image.id}>
      <img className="perfil" src={image.alt} alt="" />
      <span className="opinion">{image.Text}</span>
      <p className="legend" id="legen">
        {image.label}{" "}
      </p>
    </div>
    <div className="redesThey">
      <a href={image.url2} target="blank">
        <i className="ri-github-fill"></i>
      </a>

      <a
        href={image.url}
        target="blank"
      >
        <i className="ri-linkedin-box-line"></i>
      </a>
      </div>
  </div>
  
));

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="they">
      <h1 className="Acerca">Referencias</h1>
      <div className="slider">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="carousel-container"
        >
          {renderSlides}
        </Carousel>
      </div>
    </div>
  );
}
