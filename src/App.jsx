import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Courses from './components/Courses'
import WhyChooseUs from './components/WhyChooseUs'
import Results from './components/Results'
import Footer from './components/Footer'
import Batches from './components/Batches'
import Faculty from './components/Faculty'
import WhatsAppButton from './components/WhatsAppButton'
import Admission from './components/Admission'
import Contact from './components/Contact'
import Demo from './components/Demo'
import ScrollToTop from "./components/ScrollToTop";
function App() {
  

  return (
    <>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/why-us" element={<WhyChooseUs />} />
        <Route path="/results" element={<Results />} />
        <Route path="/batches" element={<Batches />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      <WhatsAppButton/>
      <ScrollToTop />
      <Footer/>
    </>
    
  )
}

export default App
