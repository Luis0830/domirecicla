import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Aprende from "./components/Aprende";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Recicla from "./components/Recicla";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <p>Hola</p>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/aprende" element={<Aprende />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recicla" element={<Recicla />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
