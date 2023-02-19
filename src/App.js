// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Components/Create';
// import Datatable from "./Components/Datatable";
import Read from './Components/Read';
import Update from "./Components/Update";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Read />}></Route>
            <Route exact path="/create" element={<Create />}></Route>
            <Route exact path="/update" element={<Update />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
