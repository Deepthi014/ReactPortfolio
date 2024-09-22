import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Education from './Components/Education'
// import Services from './Components/Services'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Skill from './Components/Skill'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Education />
      {/* <Services /> */}
      <Skill/>
      <Project />
      <Contact />
      <Footer />

    </>
  )
}

export default App
