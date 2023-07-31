import React from 'react';
import Header from './layout/Header'
import Footer from './layout/Footer'
import { HomePage } from './home/pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error404 } from './404/pages/Error404';
import { Principal } from './admin/pages/Principal';
import { Usuarios } from './admin/pages/Usuarios';

export default function App() {
  return (
    <div>
      <Header />
      {/* <Principal/> */}
      <Usuarios/>
      {/* <BrowserRouter>
        <Routes>
            <Route path='/' element={ <HomePage/>}/>
            <Route path='*' element={ <Error404/>}/>
        </Routes>
      </BrowserRouter> */}
      <Footer />
    </div>
  );
}
