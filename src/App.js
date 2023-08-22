import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import Home from './components/Home/home'
import About from './components/About/about'
import Education from './components/Education/education'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import AboutPage from './components/AboutPage/AboutPage'
import Project from './components/Projects-new/Project'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home btntxt="Contact Me" />} />
          <Route path="about2" element={<About />}></Route>
          <Route path="education" element={<Education />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="project" element={<Project />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
