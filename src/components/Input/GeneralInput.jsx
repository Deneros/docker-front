import React from "react";
import { Input, Spacer } from "@nextui-org/react";

function GeneralInput({ id, label, type, onChange, placeholder, onClear }) {
  return (
    <>
      <Input
        clearable
        bordered
        id={id}
        labelPlaceholder={label}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onClear={onClear}
      />
      <Spacer x={0.5} />
    </>
  );
}

export default GeneralInput;
