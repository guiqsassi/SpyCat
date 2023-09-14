import React from 'react';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom"
import './App.css';
import Login from './Pages/Login/Login';
import LandingPage from './Pages/LandingPage/LandingPage';
import Cadastro from './Pages/Cadastro/Cadastro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}/>
        <Route path='/Cadastro' element={<Cadastro></Cadastro>}/>
        <Route path='/Login' element={<Login></Login>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
