import "./App.css";
import DataTable from "react-data-table-component";
import Navbar from "./pages/layout/Navbar/Navbar";

const data = [
  {
    id: 1,
    name: "Nicolas Velez",
    age: 12,
  },
  {
    id: 2,
    name: "Nicolas Velez",
    age: 12,
  },
  {
    id: 3,
    name: "Nicolas Velez",
    age: 12,
  },
];

const columns = [
  {
    name: "NAME",
    selector: (row) => row.name,
  },
  {
    name: "NAME",
    selector: (row) => row.age,
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <DataTable
        columns={columns}
        data = {data}
      />
    </div>
  );
}

export default App;
