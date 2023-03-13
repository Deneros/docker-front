import React from "react";
import { styled, Container, css } from "@nextui-org/react";
import DataTable from "react-data-table-component";
import './Table.css';

function Table(props) {

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
    ".active":{
      position:"abolute",
      cursor:"default",
      backgroundColor:"white",
      borderTopLeftRadius:"3px",
      borderTopRightRadius:"3px"
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
    zIndex:"2",
    "&:hover": {
      cursor: "pointer",
    },
    "&:last-child": {
      cursor:"default",
      border: "none",
      width:"100%",
      backgroundColor: "#555555"
    },

    ".active":{
      cursor:"default",
      backgroundColor:"white"
    }
  });

  const Styleda = styled("a", {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: "16px",
  });

  

  

  return (
    <StyledContainerTable>
      <StyledCointanerList>
        <StyledUl>
          <StyledLi className="active">
            <Styleda onClick={()=> props.onStateChange('usuario')}>Usuarios</Styleda>
          </StyledLi>
          <StyledLi>
            <Styleda onClick={()=> props.onStateChange('documento')}>Documentos</Styleda>
          </StyledLi>
          <StyledLi>
            <Styleda onClick={()=> props.onStateChange('consumo')}>Consumo</Styleda>
          </StyledLi>
          <StyledLi>
            <Styleda></Styleda>
          </StyledLi>
        </StyledUl>
      </StyledCointanerList>
      <DataTable columns={props.columns} data={props.data} pagination />
    </StyledContainerTable>
  );
}

export default Table;
