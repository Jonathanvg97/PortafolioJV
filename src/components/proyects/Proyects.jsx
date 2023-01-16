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

// function Proyects() {

//   return (

//     <div>
//     <h1> My Proyects</h1>
//     <Card className='card'>
//       <Card.Img className='proyect' src={Deezer} />
//       <Card.Body className='bodyCard'>
//         <Card.Title style={{fontFamily:"Domine"}}>Deezer</Card.Title>
//         <Card.Text style={{fontFamily:"Arial"}}>
//           Este proyecto se realizo en colaboración con otros estudiantes. Se realizo una replica de la pagina oficial de deezer
//         </Card.Text>
//         <button className='Ver'>View Proyect</button>
//       </Card.Body>
//     </Card>
//     </div>
//   );
// }

// export default Proyects;
