import React from "react";
import { styled } from "@nextui-org/react";
import DataTable from "react-data-table-component";
import InputFilter from "../../components/Input/InputFilter";
import DatePicker from "../../components/Input/DatePicker";
// import "./Table.css";

// const StyledTable = styled(DataTable, {
//   ".rdt_Table": {
//   },
//   ".rdt_TableHeader":{
//     marginTop:"6% !important",
//   }
// })
const StyledTable = styled(DataTable, {
  ".rdt_Table": {

  }
});

const StyledContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  padding: "0 !important",
  width: "100%",
  height: "100%",
  backgroundColor: "#555555",
  flexWrap: "wrap",
});

const StyledContainerGroupTable = styled("div", {
  // padding:"0 !important",
  display: "flex !important",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  width: "92vw",
  height: "90vh",
  backgroundColor: "white",
  borderRadius: "5px",
  flexWrap: "wrap",
});

const StyledContainerTable = styled("div", {
  position: "relative",
  marginTop: "6%",
  width: "95%",
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
    cursor: "default",
    backgroundColor: "white",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
  },
  ".noActive":{
    marginTop:"5px"
  }
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
});

const Styleda = styled("a", {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  fontSize: "16px",
});

function Table(props) {
  const [filterText, setFilterText] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [finishDate, setFinishDate] = React.useState("");

  const { tab } = props;

  const filteredItems = filterText
    ? props.data.filter((item) => {
        return (
          item.usu_nombre.toLowerCase().includes(filterText.toLowerCase()) ||
          item.usu_apelli.toLowerCase().includes(filterText.toLowerCase())
        );
      })
    : props.data;

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setFilterText("");
      }
    };

    const handleFilterText = (data) => {
      setFilterText(data);
    };

    console.log(props.tab);

    if (props.tab == "documento") {
      return (
        <>
          <DatePicker id="start" label="Fecha Inicio" />
          <DatePicker id="finish" label="Fecha Final" />
          <InputFilter
            onFilter={(value) => handleFilterText(value)}
            onClear={handleClear}
            filterText={filterText}
          />
        </>
      );
    }else{
      return (
        <>
          <InputFilter
            onFilter={(value) => handleFilterText(value)}
            onClear={handleClear}
            filterText={filterText}
          />
        </>
      );
    }
  }, [filterText, tab]);

  return (
    <StyledContainer>
      <StyledContainerGroupTable>
        <StyledCointanerList>
          <StyledUl>
            <StyledLi
              className="active"
              onClick={() => props.onStateChange("usuario")}
            >
              <Styleda>Usuarios</Styleda>
            </StyledLi>
            <StyledLi className="noActive" onClick={() => props.onStateChange("documento")}>
              <Styleda>Documentos</Styleda>
            </StyledLi>
            <StyledLi onClick={() => props.onStateChange("consumo")}>
              <Styleda>Consumo</Styleda>
            </StyledLi>
            <StyledLi>
              <Styleda></Styleda>
            </StyledLi>
          </StyledUl>
        </StyledCointanerList>
        <StyledContainerTable>
          <DataTable
            columns={props.columns}
            data={filteredItems}
            pagination
            expandableRows
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            subHeaderWrap={true}
            dense
          />
        </StyledContainerTable>
      </StyledContainerGroupTable>
    </StyledContainer>
  );
}

export default Table;
