import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Aprende from "./pages/Aprende";
import Login from "./pages/Login";
import Signup from "./components/Signup";
import Recicla from "./pages/Recicla";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import Nosotros from "./pages/Nosotros";

function App() {
  
 

  return (
    <div>
      <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/aprende" element={<Aprende />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/recicla" element={<Recicla />} />
        <Route path="/nosotros" element={<Nosotros />} />
        {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
