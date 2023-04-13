export const filterByUser = (data, filterText) => {
  return data.filter((item) => {
    const textFilter = item.usu_nombre && item.usu_apelli ? 
      item.usu_nombre.toLowerCase().includes(filterText.toLowerCase()) ||
      item.usu_apelli.toLowerCase().includes(filterText.toLowerCase()) :true
    return textFilter
  });
};

export const filterByDocument = (
  data,
  startDate,
  finishDate,
  filterText,
  typeDate
) => {
  return data.filter((item) => {
    let filterDate = item.doc_fechac;
    if (typeDate[0] === "Fecha de firmado") {
      filterDate = item.doc_fecha_f;
    }

    const dateFilter =
      startDate && finishDate
        ? filterDate >= startDate && filterDate <= finishDate
        : true;
    const textFilter =
      item.document_name && item.state && item.destinataries
        ? item.document_name.toLowerCase().includes(filterText.toLowerCase()) ||
          item.state.toLowerCase().includes(filterText.toLowerCase()) 
        : true;

    return dateFilter && textFilter;
  });
};

export const filterByTabs = (
  tab,
  data,
  filterText,
  startDate,
  finishDate,
  typeDate
) => {
  if (tab === "usuario") {
    return filterByUser(data, filterText);
  }

  if (tab === "documento") {
    console.log(data);
    return filterByDocument(data, startDate, finishDate, filterText, typeDate);
  }
};
