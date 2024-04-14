import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import ContactPage from './Pages/ContactPage';

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/ProfilePage' element={<ProfilePage/>}/>
            <Route path='/ContactPage/:city/:age/:number' element={<ContactPage/>}/>
          </Routes>
      </BrowserRouter>  
  );
};

export default App;