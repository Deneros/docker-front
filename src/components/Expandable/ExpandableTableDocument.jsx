import React from "react";
import { Loading } from "@nextui-org/react";
import { useFetch } from "../../hooks/useFetch";
import { URL } from "../../utils/constants";
import './ExpandableTableDocument.css';

function ExpandableTableDocument({ data }) {
  let name = null;
  let signatories = [];
  const id_doc = data.id_document;
  const sender = data.sender;
  const destinataries = data.destinataries;

  const { data: documentData, loading } = useFetch(URL + `sended/document/${id_doc}`);

  sender.map(user => name = user.name);

  destinataries.forEach(user => {
    signatories.push(user.name);
  });

  if (signatories.includes(name)) {
    name = "N/A";
  }

  signatories = signatories.join(', ');


  const handleDownloadDocument = async (dataRow) => {
    try {
      const response = await fetch(URL + `sended/document/${id_doc}`);
      const data = await response.json();
      const binaryString = window.atob(data.document);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', dataRow.document_name);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownloadCertificate = async () => {
    try {
      const response = await fetch(URL + `sended/document/${id_doc}/certificate`);
      const data = await response.json();
      const binaryString = window.atob(data.document);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Firmacertificado-'+id_doc);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.log(error);
    }
  };

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
        <button type="button" onClick={() => handleDownloadDocument(data)}>Descargar documento</button>
        <button type="button" onClick={handleDownloadCertificate}>Descargar certificado de firma</button>
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