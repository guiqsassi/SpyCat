import React from 'react';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom"
import './App.css';
import Login from './Pages/Login/Login';
import LandingPage from './Pages/LandingPage/LandingPage';
import Cadastro from './Pages/Cadastro/Cadastro';
import Home from './Pages/Home/Home';
import AddPet from './Pages/AddPet/AddPet';
import PetsPage from './Pages/Pets/PetsPage';
import Suporte from './Pages/Suporte/Suporte';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}/>
        <Route path='/Cadastro' element={<Cadastro></Cadastro>}/>
        <Route path='/Login' element={<Login></Login>}/>
        <Route path='/Home' element={<Home></Home>}/>
        <Route path='/Pets' element={<PetsPage></PetsPage>}/>
        <Route path='/AddPet' element={<AddPet></AddPet>}/>
        <Route path='/Suporte' element={<Suporte></Suporte>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
