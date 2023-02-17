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
import Zoom from "@mui/material/Zoom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";



function Skills() {
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
      fontSize: 12,
    },
  }));

  return (
    <>
      <div className="Hab">
        <h1 className="Acerca" id="Skills" style={{ marginTop: "40px" }}>
          Tecnologías
        </h1>
        <ul className="skills">

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
  
          </li>

          <li>
          <BootstrapTooltip
              leaveDelay={200}
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 600 }}
              title=" El CSS (hojas de estilo en cascada) es un lenguaje que define la apariencia de un documento escrito en un lenguaje de marcado (por ejemplo, HTML)."
              followCursor
              arrow
            >
            <img className="skill3" src={css} alt="logo html" />
            </BootstrapTooltip>
  
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
  
          </li>

          <li>
          <BootstrapTooltip
              leaveDelay={200}
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 600 }}
              title=" Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML)."
              followCursor
              arrow
            >
              <img className="skill4" src={python} alt="logo python" />
            </BootstrapTooltip>
          </li>

          <li>
          <BootstrapTooltip
              leaveDelay={200}
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 600 }}
              title="React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página."
              followCursor
              arrow
            >
               <img className="skill5" src={react} alt="logo react" />
            </BootstrapTooltip>
          </li>

          <li>
          <BootstrapTooltip
              leaveDelay={200}
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 600 }}
              title="Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web."
              followCursor
              arrow
            >
            <img className="skill6" src={boostrap} alt="logo boostrap" />
            </BootstrapTooltip>
          </li>

          <li>
          <BootstrapTooltip
              leaveDelay={200}
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 600 }}
              title="Trello es un software de administración de proyectos con interfaz web y con cliente para iOS y android para organizar proyectos.​"
              followCursor
              arrow
            >
            <img className="skill7" src={trello} alt="logo trello" />
            </BootstrapTooltip>
          </li>

          <li>
          <BootstrapTooltip
              leaveDelay={200}
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 600 }}
              title="Figma es un editor de gráficos vectorial y una herramienta de generación de prototipos, principalmente basada en la web, con características off-line adicionales habilitadas por aplicaciones de escritorio en macOS y Windows."
              followCursor
              arrow
            >
            <img className="skill8" src={figma} alt="logo figma" />
            </BootstrapTooltip>
          </li>

        </ul>
      </div>
    </>
  );
}

export default Skills;
