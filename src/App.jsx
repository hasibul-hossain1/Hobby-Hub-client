import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/common/Footer'
import { useUserContext } from './components/contexts/FirebaseContext/UserContext'
import Loading from './components/common/Loading'

function App() {
   const [user]=useUserContext()
  return (
    <main>
      <Navbar/>
      {user.userIsLoading?<Loading/>:<Outlet/>}
      <Footer/>
    </main>
  )
}

export default App