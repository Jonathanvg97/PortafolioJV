import Card from "react-bootstrap/Card";
import "./proyects.css";
import { data } from "./data.js";

const Proyects = () => {
  return (
    <>
      <div>
        <h1 className="Acerca"> My Proyects </h1>
        {data.map((proyect) => {
          return (
            <div>
              <div className="f">
                <Card className="card" key={proyect.id}>
                  <Card.Img className="proyect" src={proyect.ruta} />
                  <Card.Body className="bodyCard">
                    <Card.Title style={{ fontFamily: "Domine" }}>
                      {proyect.title}
                    </Card.Title>
                    <Card.Text style={{ fontFamily: "Arial" }}>
                      {proyect.description}
                    </Card.Text>
                    <button className="Ver">View Proyect</button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="Acerca">references</h1>
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
