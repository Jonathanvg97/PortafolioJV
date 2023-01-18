import "./proyects.css";
import { data } from "./data.js";

const Proyects = () => {
  return (
    <>
      <h1 className="Acerca" id="pro">
        {" "}
        My Proyects{" "}
      </h1>
      <div className="co">
        {data.map((proyect) => {
          return (
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title"> {proyect.title}</p>
                  <img className="imgProjects" src={proyect.ruta} alt="" />
                </div>
                <div className="flip-card-back">
                  <p className="title">{proyect.title}</p>
                  <p> {proyect.description}</p>
                  <a href={proyect.url} target="blank">
                    <button className="Ver">View Proyect</button>{" "}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Proyects;
