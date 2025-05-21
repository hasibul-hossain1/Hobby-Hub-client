import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/common/Footer'
import { useUserContext } from './components/contexts/FirebaseContext/UserContext'
import Loading from './components/common/Loading'
import { useEffect } from 'react'

function App() {
   const [user]=useUserContext()
   useEffect(()=>{
    
   })
  return (
    <main>
      <Navbar/>
      {user.userIsLoading?<Loading/>:<Outlet/>}
      <Footer/>
    </main>
  )
}

export default App