import "./skills.css";
import js from "./image/js.png";
import css from "./image/css.png";
import html from "./image/html.png";
import python from "./image/python.png";
import react from "./image/react.png";
import boostrap from "./image/bootstrap.png";
import trello from "./image/trello.png";
import figma from "./image/figma.png";
import * as React from "react";
import Button from "@mui/material/Button";
import Tooltips from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import Zoom from "@mui/material/Zoom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

function Skills() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      maxWidth: 200,
      textAlign: "center",
      fontSize: 12
    },
  }));

  return (
    <>
      <div className="Hab">
        <h1 className="Acerca" id="Skills" style={{ marginTop: "40px" }}>
          Tecnologías
        </h1>
        <ul className="skills">
        {/* <div id="contenedor">
                  <div id="barra">
                    <div id="texto"></div>
                  </div>
                </div> */}

          <li>
          <BootstrapTooltip
              leaveDelay={200}
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 600 }}
              title=" JavaScript es un lenguaje de programación que los
              desarrolladores utilizan para hacer páginas web interactivas."
              followCursor
              arrow
            >
            <img className="skill1" src={js} alt="logo html" />
            </BootstrapTooltip>
               {/* <div id="contenedor">
                  <div id="barra">
                    <div id="texto"></div>
                  </div>
                </div> */}
          </li>

         
          <li>
            <BootstrapTooltip
              leaveDelay={200}
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 600 }}
              title=" El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos"
              followCursor
              arrow
            >
              <img className="skill3" src={html} alt="logo html" />
            </BootstrapTooltip>
               {/* <div id="contenedor">
                  <div id="barra">
                    <div id="texto"></div>
                  </div>
                </div> */}
          </li>

          <li>
            <Tooltips title="eeeee">
              <img className="skill4" src={python} alt="logo python" />
            </Tooltips>
          </li>
          <li>
            <img className="skill5" src={react} alt="logo react" />
          </li>
          <li>
            <img className="skill6" src={boostrap} alt="logo boostrap" />
          </li>
          <li>
            <img className="skill7" src={trello} alt="logo trello" />
          </li>
          <li>
            <img className="skill8" src={figma} alt="logo figma" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Skills;
