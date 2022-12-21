import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SingleMovie from './pages/SingleMovie'


function App() {
  return (
    <Router>
    <Routes>
    <Route path='movie/:id' element= {<SingleMovie />}/>
    <Route path='/' element= {<Home />}/>
    </Routes>
    </Router>
  )
}

export default App