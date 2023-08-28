import { useContext, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";

import  { PizzeriaContext } from "../PedidosContext/PedidosContext";

const PrivateRoute = ({ children }) => {
  const { getAuth, authenticated, loading,currentUser } = useContext(PizzeriaContext);
  
 
  
  useEffect(() => {
    getAuth();
  }, []);

  if (loading) {
    return <Spinner />;
  } else if (currentUser?.rol === "administrador") {
    return children;
  } else {
    return <Navigate to="/" />;
  }

};

export default PrivateRoute;