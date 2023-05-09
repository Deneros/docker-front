import { useState } from "react";
import GeneralCard from "../Cards/GeneralCard";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "@nextui-org/react";
import Table from "../Table/Table";
import ExpandableTableConsumption from "../Expandable/ExpandableTableConsumption";
import { URL, ConcumptionColumnsFunction } from "../../utils/constants";
import GeneralModal from "../Modal/GeneralModal";

function Consumption({ boughtFirms, usedFirms, totalDocuments }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const { data, loading } = useFetch(`${URL}user/details`);

  const handleClickDocument = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const columns = ConcumptionColumnsFunction(handleClickDocument);

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
          data && <Table columns={columns} data={data} expandableRows={true} />
        )}

        <GeneralModal
          title={"Documentos de usuario"}
          size={'900px'}
          component={
            <div style={{ overflowY: 'auto' }}>
              <ExpandableTableConsumption data={selectedRow} />
            </div>}
          visible={showModal}
          onClose={closeModal}
        />

      </div>
    </>
  );
}

export default Consumption;
