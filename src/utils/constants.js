import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

export const URL =   
  process.env.NODE_ENV === "production"
    ? `${process.env.BASE_URL}/api/`
    : "http://localhost:8080/api/";

export const tableUrl = {
  user: URL + "user",
  document: URL + "document",
  consumption: URL + "product",
  transactions: URL + "transactions",
};

export const columns = {
  user: [
    {
      name: "Nombre",
      selector: (row) => row.usu_nombre + " " + row.usu_apelli,
      sortable: true,
    },
    {
      name: "Documento",
      selector: (row) => row.usu_tipo_documento + " " + row.usu_docume,
      sortable: true,
    },
    {
      name: "Correo",
      selector: (row) => row.usu_email,
      sortable: true,
    },
    {
      name: "Celular",
      selector: (row) => row.usu_celula,
    },
    {
      name: "Rol",
      selector: (row) =>
        row.nombre_rol === "Funcionario Emcali" ? "user" : row.nombre_rol,
      sortable: true,
    },
    {
      name: "Certificado",
      cell: () => (
        <h2 style={{ color: "#FF0000", cursor: "pointer" }} title="Descargar">
          <BsFillFileEarmarkPdfFill />
        </h2>
      ),
    },
  ],
  document: [
    {
      name: "Nombre",
      selector: (row) => row.document_name,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Fecha creacion",
      selector: (row) => row.send_date + " " + row.send_hour,
      sortable: true,
    },
    {
      name: "Fecha Firma",
      selector: (row) =>
        row.sign_date && row.sign_hour
          ? row.sign_date + " " + row.sign_hour
          : "- -",
    },
    {
      name: "Acciones",
      cell: () => (
        <h2 style={{ color: "#FF0000", cursor: "pointer" }} title="Descargar">
          <BsFillFileEarmarkPdfFill />
        </h2>
      ),
    },
  ],
  consumption: [
    {
      name: "Firmas compradas",
      selector: (row) => row.bought_firms,
      sortable: true,
    },
    {
      name: "Firmas Usadas",
      selector: (row) => row.used_firms,
      sortable: true,
    },
  ],
  transactions: [
    {
      name: "Record",
      selector: (row) => row.Record,
      sortable: true,
    },
    {
      name: "Fecha registro",
      selector: (row) => row.StartingDate,
      sortable: true,
    },
    {
      name: "Cedula",
      selector: (row) => row.IdNumber,
      sortable: true,
    },
    {
      name: "Nombre",
      selector: (row) =>
        row.FirstName + " " + row.FirstSurname + " " + row.SecondSurname,
      sortable: true,
    },
    {
      name: "Lugar de Nacimiento",
      selector: (row) => row.PlaceBirth,
      sortable: true,
    },
    {
      name: "Tipo transaccion",
      selector: (row) => row.TransactionTypeName,
      sortable: true,
    },
  ],
};

export const columnsModal = {
  completed: [
    {
      name: "Nombre",
      selector: (row) => row.document_name,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Fecha Firma",
      selector: (row) => row.sign_date + " " + row.sign_hour,
      sortable: true,
    },
    {
      name: "Destinatarios",
      selector: (row) => row.destinataries,
      sortable: true,
    },
  ],
  pending: [
    {
      name: "Nombre",
      selector: (row) => row.document_name,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Fecha Envio",
      selector: (row) => row.send_date + " " + row.send_hour,
      sortable: true,
    },
    {
      name: "Destinatarios",
      selector: (row) => row.destinataries,
      sortable: true,
    },
  ],
};

export const TABS = {
  USER: "user",
  DOCUMENT: "document",
  CONSUMPTION: "consumption",
  TRANSACTION: "transactions",
};
