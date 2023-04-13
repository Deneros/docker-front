import React from "react";
import InputFilter from "../Input/InputFilter";

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
    <InputFilter
      onFilter={(value) => handleFilterText(value)}
      onClear={handleClear}
      filterText={filterText}
    />
  );
};

export default UserFilter;