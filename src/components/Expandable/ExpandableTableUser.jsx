import { useState } from "react";
import { Grid, Loading, Text } from "@nextui-org/react";
import { useFetch } from "../../hooks/useFetch";
import { URL } from "../../utils/constants";
import GeneralCard from "../Cards/GeneralCard";
import GeneralModal from "../Modal/GeneralModal";
import ModalContentDocumentUser from "../ModalContent/ModalContentDocumentUser";

function ExpandableTableUser({ data }) {
  const states = { completed: "Completados", pending: "Pendientes" };
  
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState("");
  const { data: userData, loading } = useFetch(
    `${URL}user/${data.usu_id}/details`
  );

  const handleClickCardCompleted = () => {
    setShowModal(true);
    setState("completed");
  };

  const handleClickCardPending = () => {
    setShowModal(true);
    setState("pending");
  };


  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Grid.Container gap={2} justify="center" alignItems="center">
        <Grid xs={12} sm={6} md={3}>
          <GeneralCard
            title="Name"
            value={`${data.usu_nombre} ${data.usu_apelli}`}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <GeneralCard
            title="Total Documents"
            value={loading ? <Loading /> : userData.total_documents}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <GeneralCard
            title="Completed Documents"
            value={loading ? <Loading /> : userData.completed_documents}
            pressable={true}
            onPress={handleClickCardCompleted}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <GeneralCard
            title="Pending Documents"
            value={loading ? <Loading /> : userData.pending_documents}
            pressable={true}
            onPress={handleClickCardPending}
          />
        </Grid>
      </Grid.Container>
      <GeneralModal
        title={"Documentos " + states[state]}
        size={'900px'}
        component={<ModalContentDocumentUser userId={data.usu_id} state={state} />}
        visible={showModal}
        onClose={closeModal}
      />
    </>
  );
}

export default ExpandableTableUser;
