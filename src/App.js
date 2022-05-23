import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import { Route, Routes } from "react-router-dom";
import Update from "./components/Update";
import Error from "./Error";
// import Createdemo from "./components/Createdemo"
// import "semantic-ui-css/semantic.css";
function App() {
  return (
    <div className="main">
      
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
        {/* <Route exact path="/Createdemo" element={<Createdemo />} /> */}
        <Route path="/update" element={<Update />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
export default App;
