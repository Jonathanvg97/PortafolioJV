import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  .btn {
    text-decoration: none;
    font-size: 20px;
    display: flex;
    top: 40px;
    left: 30px;
    z-index: 2;
    position: absolute;
  }
  .btnHeader {
    background-color: rgb(58, 55, 43);
    border: 0 solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(255, 255, 255, 0.5);
    outline-offset: 0px;
    text-shadow: none;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    border-radius: 10px;
    text-decoration: none;
    color: #fff;
    padding: 0 20px;
    font-family: "Domine", serif;
  }
  @media only screen and (min-width: 500px) and (max-width: 800px) {
    .btnHeader {
      padding: 0px 5px;
    };
  }
  .btnHeader:hover {
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  };
  @media only screen and (max-width: 499px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    };
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul className="btn" open={open}>
      <li>
        <button className="btnHeader">About Me</button>
      </li>
      <li>
        {" "}
        <button className="btnHeader"> Proyects</button>
      </li>
      <li>
        {" "}
        <button className="btnHeader">Contact</button>
      </li>
      <li>
        {" "}
        <button className="btnHeader"> Download CV </button>
      </li>
    </Ul>
  );
};

export default RightNav;
