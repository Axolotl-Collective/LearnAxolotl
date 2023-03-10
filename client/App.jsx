import React, {useState, useEffect} from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import Login from "./components/Login.jsx";
import MainGame from "./components/GameContainer.jsx";
import Signup from "./components/Signup.jsx";

const App = () => {
  // const [isVerified, setIsVerified] = useState(false);

  // useEffect(() => {
  //   fetch('/user').then(res => res.json()).then(data => setIsVerified(data)).catch(err => console.log(err));
  // })

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/game" element={<MainGame />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
