import { Input } from "@nextui-org/react";

 function InputFilter(props) {
  return (
    <>
      <Input
        clearable
        bordered
        labelPlaceholder="Buscar"
        onChange={(e)=> props.onFilter(e.target.value)}
      />
    </>
  );
}

export default InputFilter;