import React from "react";
import GeneralInput from "../Input/GeneralInput";

const UserFilter = ({ filterText, setFilterText }) => {
  const handleClear = () => {
    if (filterText) {
      setFilterText("");
    }
  };

  const handleFilterText = (data) => {
    setFilterText(data);
  };

  return (
    <GeneralInput
      id="filter"
      label="Buscar"
      type="text"
      onChange={handleFilterText}
      onClear={handleClear}
    />
  );
};

export default UserFilter;
