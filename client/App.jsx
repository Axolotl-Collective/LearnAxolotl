import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import Login from "./components/Login.jsx";
import MainGame from "./components/MainGame.jsx";

const App = () => {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path ='/login' element={<Login />}></Route>
        <Route path ='/game' element={<MainGame />}></Route>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;