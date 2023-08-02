import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { HomePage } from './home/pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error404 } from './404/pages/Error404';
import { Aboutus } from './about-us/pages/AboutUs';
import { Contacto } from "./contacto/Contacto";
import { Registro } from './auth/registro/pages/Registro';

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <HomePage/>}/>
            <Route path='*' element={ <Error404/>}/>            
            <Route path='/sobre-nosotros' element={ <Aboutus/>}/>
            <Route path='/contacto' element={ <Contacto/> }/>
            <Route path='registro' element={<Registro/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
