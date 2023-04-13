import React from "react";
import InputFilter from "../Input/InputFilter";
import Select from "../Select/Select";
import DatePicker from "../Input/DatePicker";

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
      <DatePicker id="start" label="Fecha Inicio" onDate={handleDatePickerStart} />
      <DatePicker id="finish" label="Fecha Final" onDate={handleDatePickerFinish} />
      <InputFilter
        onFilter={(value) => handleFilterText(value)}
        onClear={handleClear}
        filterText={filterText}
      />
    </>
  );
};

export default DocumentFilter;