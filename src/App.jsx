import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { HomePage } from './home/pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error404 } from './404/pages/Error404';
import { Products } from './products/pages/products';
import { Aboutus } from './about-us/pages/AboutUs';
import { Contacto } from "./contacto/Contacto";
import { Principal } from './admin/pages/Principal';
import { Usuarios } from './admin/pages/Usuarios';
import { Productos } from './admin/pages/Productos';
import { Pedidos } from './admin/pages/Pedidos';
import { Registro } from './auth/registro/pages/Registro';

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <HomePage/>}/>
            <Route path='*' element={ <Error404/>}/>
            <Route path='/producto' element={ <Products/> }/>         
            <Route path='/sobre-nosotros' element={ <Aboutus/>}/>
            <Route path='/contacto' element={ <Contacto/> }/>
            <Route path='/admin' element={ <Principal/> }/>
            <Route path='/admin-usuarios' element={ <Usuarios/> }/>
            <Route path='/admin-productos' element={ <Productos/> }/>
            <Route path='/admin-pedidos' element={ <Pedidos/> }/>
            <Route path='/admin-principal' element={ <Principal/> }/>
            <Route path='registro' element={<Registro/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
