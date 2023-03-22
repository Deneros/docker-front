import React, { useEffect, useState } from "react";
import Table from "../../components/Table/Table";
import Navbar from "../../components/layout/Navbar/Navbar";

const URL = {
  usuario: "http://localhost:8080/api/usuario",
  documento: "http://localhost:8080/api/documento",
  consumo: "http://localhost:8080/api/consumo",
};

const columns = {
  usuario: [
    {
      name: "Nombre",
      selector: (row) => row.usu_nombre + " " + row.usu_apelli,
      sortable: true,
    },
    {
      name: "Documento",
      selector: (row) => row.usu_tipo_documento + " " + row.usu_docume,
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
  ],
  documento: [
    {
      name: "Nombre",
      selector: (row) => row.doc_nombre,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => row.doc_estado,
      sortable: true,
    },
    {
      name: "Fecha creacion",
      selector: (row) => row.doc_fechac + " " + row.doc_horac,
      sortable: true,
    },
    {
      name: "Fecha Firma",
      selector: (row) => row.doc_fecha_f + " " + row.doc_hora_f,
    },
  ],
  consulta: [
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
  ],
};

function Document() {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState("usuario");

  const fetchDataFromUrl = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setData(data);
  };

  const onStateChangeHandler = (data) => {
    setTab(data);
  };

  useEffect(() => {
    fetchDataFromUrl(URL[tab]);
  }, [tab]);

  return (
    <>
      <Navbar />
      <Table
        data={data}
        columns={columns[tab]}
        onStateChange={onStateChangeHandler}
        tab={tab}
      />
    </>
  );
}

export default Document;
