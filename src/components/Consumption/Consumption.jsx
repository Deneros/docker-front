import { useState, useEffect } from "react";
import GeneralCard from "../Cards/GeneralCard";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "@nextui-org/react";
import Table from "../Table/Table";
import TableFooter from "../TableFooter/TableFooter";
import ExpandableTableConsumption from "../Expandable/ExpandableTableConsumption";
import { URL, columnsModalUserDocument } from "../../utils/constants";

function Consumption({ boughtFirms, usedFirms, totalDocuments }) {
  const { data, loading } = useFetch(`${URL}user/details`);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "nowrap",
          margin: "0.5rem",
          gap: "1rem",
        }}
      >
        <GeneralCard title="Firmas compradas" value={boughtFirms} />
        <GeneralCard title="Firmas Restantes" value={usedFirms} />
      </div>
      <div style={{ margin: "0.5rem" }}>
        <GeneralCard
          title="Documentos Finalizados"
          value={totalDocuments}
        />
      </div>
      <div style={{ margin: "0.5rem" }}>

        {loading ? (
          <Loading />
        ) : (
          data && <Table columns={columnsModalUserDocument} data={data} expandableRows={true} expandableComponent={ExpandableTableConsumption}/>
        )}
      </div>
    </>
  );
}

export default Consumption;
