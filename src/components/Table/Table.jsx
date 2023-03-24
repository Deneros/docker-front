import React from "react";
import { styled, Card, Text, Avatar, Grid } from "@nextui-org/react";
import DataTable from "react-data-table-component";
import InputFilter from "../../components/Input/InputFilter";
import DatePicker from "../../components/Input/DatePicker";
// import "./Table.css";

const AvatarGroup = () => {
  const nameUsers = ["Junior", "Jane", "W", "John", "JR"];
  const pictureUsers = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    "https://i.pravatar.cc/150?u=a04258114e29026702d",
    "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  ];
  return (
    <Grid.Container gap={1}>
      <Grid xs={12}>
        <Avatar.Group count={12}>
          {nameUsers.map((name, index) => (
            <Avatar key={index} size="lg" pointer text={name} stacked />
          ))}
        </Avatar.Group>
      </Grid>
      <Grid xs={12}>
        <Avatar.Group count={12}>
          {pictureUsers.map((url, index) => (
            <Avatar
              key={index}
              size="lg"
              pointer
              src={url}
              bordered
              color="gradient"
              stacked
            />
          ))}
        </Avatar.Group>
      </Grid>
    </Grid.Container>
  );
};

const ExpandibleCard = (data) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <AvatarGroup />
    </div>
  );
};

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
  ".noActive": {
    // marginTop:"5px"
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
});

const Styleda = styled("a", {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  fontSize: "16px",
});

function Table(props) {
  const [filterText, setFilterText] = React.useState("");
  const [startDate, setStartDate] = React.useState(null);
  const [finishDate, setFinishDate] = React.useState(null);

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

    const handleDatePickerStart = (data) => {
      setStartDate(data);
    };

    const handleDatePickerFinish = (data) => {

      if(startDate > data){
        alert('No se puede asignar una fecha final mejor que la inicial');
    
        return false;
      }

      setFinishDate(data);
    };

    if (props.tab == "documento") {
      return (
        <>
          <DatePicker
            id="start"
            label="Fecha Inicio"
            onDate={handleDatePickerStart}
            
          />
          <DatePicker
            id="finish"
            label="Fecha Final"
            onDate={handleDatePickerFinish}
          />
          <InputFilter
            onFilter={(value) => handleFilterText(value)}
            onClear={handleClear}
            filterText={filterText}
          />
        </>
      );
    } else {
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
  }, [filterText, tab, startDate, finishDate]);

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
            <StyledLi
              className="noActive"
              onClick={() => props.onStateChange("documento")}
            >
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
            expandableRowsComponent={ExpandibleCard}
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
