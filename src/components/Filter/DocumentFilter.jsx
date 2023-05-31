import React from "react";
import Select from "../Select/Select";
import GeneralInput from "../Input/GeneralInput";

const DocumentFilter = ({
  filterText,
  setFilterText,
  typeDate,
  setTypeDate,
  startDate,
  setStartDate,
  finishDate,
  setFinishDate,
}) => {
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

  return (
    <>
      <Select onSelect={handleDateType} />
      <div style={{paddingRight: "10px"}}>
        <p style={{textAlign: "center"}}>Fecha de inicio</p>
        <GeneralInput
          id="start-date"
          type="date"
          onChange={handleDatePickerStart}
          onClear={handleClear}
        />
      </div>
      <div style={{paddingRight: "10px"}}>
        <p style={{textAlign: "center"}}>Fecha Final</p>
        <GeneralInput
          id="finish-date"
          type="date"
          onChange={handleDatePickerFinish}
          onClear={handleClear}
        />
      </div>
      <GeneralInput
        id="filter"
        label="Buscar"
        type="text"
        onChange={handleFilterText}
        onClear={handleClear}
      />
    </>
  );
};

export default DocumentFilter;
