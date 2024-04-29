import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductListPage from './Pages/ProductListPage';
import LoginPage from './Pages/LoginPage';
import CardListPage from './Pages/CardListPage';
import VerifyPage from './Pages/VerifyPage';
import NotFoundPage from './Pages/NotFoundPage';

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProductListPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/cart-list' element={<CardListPage/>}/>
            <Route path='/verify' element={<VerifyPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
      </BrowserRouter>
  );
};

export default App;