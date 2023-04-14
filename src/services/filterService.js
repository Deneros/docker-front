export const filterByUser = (data, filterText) => {
  return data.filter((item) => {
    const textFilter =
      item.usu_nombre && item.usu_apelli
        ? item.usu_nombre.toLowerCase().includes(filterText.toLowerCase()) ||
          item.usu_apelli.toLowerCase().includes(filterText.toLowerCase())
        : true;
    return textFilter;
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
          item.state.toLowerCase().includes(filterText.toLowerCase()) ||
          item.destinataries.some((user) => {
            return user.name.toLowerCase().includes(filterText.toLowerCase());
          })
        : true;

    return dateFilter && textFilter;
  });
};

export const filterByTransactions = (data, filterText) => {
  return data.filter((item) => {
    const idFilter = item.IdNumber
      ? item.IdNumber.toLowerCase().includes(filterText.toLowerCase())
      : true;
    const nameFilter =
      item.FirstName && item.FirstSurname && item.SecondSurname
        ? item.FirstName.toLowerCase().includes(filterText.toLowerCase()) ||
          item.FirstSurname.toLowerCase().includes(filterText.toLowerCase()) ||
          item.SecondSurname.toLowerCase().includes(filterText.toLowerCase())
        : true;
    const transactionTypeFilter = item.TransactionTypeName
      ? item.TransactionTypeName.toLowerCase().includes(
          filterText.toLowerCase()
        )
      : true;

    return idFilter || nameFilter || transactionTypeFilter;
  });
};

export const filterByConsumption = (data, filterText) => {
  return data.filter((item) => {
    const boughtFilter = item.bought_firms
      ? item.bought_firms.toString().includes(filterText)
      : true;
    const usedFilter = item.used_firms
      ? item.used_firms.toString().includes(filterText)
      : true;

    return boughtFilter || usedFilter;
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
    return filterByDocument(data, startDate, finishDate, filterText, typeDate);
  }

  if (tab === "consumo") {
    return filterByConsumption(data, filterText);
  }

  if (tab === "transacciones") {
    return filterByTransactions(data, filterText);
  }
};
