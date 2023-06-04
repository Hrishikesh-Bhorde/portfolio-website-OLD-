import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import Home from './components/Home/home'
import About from './components/About/about'
import Education from './components/Education/education'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}></Route>
          <Route path="education" element={<Education />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
