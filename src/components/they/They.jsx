import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "./image/Juli.png";
import image2 from "./image/stiven.png";
import image3 from "./image/download-removebg-preview.png";

import "./they.css";

const imageData = [
  {
    id: "1",
    label: "Juliana Fajardo",
    alt: image1,
    Text: "Me parece un buen estudiante , es creatvio , curioso e innovador.",
  },
  {
    id: "2",
    label: "Andrea Niño",
    alt: image3,
    Text: "Me parece un buen estudiante , es creatvio , curioso e innovador.",
  },
  {
    id: "3",
    label: "Stiven Saavedra",
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
      <a href="https://github.com/Jonathanvg97" target="blank">
        <i class="ri-github-fill"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/jonathanvanegasdeveloperandphysicaltrainer/"
        target="blank"
      >
        <i class="ri-linkedin-box-line"></i>
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
      <h1 className="Acerca">Referenicas</h1>
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
