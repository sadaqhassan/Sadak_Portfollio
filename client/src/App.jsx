import React from 'react'
import Nav from './Components/Nav'
import Main from './Components/Main'
import { Routes } from 'react-router-dom'
import { Route } from 'lucide-react'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <Nav/>

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App