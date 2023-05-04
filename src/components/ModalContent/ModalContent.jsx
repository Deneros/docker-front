import { useEffect } from "react"
import { useFetch } from "../../hooks/useFetch";
import { URL, columnsModal } from "../../utils/constants";
import DataTable from "react-data-table-component";
import { Loading } from "@nextui-org/react";


function ModalContent({ userId, state }) {
  const { data: userDocuments, loading } = useFetch(
    `${URL}user/${userId}/documents/${state}`
  );

  // useEffect(() => {
  //   console.log(userDocuments);
  // }, [userDocuments]);

  return (
    <div style={{overflowY:"auto"}}>
      {loading ? (
        <Loading />
      ) : (
        <DataTable
          columns={columnsModal[state]}
          data={userDocuments}
          expandableRows={false}
        />
      )}
    </div>
  );
}

export default ModalContent;