import React, { useState } from "react";
import Table from "../../components/Table/Table";
import Navbar from "../../components/layout/Navbar/Navbar";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { styled } from "@nextui-org/react";
import { useFetch } from "../../hooks/useFetch";
import ExpandibleTable from "../../components/Expandable/ExpandableTable";

const StyledContainer = styled("div", {
  padding: "20px",
  width: "100%",
  height: "calc(100% - 60px)",
  backgroundColor: "#555555",
});

const StyledContainerGroupTable = styled("div", {
  width: "100%",
  height: "100%",
});

const StyledContainerTable = styled("div", {
  backgroundColor: "#FFF",
  borderTopRightRadius: "3px",
  borderBottomLeftRadius: "3px",
  borderBottomRightRadius: "3px",
  padding: "20px 10px 0px 10px",
  overflowY: "auto",
  height: "calc(100% - 44px)",
});

const StyledCointanerList = styled("div", {
  backgroundColor: "#555555",
});

const StyledUl = styled("ul", {
  display: "flex",
  listStyle: "none",
  ".active": {
    backgroundColor: "#FFF",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
    marginTop: "0",
  },
  ".noActive": {
    borderRight: "1px solid #A1A1A1",
  },
});

const StyledLi = styled("li", {
  padding: "10px 20px",
  marginTop: "3px",
  cursor: "pointer",
  backgroundColor: "#DBDBDB",
});

const useActive = (element) => {};

const activeTab = (tab) => {
  let component, expandable;
  const active = {
    user: null,
    document: null,
    consumption: null,
  };

  switch (tab) {
    case "usuario":
      component = undefined;
      expandable = false;
      active.user = "active";
      active.document = "noActive";
      active.consumption = null;
      break;
    case "documento":
      component = ExpandibleTable;
      expandable = true;
      active.user = null;
      active.document = "active";
      active.consumption = null;
      break;
    default:
      component = undefined;
      expandable = false;
      active.user = "noActive";
      active.document = null;
      active.consumption = "active";
      break;
  }

  return active;
};

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
    {
      name: "Certificado",
      cell: () => (
        <h2 style={{ color: "#FF0000", cursor: "pointer" }} title="Descargar">
          <BsFillFileEarmarkPdfFill />
        </h2>
      ),
    },
  ],
  documento: [
    {
      name: "Nombre",
      selector: (row) => row.document_name,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Fecha creacion",
      selector: (row) => row.send_date + " " + row.send_hour,
      sortable: true,
    },
    {
      name: "Fecha Firma",
      selector: (row) => row.doc_fecha_f + " " + row.doc_hora_f,
    },
    {
      name: "Descargar",
      cell: () => (
        <h2 style={{ color: "#FF0000", cursor: "pointer" }} title="Descargar">
          <BsFillFileEarmarkPdfFill />
        </h2>
      ),
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
  // const [data, setData] = useState([]);
  const [tab, setTab] = useState("usuario");
  const { data, loading } = useFetch(URL[tab]);
  const active = activeTab(tab);

  const onStateChangeHandler = (data) => {
    setTab(data);
  };

  return (
    <>
      <Navbar />
      <StyledContainer>
        <StyledContainerGroupTable>
          <StyledContainerTable>
            <StyledCointanerList>
              <StyledUl>
                <StyledLi
                  className={active.user}
                  onClick={() => onStateChangeHandler("usuario")}
                >
                  <p>Usuarios</p>
                </StyledLi>
                <StyledLi
                  className={active.document}
                  onClick={() => onStateChangeHandler("documento")}
                >
                  <p>Documentos</p>
                </StyledLi>
                <StyledLi
                  className={active.consumption}
                  onClick={() => onStateChangeHandler("consumo")}
                >
                  <p>Consumo</p>
                </StyledLi>
              </StyledUl>
            </StyledCointanerList>
            {!loading && (
              <Table
                data={data}
                columns={columns[tab]}
                onStateChange={onStateChangeHandler}
                expandableComponent={active.component}
              />
            )}
          </StyledContainerTable>
        </StyledContainerGroupTable>
      </StyledContainer>
    </>
  );
}

export default Document;
