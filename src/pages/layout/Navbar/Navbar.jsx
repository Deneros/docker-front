import React from "react";
import { Dropdown } from "@nextui-org/react";
import "./Navbar.css";

function Navbar() {
  const MenuList = () => {
    return (
      <Dropdown>
        <Dropdown.Button light>Nombre</Dropdown.Button>
        <Dropdown.Menu aria-label="Static Actions">
          <Dropdown.Item key="new">Perfil</Dropdown.Item>
          <Dropdown.Item key="copy">Subir Grafo</Dropdown.Item>
          <Dropdown.Item key="edit">Gestion Documentos</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <div class="menu-container">
      <div class="logo">
        <a href="#">
          <img src="#" alt="alt"/>
        </a>
      </div>

      <div>
        <ul id="menu-listado" class="nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Documents</a>
          </li>
          <li>
            <a href="#">Template</a>
          </li>
        </ul>
      </div>
      <div>
        <MenuList />
      </div>
    </div>
  );
}

export default Navbar;
