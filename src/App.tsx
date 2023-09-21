import React from 'react';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom"
import './App.css';
import Login from './Pages/Login/Login';
import LandingPage from './Pages/LandingPage/LandingPage';
import Cadastro from './Pages/Cadastro/Cadastro';
import Home from './Pages/Home/Home';
import PetsPage from './Pages/Pets/PetsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<LandingPage></LandingPage>}/>
        <Route path='/Cadastro' element={<Cadastro></Cadastro>}/>
        <Route path='/Login' element={<Login></Login>}/>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/Pets' element={<PetsPage></PetsPage>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
