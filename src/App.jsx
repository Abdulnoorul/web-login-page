import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../src/Pages/Login'
import Home from '../src/Pages/Home'
import Signup from '../src/Pages/Signup'

function App() {
  return (
    <>
      
      <div className='main'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/register' element={<Signup />}></Route>
            <Route path='/home' element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
