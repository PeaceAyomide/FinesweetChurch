import React from 'react'
import Navbar from './Navbar'
import AHome from './pages/AHome.jsx'
import AAboutus from './pages/Aboutus/AAboutus.jsx'
import ASermons from './pages/Sermons/ASermons.jsx'
import ABlogpost from './pages/Blogpost/ABlogpost.jsx'
import AContact from './pages/Contact/AContact.jsx'
import Footer from './pages/Footer'
import ScrollToTop from './ScrollToTop.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
    <Route path="/" element={ <AHome/>} />
    <Route path="/aboutus" element={ <AAboutus/>} />
    <Route path="/sermons" element={ <ASermons/>} />
    <Route path="/blogpost" element={ <ABlogpost/>} />
    <Route path="/contact" element={ <AContact/>} />
     </Routes>
      <Footer/>
    </Router>
  )
}

export default App