import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App