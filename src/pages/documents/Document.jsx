import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import Navbar from "../../components/layout/Navbar/Navbar";
import { styled } from "@nextui-org/react";

const StyledContainerDiv = styled("div", {
  display: "flex",
  justifyContent: "center",
  padding: "0 !important",
  width: "100%",
  height: "100%",
  backgroundColor: "#555555",
  flexWrap: "wrap",
});

const columns = [
  {
    name: "Nombre",
    selector: (row) => row.usu_nombre + row.usu_apelli,
    sortable: true,
  },
  {
    name: "Documento",
    selector: (row) => row.usu_tipo_documento + row.usu_docume,
    sortable: true,
  },
  {
    name: "Correo",
    selector: (row) => row.usu_email,
    sortable: true,
  },
  {
    name: "Celular",
    selector: (row) => row.usu_celula,
  },
  {
    name: "Rol",
    selector: (row) => row.rol_usuario,
    sortable: true,
  },
];

function Document() {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState("usuario");


  const event = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setData(data);
  };

  const onStateChangeHandler = (data) => {
    setTab(data)
    console.log(tab);
  };

  useEffect(() => {
    // event("http://localhost:8080/api/usuario");
  }, []);

  return (
    // <StyledContainerDiv>
    <StyledContainerDiv>
      <Navbar />
      <Table
        data={data}
        columns={columns}
        onStateChange={onStateChangeHandler}
      />
    </StyledContainerDiv>
    // </StyledContainerDiv>
  );
}

export default Document;
