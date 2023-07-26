import React from 'react';
import Header from './layout/Header'
import { HomePage } from './home/pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <HomePage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}