import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App