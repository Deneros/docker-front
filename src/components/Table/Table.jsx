import React from "react";
import DataTable from "react-data-table-component";
import ExpandableTableDocument from "../../components/Expandable/ExpandableTableDocument";
import ExpandableTableUser from "../../components/Expandable/ExpandableTableUser";

const Table = ({ activeTab, columns, data, subHeaderComponent }) => {
  
  const handleExpandableComponent = (activeTab) => {
    if (activeTab === "document") return ExpandableTableDocument;
    if (activeTab === "user") return ExpandableTableUser;
    return null;
  };

  const handleExpandableBool = (activeTab) => {
    return activeTab === "document" || activeTab === "user";
  };

  return (
    <DataTable
      columns={columns[activeTab]}
      data={data}
      pagination
      expandableRows={handleExpandableBool(activeTab)}
      expandableRowsComponent={handleExpandableComponent(activeTab)}
      subHeader
      subHeaderWrap={true}
      subHeaderComponent={subHeaderComponent}
      dense
    />
  );
};

export default Table;
