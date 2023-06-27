import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Aprende from "./pages/Aprende";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Recicla from "./pages/Recicla";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <p>Hola</p>
      <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/aprende" element={<Aprende />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recicla" element={<Recicla />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
