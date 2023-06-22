import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";

export const URL =
  process.env.NODE_ENV === "production"
    ? `${process.env.BASE_URL}/api/`
    : "http://localhost:8000/api/";

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
    }
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


export const ConcumptionColumnsFunction = (callback) => [
  {
    name: "Nombre",
    selector: (row) => row.user_name,
    sortable: true,
  },
  {
    name: "Cantidad",
    selector: (row) => row.signed_documents_count,
    sortable: true,
  },
  {
    name: "Documentos",
    cell: (row) => (
      <h2
        style={{ color: "#00000", cursor: "pointer" }}
        title="Mostrar Documentos"
        onClick={()=>callback(row)}
      >
        <AiOutlineUnorderedList />
      </h2>
    ),
  },
];

export const TransactionColumnsFunction = (callback) => [
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
    name: "Cédula",
    selector: (row) => row.IdNumber,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row) => `${row.FirstName} ${row.SecondName} ${row.FirstSurname} ${row.SecondSurname}`,
    sortable: true,
  },
  {
    name: "Lugar de Nacimiento",
    selector: (row) => row.PlaceBirth,
    sortable: true,
  },
  {
    name: "Tipo Transacción",
    selector: (row) => row.TransactionTypeName,
    sortable: true,
  },
  {
    name: "Imágenes",
    cell: (row) => (
      <h2
        style={{ color: "#00000", cursor: "pointer" }}
        title="Mostrar Imágenes"
        onClick={()=>callback(row)}
      >
        <AiOutlineUnorderedList />
      </h2>
    ),
  },
];

export const TABS = {
  USER: "user",
  DOCUMENT: "document",
  CONSUMPTION: "consumption",
  TRANSACTION: "transactions",
  REPORTS: "reports"
};


// {
//   name: "Certificado",
//   cell: () => (
//     <h2 style={{ color: "#FF0000", cursor: "pointer" }} title="Descargar">
//       <BsFillFileEarmarkPdfFill />
//     </h2>
//   ),
// },