import { useFetch } from "../../hooks/useFetch";
import { URL, columnsModal } from "../../utils/constants";
import Table from '../Table/Table'
import { Loading } from "@nextui-org/react";


function ModalContentDocumentUser({ userId, state }) {
  const { data, loading } = useFetch(
    `${URL}user/${userId}/documents/${state}`
  );


  return (
    <div style={{overflowY:"auto"}}>
      {loading ? (
        <Loading />
      ) : (
        <Table
          columns={columnsModal[state]}
          data={data}
          expandableRows={false}
        />
      )}
    </div>
  );
}

export default ModalContentDocumentUser;