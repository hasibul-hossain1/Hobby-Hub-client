import { Link, useNavigate } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Footer from '../common/Footer'

function NotFound() {
    const navigate =useNavigate()
  return (
    <>
    <Navbar/>
    <div className="grid pb-10 place-items-center bg-white px-6 lg:px-8">
  <div className="text-center">
    <img src='/404.gif' alt="404" />
    <h1 className=" text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Page not found</h1>
    <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Link to='/' className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
      <button onClick={()=>navigate(-1)} className="cursor-pointer text-sm font-semibold text-gray-900">Go Back <span aria-hidden="true">&rarr;</span></button>
    </div>
  </div>
</div>
<Footer/>
    </>
  )
}

export default NotFound