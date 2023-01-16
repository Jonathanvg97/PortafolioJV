import Card from "react-bootstrap/Card";
import "./proyects.css";
import { data } from "./data.js";

const Proyects = () => {
  return (
    <>
      <h1 className="Acerca"> My Proyects </h1>
      <div className="co">
        {data.map((proyect) => {
          return (
            <div className="containerCard" id="containerCardd">
              <Card className="card" key={proyect.id} id="f">
                <Card.Img className="proyect" src={proyect.ruta} />
                <Card.Body className="bodyCard">
                  <Card.Title style={{ fontFamily: "Domine",color:"#ffffff" }}>
                    {proyect.title}
                  </Card.Title>
                  <Card.Text style={{ fontFamily: "Arial", color:"#ffffff" }}>
                    {proyect.description}
                  </Card.Text>
                  <a href={proyect.url} target="blank">
                    <button className="Ver">View Proyect</button>{" "}
                  </a>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Proyects;


