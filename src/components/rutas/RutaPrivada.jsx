import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import authContext from "../../context/autenticacion/authContext";

const RutaPrivada = ({ children }) => {
  const AuthContext = useContext(authContext);
  const { autenticado, cargando } = AuthContext;

  return autenticado ? children : <Navigate to="/" />;
};

export default RutaPrivada;
