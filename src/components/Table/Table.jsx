import React from "react";
import { styled } from "@nextui-org/react";
import DataTable from "react-data-table-component";
import InputFilter from "../../components/Input/InputFilter";
// import "./Table.css";

// const StyledTable = styled(DataTable, {
//   ".rdt_Table": {
//   },
//   ".rdt_TableHeader":{
//     marginTop:"6% !important",
//   }
// })

const StyledContainerDiv = styled("div", {
  display: "flex",
  justifyContent: "center",
  padding: "0 !important",
  width: "100%",
  height: "100%",
  backgroundColor: "#555555",
  flexWrap: "wrap",
});

const StyledContainerTable = styled("div", {
  // padding:"0 !important",
  display: "flex !important",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  width: "92vw",
  height: "70vh",
  backgroundColor: "white",
  borderRadius: "5px",
  flexWrap: "wrap",
});

const StyledCointanerList = styled("div", {
  position: "absolute",
  top: "0",
  width: "100%",
  height: "8vh",
  backgroundColor: "#DBDBDB",
});

const StyledUl = styled("ul", {
  padding: "0",
  margin: "0",
  display: "flex",
  alignItems: "center",
  height: "8vh",
  ".active": {
    position: "abolute",
    cursor: "default",
    backgroundColor: "white",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
  },
});

const StyledLi = styled("li", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  listStyle: "none",
  borderRight: "solid 0.5px gray",
  boxSizing: "border-box",
  padding: "0px 50px",
  height: "100%",
  zIndex: "2",
  "&:hover": {
    cursor: "pointer",
  },
  "&:last-child": {
    cursor: "default",
    border: "none",
    width: "100%",
    backgroundColor: "#555555",
  },

  ".active": {
    cursor: "default",
    backgroundColor: "white",
  },
});

const Styleda = styled("a", {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  fontSize: "16px",
});

function Table(props) {

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <InputFilter
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const filteredItems = props.data;

  return (
    <StyledContainerDiv>
      <StyledContainerTable>
        <StyledCointanerList>
          <StyledUl>
            <StyledLi className="active">
              <Styleda onClick={() => props.onStateChange("usuario")}>
                Usuarios
              </Styleda>
            </StyledLi>
            <StyledLi>
              <Styleda onClick={() => props.onStateChange("documento")}>
                Documentos
              </Styleda>
            </StyledLi>
            <StyledLi>
              <Styleda onClick={() => props.onStateChange("consumo")}>
                Consumo
              </Styleda>
            </StyledLi>
            <StyledLi>
              <Styleda></Styleda>
            </StyledLi>
          </StyledUl>
        </StyledCointanerList>
        <div style={{ marginTop: "6%", position:"relative" }}>
        <DataTable
          columns={props.columns}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          expandableRows
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
        />
        </div>
      </StyledContainerTable>
    </StyledContainerDiv>
  );
}

export default Table;
