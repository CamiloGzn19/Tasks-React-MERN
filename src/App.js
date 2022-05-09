import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";
import ProyectoState from "./context/proyectos/proyectoState";

function App() {
  return (
    <ProyectoState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/nueva-cuenta" element={<NuevaCuenta />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      </BrowserRouter>
    </ProyectoState>
  );
}

export default App;
