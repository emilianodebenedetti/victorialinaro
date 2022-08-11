import React from 'react'
import { Link } from 'react-router-dom'
import App from '../../App'
import AppContextProvider from '../context/AppContext'
import ItemListContainer from '../Shop/ItemList/ItemListContainer'


export const NavBar = () => {
  return (
    <>
     <div className="navbar bg-lila relative"> 
    <div className="navbar-start">
      <div className="dropdown">
        <label for="my-drawer" tabIndex="0" className="btn btn-ghost btn-circle text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg> 
        </label> 
        <label for="my-drawer" className="drawer-overlay">   
        </label> 
        <ul tabIndex="0" class="menu dropdown-content overflow-y-auto mt-3 p-4 shadow overflow-y-auto w-80 bg-orange w-52 min-h-full text-base-content">   
          <Link to="/about" className="nav-link px-8 py-2 text-black">
          Acerca de mi 
          </Link>             
          <Link to="/contact" className="nav-link px-8 py-2 text-black">
          Contact 
          </Link>  
        </ul>
      </div>
    </div>
    <Link to="/" className="navbar-center">
      <h2 className="btn btn-ghost normal-case text-xl text-white">VICTORIA LINARO</h2>
    </Link>
    <div className="navbar-end text-black">

    </div>
  </div>
    </>
       
  )
}

export default NavBar
