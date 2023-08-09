import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { HomePage } from './home/pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error404 } from './404/pages/Error404';
import { Products } from './products/pages/products';
import { Aboutus } from './about-us/pages/AboutUs';
import { Principal } from './admin/pages/Principal';
import { Usuarios } from './admin/pages/Usuarios';
import { Productos } from './admin/pages/Productos';
import { Pedidos } from './admin/pages/Pedidos';
import { Contacto } from './contacto/Contacto';
import { Cart } from './cart/pages/Cart';
import { Registro } from './auth/registro/pages/Registro';
import { Buscar } from './search/pages/Buscar';
import PedidosContext from './PedidosContext/PedidosContext';
import PrivateRoute from './routes/PrivateRoute';

export default function App() {
  return (
    <div>
   
      <BrowserRouter>
      <PedidosContext>
      <Header />
        <Routes>
            <Route path='/' element={ <HomePage/>}/>
            <Route path='*' element={ <Error404/>}/>
            <Route path='/sobre-nosotros' element={ <Aboutus/>}/>
            <Route path='/contacto' element={ <Contacto/> }/>
            <Route path='/admin' element={<PrivateRoute><Principal/></PrivateRoute>  }/>
            <Route path='/admin-usuarios' element={ <PrivateRoute><Usuarios/></PrivateRoute>  }/>
            <Route path='/admin-productos' element={<PrivateRoute><Productos/></PrivateRoute>  }/>
            <Route path='/admin-pedidos' element={<PrivateRoute><Pedidos/></PrivateRoute>  }/>
            <Route path='/admin-principal' element={<PrivateRoute><Principal/> </PrivateRoute> }/>
            <Route path='/cart' element={ <Cart/>}/>
            <Route path='/producto' element={ <Products/> }/>
            <Route path='registro' element={<Registro/>}/>
            <Route path='buscar' element={<Buscar/>}/>
        </Routes>
        </PedidosContext>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
