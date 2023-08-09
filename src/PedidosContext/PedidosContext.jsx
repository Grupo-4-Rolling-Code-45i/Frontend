import React, { createContext, useState } from 'react'
// import { toast } from 'react-toastify';
import reactToMyPizzaAPI from '../api/ReactToMyPizzaAPI';

export const PizzeriaContext = createContext();

const PedidosContext = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);


    const login = async (values) => {
       
        try {
          const { data } = await reactToMyPizzaAPI.post("/api/auth/login", values);
          console.log(data);
          setAuthenticated(!!data.usuario);
          setCurrentUser(data.usuario);
          reactToMyPizzaAPI.defaults.headers.common["Authorization"] = data.token;
          localStorage.setItem("token", data.token);
        } catch (error) {
        //   toast.error(error.response?.data.message || error.message)
        }
    
      };
    
      const getAuth = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            setLoading(false);
            return setAuthenticated(false);
          }
          reactToMyPizzaAPI.defaults.headers.common["Authorization"] = token;
          const { data } = await reactToMyPizzaAPI.get("/api/users/authStatus");
          console.log(data);
          setCurrentUser(data.user);
          setAuthenticated(true);
        } catch (error) {
          setAuthenticated(false)
        //   toast.error("Error de autenticación. Ingrese nuevamente");
        }
        setLoading(false);
      };

    return (
        <PizzeriaContext.Provider
          value={{
            currentUser,
            authenticated,
            setAuthenticated,
            loading,
            login,
            getAuth
          }}>
          {children}
        </PizzeriaContext.Provider>
      );
}

export default PedidosContext