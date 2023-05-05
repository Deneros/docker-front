import { columnsModalUserDocument } from "../../utils/constants";
import Table from "../Table/Table";

function ModalContentUserDocument({ data }) {
  return (
    <div>
      <Table columns={columnsModalUserDocument} data={data} expandableRows={false} dense={false} />
    </div>
  );
}

export default ModalContentUserDocument;
