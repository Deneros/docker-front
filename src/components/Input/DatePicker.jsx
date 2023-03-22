import { Input, Spacer } from "@nextui-org/react";

function DatePicker(props) {
    return (
      <>
        <Input
          clearable
          bordered
          id={props.id}
          labelPlaceholder={props.label} 
          type="date"
          onChange={(e)=> props.onDate(e.target.value)}
        />
        <Spacer x={0.5} />
      </>
    );
  }
  
  export default DatePicker;