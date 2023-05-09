import React from "react";
import DataTable from "react-data-table-component";

const Table = ({ columns, data, subHeaderComponent, expandableComponent, dense=true }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      expandableRows={!!expandableComponent}
      expandableRowsComponent={expandableComponent}
      subHeader={!!subHeaderComponent}
      subHeaderWrap={true}
      subHeaderComponent={subHeaderComponent}
      dense={dense}
    />
  );
};

export default Table;