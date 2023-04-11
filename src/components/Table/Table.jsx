import React, { useState } from "react";
import { styled} from "@nextui-org/react";
import DataTable from "react-data-table-component";
import InputFilter from "../../components/Input/InputFilter";
import DatePicker from "../../components/Input/DatePicker";
import Select from "../../components/Select/Select";







// let base64Document;

// const getDocument = (url) => {

//   fetch(url)
//     .then(response => {
//       if (!response.ok) throw new Error('No se pudo obtener los datos');
//       return response.json();
//     })
//     .then(data => base64Document = data.document)
//     .catch(error => console.log(error));
// }

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

function Table({columns, data, expandableComponent }) {
  const [filterText, setFilterText] = React.useState("");
  const [typeDate, setTypeDate] = React.useState(new Set(["Seleccione una fecha"]));
  const [startDate, setStartDate] = React.useState(null);
  const [finishDate, setFinishDate] = React.useState(null);


  // const subHeaderComponentMemo = React.useMemo(() => {
  //   const handleClear = () => {
  //     if (filterText) {
  //       setFilterText("");
  //     }
  //   };

  //   const handleFilterText = (data) => {
  //     setFilterText(data);
  //   };

  //   const handleDatePickerStart = (data) => {
  //     setStartDate(data);
  //   };

  //   const handleDatePickerFinish = (data) => {
  //     if (startDate > data) {
  //       alert("No se puede asignar una fecha final menor que la inicial");

  //       return false;
  //     }

  //     setFinishDate(data);
  //   };

  //   const handleDateType = (data) => {
  //     setTypeDate(data);
  //   };

  //   if (tab == "documento") {
  //     return (
  //       <>
  //         <Select onSelect={handleDateType} />
  //         <DatePicker
  //           id="start"
  //           label="Fecha Inicio"
  //           onDate={handleDatePickerStart}
  //         />
  //         <DatePicker
  //           id="finish"
  //           label="Fecha Final"
  //           onDate={handleDatePickerFinish}
  //         />
  //         <InputFilter
  //           onFilter={(value) => handleFilterText(value)}
  //           onClear={handleClear}
  //           filterText={filterText}
  //         />
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <InputFilter
  //           onFilter={(value) => handleFilterText(value)}
  //           onClear={handleClear}
  //           filterText={filterText}
  //         />
  //       </>
  //     );
  //   }
  // }, [filterText, startDate, finishDate]);



  return (
          <DataTable
            columns={columns}
            data={data}
            pagination
            expandableRows={true}
            expandableRowsComponent={expandableComponent}
            subHeader
            subHeaderWrap={true}
            dense
          />

  );
}

export default Table;
