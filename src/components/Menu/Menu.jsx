import "./menu.css";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

// Componente Menu y Header
export function NavHeader() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <header>
        <Navbar className="nav" color="faded" light>
          <NavbarToggler  onClick={toggleNavbar} className="iconNav" />
          <Collapse className="collapses" isOpen={!collapsed} navbar>
            <Nav className="navCollapse" navbar>
              <NavItem className="navItemGlobal">
             <a href="#About"><NavLink className="border">Acerca</NavLink></a> 
              </NavItem>
              <NavItem className="navItemGlobal">
               <a href="#Skills"> <NavLink className="border">Habilidades</NavLink></a>
              </NavItem>
              <NavItem className="navItemGlobal">
               <a href="#Proyect"> <NavLink className="border">Proyectos</NavLink></a>
              </NavItem>
              <NavItem className="navItemGlobal">
                <a href="#Contact"> <NavLink className="border">Contactame</NavLink></a>
              </NavItem>
              <NavItem className="navItemGlobal">
               <a href="https://drive.google.com/file/d/13CczM6GBnX8Sh17wRNxFtfUl148Y_0ME/view?usp=share_link" target="blank"> <NavLink className="border">Curriculum</NavLink></a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    </>
  );
}