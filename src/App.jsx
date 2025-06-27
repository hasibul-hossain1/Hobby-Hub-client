import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/common/Footer'
import { useUserContext } from './components/contexts/FirebaseContext/UserContext'
import Loading from './components/common/Loading'
import { Toaster } from 'react-hot-toast'

function App() {
   const [user]=useUserContext()
  return (
    <main>
      <Navbar/>
      <div className='min-h-[50vh]'>
      {user.userIsLoading?<Loading/>:<Outlet/>}
      </div>
      <Footer/>
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  )
}

export default App