import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
      
    <div className='background-image: url(../../assets/img/html.jpg);' >
        <NavBar/>
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home