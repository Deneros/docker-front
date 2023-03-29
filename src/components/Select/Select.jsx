import React from "react";
import { Dropdown, Text, Spacer } from "@nextui-org/react";

function Select(props) {
  const [selected, setSelected] = React.useState(new Set(["Seleccione una fecha"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const handleSelectionChange = (newSelection) => {
    setSelected(newSelection);
    props.onSelect(Array.from(newSelection));
  };

  return (
    <>
      <Dropdown >
        <Dropdown.Button light bordered color="default" css={{ tt: "capitalize" }}>
          {selectedValue}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label="Single selection actions"
          color="default"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={handleSelectionChange}
        >
          <Dropdown.Item key="Seleccione una fecha">Seleccione una fecha</Dropdown.Item>
          <Dropdown.Item key="Fecha de envio">Fecha de envio</Dropdown.Item>
          <Dropdown.Item key="Fecha de firmado">Fecha de firmado</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Spacer x={0.5} />
    </>
  );
}

export default Select;
