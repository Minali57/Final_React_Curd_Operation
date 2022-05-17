import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import { Route, Routes } from "react-router-dom";
import Update from "./components/Update";

function App() {
  return (
    <div className="main">
      <div>
        <h3>React Crud Operations</h3>
      </div>
      <Routes>
        <Route exact path="/" element={<Create />} />

        <Route exact path="/read" element={<Read />} />

        <Route path="/update" element={<Update />} />
      </Routes>
    </div>
  );
}
export default App;
