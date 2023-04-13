import React, { useState, useEffect } from "react";
import ExpandibleTable from "../../components/Expandable/ExpandableTable";
import DocumentFilter from "../../components/Filter/DocumentFilter";
import UserFilter from "../../components/Filter/UserFilter";
import Navbar from "../../components/layout/Navbar/Navbar";
import DataTable from "react-data-table-component";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { filterByTabs } from "../../services/filterService";
import { styled } from "@nextui-org/react";
import { useFetch } from "../../hooks/useFetch";
import { useActiveTab } from "../../hooks/useActiveTab";
import { useFilter } from "../../hooks/useFilter";
import { useToggle } from "../../hooks/useHook";

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

//   const active = {
//     user: null,
//     document: null,
//     consumption: null,
//     component: null,
//     expandable: null
//   };

//   switch (tab) {
//     case "usuario":
//       active.component = undefined;
//       active.expandable = false;
//       active.user = "active";
//       active.document = "noActive";
//       active.consumption = null;
//       break;
//     case "documento":
//       active.component = ExpandibleTable;
//       active.expandable = true;
//       active.user = null;
//       active.document = "active";
//       active.consumption = null;
//       break;
//     default:
//       active.component = undefined;
//       active.expandable = false;
//       active.user = "noActive";
//       active.document = null;
//       active.consumption = "active";
//       break;
//   }

//   return active;
// };

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
      selector: (row) => row.sign_date + " " + row.sign_hour,
    },
    {
      name: "Acciones",
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

const VisualizeDocument = (expanded, row) => {
  if (!expanded) return null;

  return (
    <ExpandibleTable id={row} />
  )
}


function Document() {
  const {
    filterText,
    setFilterText,
    startDate,
    setStartDate,
    finishDate,
    setFinishDate,
    typeDate,
    setTypeDate,
  } = useFilter();
  const { activeTab, getTabClassName, setActive } = useActiveTab("usuario");
  const { data, loading } = useFetch(URL[activeTab]);
  // const [expandedDocument, setExpandedDocument] = React.useState(null);

  // const handleRowExpandToggled = (expanded, row) => {
  //   if (expanded) {
  //     setExpandedDocument(row);
  //   } else {
  //     setExpandedDocument(null);
  //   }
  // };

  // useEffect(() => {
  //   console.log(filterText)
  // }, [activeTab,filterText])
  


  const subHeaderComponentMemo = React.useMemo(() => {
    if (activeTab == "documento") {
      return (
        <>
          <DocumentFilter
            filterText={filterText}
            setFilterText={setFilterText}
            startDate={startDate}
            setStartDate={setStartDate}
            finishDate={finishDate}
            setFinishDate={setFinishDate}
            typeDate={typeDate}
            setTypeDate={setTypeDate}
          />
        </>
      );
    } else {
      return (
        <>
          <UserFilter filterText={filterText} setFilterText={setFilterText} />
        </>
      );
    }
  }, [activeTab, filterText, startDate, finishDate, typeDate]);


  return (
    <>
      <Navbar />
      <StyledContainer>
        <StyledContainerGroupTable>
          <StyledCointanerList>
            <StyledUl>
              <StyledLi
                className={getTabClassName("usuario")}
                onClick={() => setActive("usuario")}
              >
                <p>Usuarios</p>
              </StyledLi>
              <StyledLi
                className={getTabClassName("documento")}
                onClick={() => setActive("documento")}
              >
                <p>Documentos</p>
              </StyledLi>
              <StyledLi
                className={getTabClassName("consumo")}
                onClick={() => setActive("consumo")}
              >
                <p>Consumo</p>
              </StyledLi>
            </StyledUl>
          </StyledCointanerList>
          <StyledContainerTable>
            {!loading && data && (
              <DataTable
                columns={columns[activeTab]}
                data={filterByTabs(
                  activeTab,
                  data,
                  filterText,
                  startDate,
                  finishDate,
                  typeDate
                )}
                pagination
                expandableRows={activeTab === "documento" ? true : false}
                expandableRowsComponent={
                  activeTab === "documento" ? ExpandibleTable : null
                }
                subHeader
                subHeaderWrap={true}
                subHeaderComponent={subHeaderComponentMemo}
                onRowExpandToggled={(expanded, row)=>{VisualizeDocument(expanded,row)}}
                dense
              />
            )}
          </StyledContainerTable>
        </StyledContainerGroupTable>
      </StyledContainer>
    </>
  );
}

export default Document;
