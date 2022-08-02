
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./Componant/Login/Login";
import Register from "./Componant/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
