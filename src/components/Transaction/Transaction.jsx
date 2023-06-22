import { useState } from "react";
import GeneralCard from "../Cards/GeneralCard";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "@nextui-org/react";
import Table from "../Table/Table";
import { URL, TransactionColumnsFunction } from "../../utils/constants";
import GeneralModal from "../Modal/GeneralModal";
import ModalContentTransaction from "../ModalContent/ModalContentTransaction";

function Transaction({ }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const { data, loading } = useFetch(`${URL}transactions/`);

  const handleClickDocument = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const columns = TransactionColumnsFunction(handleClickDocument);

  return (
    <>
      <div style={{ margin: "0.5rem" }}>

        {loading ? (
          <Loading />
        ) : (
          data && <Table columns={columns} data={data} expandableRows={true} />
        )}

        <GeneralModal
          title={"Imágenes de transacción"}
          size={'900px'}
          component={
            <div style={{ overflowY: 'auto' }}>
              <ModalContentTransaction data={selectedRow} />
            </div>}
          visible={showModal}
          onClose={closeModal}
        />

      </div>
    </>
  );
}

export default Transaction;
