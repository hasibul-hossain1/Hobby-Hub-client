import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/common/Footer'

function App() {
  return (
    <main>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default App