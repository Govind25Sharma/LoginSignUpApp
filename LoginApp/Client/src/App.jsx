import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navigate } from "react-router-dom";
import Welcome from "./components/welcome/Welcome.jsx"
import SignUp from "./components/signUp/SignUp.jsx"
import LoginIn from "./components/loginIn/LoginIn.jsx"
import Home from "./components/homePage/Home.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path='/welcome' element={<Welcome />}></Route>
        <Route path='/register' element={<SignUp />}></Route>
        <Route path='/login' element={<LoginIn />}></Route>
        <Route path='/Home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
