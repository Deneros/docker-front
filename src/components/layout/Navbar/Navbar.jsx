import React from "react";
import { Dropdown, Text } from "@nextui-org/react";
import "./Navbar.css";
import logo from "../../../assets/images/logo.png";

function Navbar() {
  const MenuList = () => {
    return (
      <Dropdown>
        <Dropdown.Button light>
          <Text
          size={16}
            css={{
              fontFamily: "Poppins-ExtraLight",
            }}
          >
            Nicolas Velez
          </Text>
        </Dropdown.Button>
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
      <div>
        <a href="#">
          <img src={logo} alt="alt" class="logo" />
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
