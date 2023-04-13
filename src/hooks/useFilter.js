import { useState } from "react";

export function useFilter(initialTab) {
  const [filterText, setFilterText] = useState("");
  const [typeDate, setTypeDate] = useState(new Set(["Seleccione una fecha"]));
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);

  return {
    filterText,
    setFilterText,
    typeDate,
    setTypeDate,
    startDate,
    setStartDate,
    finishDate,
    setFinishDate,
  };
}
