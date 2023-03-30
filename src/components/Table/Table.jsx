import React from "react";
import { styled, Avatar, Grid, Container } from "@nextui-org/react";
import DataTable from "react-data-table-component";
import InputFilter from "../../components/Input/InputFilter";
import DatePicker from "../../components/Input/DatePicker";
import Select from "../../components/Select/Select";

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
  height: "calc(100% - 44px)"
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
    marginTop: "0"
  },
  ".noActive": {
    borderRight: "1px solid #A1A1A1"
  }
});

const StyledLi = styled("li", {
  padding: "10px 20px",
  marginTop: "3px",
  cursor: "pointer",
  backgroundColor: "#DBDBDB"
});

const Styleda = styled("a", {
});

const ExpandibleCard = (data) => {
  const nameUsers = ["Junior", "Jane", "W", "John", "JR"];
  const pictureUsers = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    "https://i.pravatar.cc/150?u=a04258114e29026702d",
    "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  ];
  return (
    <div style={{ display: "flex", gap: "30px", paddingLeft: "60px" }}>
      <Container>
        <p style={{ backgroundColor: "violet" }}>Aqui va el pdf</p>
      </Container>
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
    </div>
  );
};

const filterByUser = (data, filterText) => {
  return data.filter((item) => {
    return (
      item.usu_nombre.toLowerCase().includes(filterText.toLowerCase()) ||
      item.usu_apelli.toLowerCase().includes(filterText.toLowerCase())
    );
  });
};

const filterByDocument = (
  data,
  startDate,
  finishDate,
  filterText,
  typeDate
) => {
  console.log(filterText);

  return data.filter((item) => {
    // if (startDate === null && finishDate === null) {
    //   return true;
    // }

    let filterDate = item.doc_fechac;
    if (typeDate[0] === "Fecha de firmado") {
      filterDate = item.doc_fecha_f;
    }

    const dateFilter =
      startDate && finishDate
        ? filterDate >= startDate && filterDate <= finishDate
        : true;
    const textFilter =
      item.doc_nombre && item.doc_estado
        ? item.doc_nombre.toLowerCase().includes(filterText.toLowerCase()) ||
          item.doc_estado.toLowerCase().includes(filterText.toLowerCase())
        : true;

    return dateFilter && textFilter;
  });
};

const filterByTabs = (
  tab,
  data,
  filterText,
  startDate,
  finishDate,
  typeDate
) => {
  if (tab === "usuario") {
    return filterByUser(data, filterText);
  }

  if (tab === "documento") {
    return filterByDocument(data, startDate, finishDate, filterText, typeDate);
  }
};

function Table(props) {
  const [filterText, setFilterText] = React.useState("");
  const [typeDate, setTypeDate] = React.useState(
    new Set(["Seleccione una fecha"])
  );
  const [startDate, setStartDate] = React.useState(null);
  const [finishDate, setFinishDate] = React.useState(null);

  const { tab } = props;
  const { data } = props;
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
      if (startDate > data) {
        alert("No se puede asignar una fecha final menor que la inicial");

        return false;
      }

      setFinishDate(data);
    };

    const handleDateType = (data) => {
      setTypeDate(data);
    };

    if (props.tab == "documento") {
      return (
        <>
          <Select onSelect={handleDateType} />
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
  
  const component = tab == "documento" ? ExpandibleCard : undefined;
  const expandable = tab == "documento";

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
          </StyledUl>
        </StyledCointanerList>
        <StyledContainerTable>
          <DataTable
            columns={props.columns}
            data={filterByTabs(
              tab,
              data,
              filterText,
              startDate,
              finishDate,
              typeDate
            )}
            pagination
            expandableRows={expandable}
            expandableRowsComponent={component}
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
