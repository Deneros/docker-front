import React from "react";
import { Dropdown, Text, Switch  } from "@nextui-org/react";
import "./Navbar.css";
import logo from "../../../assets/images/logo.png";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [t, i18n] = useTranslation("global");

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
            <a href="#">{t("navbar.home")}</a>
          </li>
          <li>
            <a href="#">{t("navbar.documents")}</a>
          </li>
          <li>
            <a href="#">{t("navbar.templates")}</a>
          </li>
          <li>
            <a href="#">{t("navbar.reports")}</a>
          </li>
        </ul>
      </div>
      <div>
        <MenuList />
      </div>
      <div>
        <Switch onChange={(e)=>{e.target.checked ? i18n.changeLanguage("en"):i18n.changeLanguage("es")}}/>
      </div>
    </div>
  );
}

export default Navbar;
