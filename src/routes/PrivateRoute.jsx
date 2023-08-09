import { useContext, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";

import  { PizzeriaContext } from "../PedidosContext/PedidosContext";

const PrivateRoute = ({ children }) => {
  const { getAuth, authenticated, loading } = useContext(PizzeriaContext);

  useEffect(() => {
    getAuth();
  }, []);

  return loading ? (
    <Spinner />
  ) : authenticated ? (
    children
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;