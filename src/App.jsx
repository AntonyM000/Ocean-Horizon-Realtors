import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaRegMap } from 'react-icons/fa'
import { RiMenu4Fill } from 'react-icons/ri'
import { LuHome } from 'react-icons/lu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Paradise from './Pages/Paradise'
import Properties from './Pages/Properties'
import Aboutus from './Pages/Aboutus'
import Whyus from './Pages/Whyus'
import Faq from './Pages/Faq'
import Footer from './Pages/Footer'
import HomeLayout from './Layout/HomeLayout'
import PropertyDetails from './Pages/PropertyDetails'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomeLayout/>}/>
      {/* <Route path='/paradise' element={<Paradise/>}/>
      <Route path='/properties' element={<Properties/>}/>
      <Route path='/about' element={<Aboutus/>}/>
      <Route path='/why' element={<Whyus/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/footer' element={<Footer />}/> */}
       <Route path="/property/:title" element={<PropertyDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
