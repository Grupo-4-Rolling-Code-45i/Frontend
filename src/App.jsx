import React from 'react';
import Header from './layout/Header'
import { HomePage } from './home/pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Error404 } from './404/pages/Error404';
import { Aboutus } from './about-us/pages/AboutUs';


export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <HomePage/>}/>
            <Route path='*' element={ <Error404/>}/>            
            <Route path='/sobre-nosotros' element={ <Aboutus/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
