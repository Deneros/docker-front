import React from "react";
import { Loading } from "@nextui-org/react";
import { useFetch } from "../../hooks/useFetch";
import './ExpandableTableDocument.css';

function ExpandableTableDocument({ data }) {
  let name = null;
  let signatories = [];
  const id_doc = data.id_document;
  const sender = data.sender;
  const destinataries = data.destinataries;
  const { data: documentData, loading } = useFetch(`http://localhost:8080/api/sended/document/${id_doc}`);

  sender.map(user => name = user.name);
  destinataries.map(user => signatories.push(user.name));
  signatories = signatories.join(', ');

  return (
    <div className="document-container">
      <div className="data">
        <p>Resumen</p>
        <div>
          <p>Remitente</p>
          <p>{name}</p>
        </div>
        <div>
          <p>Firmantes</p>
          <p className="signatories">{signatories}</p>
        </div>
        <button type="button">Descargar documento</button>
        <button type="button">Descargar certificado de firma</button>
      </div>
      <div className="object-container">
        {loading ? (
          <Loading size="xl" />
        ) : (
          <object
            data={`data:application/pdf;base64,${documentData.document}#toolbar=0&navpanes=0&scrollbar=0`}
          ></object>
        )}
      </div>
    </div>
  );
}

export default ExpandableTableDocument;