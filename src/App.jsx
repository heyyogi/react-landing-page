import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner'
import About from './components/About'
import Testinomal from './components/Testinomal'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Banner/>
    <About/>
    <Testinomal/>
    <Footer/>
    </>
  )
}

export default App
