export const URL =
  process.env.NODE_ENV === "production"
    ? `${process.env.BASE_URL}/api/`
    : "http://localhost:8080/api/";

export const Endpoints = {
  usuario: "http://localhost:8080/api/user",
  documento: "http://localhost:8080/api/document",
  consumo: "http://localhost:8080/api/product",
  transacciones: "http://localhost:8080/api/transactions",
};

// export const columns = {
//   usuario: [
//     {
//       name: "Nombre",
//       selector: (row) => row.usu_nombre + " " + row.usu_apelli,
//       sortable: true,
//     },
//     {
//       name: "Documento",
//       selector: (row) => row.usu_tipo_documento + " " + row.usu_docume,
//       sortable: true,
//     },
//     {
//       name: "Correo",
//       selector: (row) => row.usu_email,
//       sortable: true,
//     },
//     {
//       name: "Celular",
//       selector: (row) => row.usu_celula,
//     },
//     {
//       name: "Rol",
//       selector: (row) =>
//         row.nombre_rol === "Funcionario Emcali" ? "Usuario" : row.nombre_rol,
//       sortable: true,
//     },
//     {
//       name: "Certificado",
//       cell: () => (
//         <h2 style={{ color: "#FF0000", cursor: "pointer" }} title="Descargar">
//           <BsFillFileEarmarkPdfFill />
//         </h2>
//       ),
//     },
//   ],
//   documento: [
//     {
//       name: "Nombre",
//       selector: (row) => row.document_name,
//       sortable: true,
//     },
//     {
//       name: "Estado",
//       selector: (row) => row.state,
//       sortable: true,
//     },
//     {
//       name: "Fecha creacion",
//       selector: (row) => row.send_date + " " + row.send_hour,
//       sortable: true,
//     },
//     {
//       name: "Fecha Firma",
//       selector: (row) =>
//         row.sign_date && row.sign_hour
//           ? row.sign_date + " " + row.sign_hour
//           : "- -",
//     },
//     {
//       name: "Acciones",
//       cell: () => (
//         <h2 style={{ color: "#FF0000", cursor: "pointer" }} title="Descargar">
//           <BsFillFileEarmarkPdfFill />
//         </h2>
//       ),
//     },
//   ],
//   consumo: [
//     {
//       name: "Firmas compradas",
//       selector: (row) => row.bought_firms,
//       sortable: true,
//     },
//     {
//       name: "Firmas Usadas",
//       selector: (row) => row.used_firms,
//       sortable: true,
//     },
//   ],
//   transacciones: [
//     {
//       name: "Record",
//       selector: (row) => row.Record,
//       sortable: true,
//     },
//     {
//       name: "Fecha registro",
//       selector: (row) => row.StartingDate,
//       sortable: true,
//     },
//     {
//       name: "Cedula",
//       selector: (row) => row.IdNumber,
//       sortable: true,
//     },
//     {
//       name: "Nombre",
//       selector: (row) =>
//         row.FirstName + " " + row.FirstSurname + " " + row.SecondSurname,
//       sortable: true,
//     },
//     {
//       name: "Lugar de Nacimiento",
//       selector: (row) => row.PlaceBirth,
//       sortable: true,
//     },
//     {
//       name: "Tipo transaccion",
//       selector: (row) => row.TransactionTypeName,
//       sortable: true,
//     },
//   ],
// };
