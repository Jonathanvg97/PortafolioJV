import "./proyects.css";
import { data } from "./data.js";

const Proyects = () => {
  return (
    <>
      <h1 className="Acerca" id="Proyect">
        Mis Proyectos
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
                  <img className="tools" style={{width:"40px"}} src={proyect.tools} alt="Herramientas Utilizadas" />
                  <ul className="git">
                    <li className="gits">
                  <a href={proyect.url} target="blank">
                    <button className="Ver">Ver Proyecto</button>
                  </a>
                  </li>
                  <li className="gits">
                  <a href={proyect.urlRepo} target="blank">
                    <button className="Ver">Ver Repositorio</button>
                  </a>
                  </li>
                  </ul>
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
