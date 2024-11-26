import React from 'react'
import Head from './component/Head'
import LocomotiveScroll from 'locomotive-scroll'

import Nav from './component/Nav'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'
import Footer from './component/Footer'
function App() {const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=''>
      <Nav/> 
      <Head/>
     
      <About/>
      <Skills/>
      {/* <Project/> */}
      <Footer/>
    </div>
    
  )
}

export default App
