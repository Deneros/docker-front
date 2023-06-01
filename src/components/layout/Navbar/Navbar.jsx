import React, {useState,useEffect} from "react";
import { Dropdown, Text, Switch  } from "@nextui-org/react";
import "./Navbar.css";
import logo from "../../../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';

function Navbar() {
  const [t, i18n] = useTranslation("global");
  const [user, setUser] =  useState("Guest")
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const userParam = query.get('user')?? 'Admin';
    setUser(userParam);

  }, [location])

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
            {user}
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
            <a href={process.env.REACT_APP_NAVBAR_URL_HOME}>{t("navbar.home")}</a>
          </li>
          <li>
            <a href={process.env.REACT_APP_NAVBAR_URL_DOCUMENT}>{t("navbar.documents")}</a>
          </li>
          <li>
            <a href={process.env.REACT_APP_NAVBAR_URL_TEMPLATE}>{t("navbar.templates")}</a>
          </li>
          <li>
            <a href={process.env.REACT_APP_NAVBAR_URL_REPORT}>{t("navbar.reports")}</a>
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
