import { useState, useEffect } from "react";
import GeneralCard from "../Cards/GeneralCard";
import { useFetch } from "../../hooks/useFetch";
import GeneralModal from "../Modal/GeneralModal";
import { Loading } from "@nextui-org/react";
import ModalContentUserDocument from "../ModalContent/ModalContentUserDocument";
import { URL } from "../../utils/constants";

function Consumption({ boughtFirms, usedFirms, totalDocuments }) {
  const [showModal, setShowModal] = useState(false);
  const { data, loading } = useFetch(`${URL}user/details`);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClickCard = () => {
    setShowModal(true);
  };


  useEffect(() => {
    console.log(data);
  }, [data]);

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
          pressable={true}
          onPress={handleClickCard}
        />
      </div>
      <GeneralModal
        title="Cantidad de documentos firmados por usuarios"
        component={loading ? <Loading /> : <ModalContentUserDocument  data={data} />}
        visible={showModal}
        onClose={closeModal}
      />
      {/* <GeneralCard title="Firmas compradas" value={boughtFirms} />
        <GeneralCard title="Firmas Restantes" value={usedFirms} /> */}
    </>
  );
}

export default Consumption;
