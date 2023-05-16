import { useState } from "react";
import { Grid, Loading, Text } from "@nextui-org/react";
import { useFetch } from "../../hooks/useFetch";
import { URL } from "../../utils/constants";
import GeneralCard from "../Cards/GeneralCard";
import GeneralModal from "../Modal/GeneralModal";
import ModalContentDocumentUser from "../ModalContent/ModalContentDocumentUser";
import logo from "../../assets/images/perfil.png";
import total from "../../assets/images/total-documentos.png";
import completados from "../../assets/images/documentos-completado.png";
import pendientes from "../../assets/images/documentos-pendientes.png";
import "./ExpandableTableUser.css";

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
      <Grid.Container className="grid-container">
        <div>
          <img className="icono" src={logo} />
        </div>

        <div className="user-data">
          <p>Resumen</p>
          <p>Nombre: {`${data.usu_nombre} ${data.usu_apelli}`}</p>
          <p>Plan Actual: 2000 firmas</p>
        </div>

        <hr className="separator" />
        
        <div className="user-signature">
          <p><img src={total} /> Total de documentos: <span>{loading ? <Loading /> : userData.total_documents}</span></p>
          <p><img src={completados} /> Documentos completados: <span>{loading ? <Loading /> : userData.completed_documents}</span></p>
          <p><img src={pendientes} /> Documentos pendientes: <span>{loading ? <Loading /> : userData.pending_documents}</span></p>
        </div>
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
