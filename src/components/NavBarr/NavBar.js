import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../footer/Footer'
import ItemDetailContainer from '../Shop/ItemDetail/ItemDetailContainer'
import ItemListContainer from '../Shop/ItemList/ItemListContainer'


export const NavBar = () => {
  return (
    <>
        <div className="drawer ">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
          <div className="drawer-content flex flex-col">
          {/*  <!-- Navbar --> */}
            <div className="w-full navbar bg-lila">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div> 
              <h2 className="flex-1 px-2 mx-2 text-xl text-white">VICTORIA LINARO</h2>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* <!-- Navbar menu content here --> */}
                   <Link to="/" className="nav-link link-hover px-8 py-2 text-white">
                    PROYECTOS
                  </Link>
                  <Link to="/about" className="nav-link link-hover px-8 py-2 text-white">
                    ACERCA DE MI 
                  </Link>             
                  <Link to="/contact" className="nav-link link-hover px-8 py-2 text-white">
                    CONTACTO 
                  </Link>  			
                </ul>
              </div>
            </div>
            {/* <!-- Page content here --> */}  
            <Routes>{/*  HashRouter*/}
                <Route exact path="/" element={<ItemListContainer/>}/>
                <Route 
                  path="/category/:proyectoId" 
                  element={<ItemListContainer />} 
                  />
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>  
          <Footer/>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
            <ul className="menu p-4 overflow-y-auto w-80 bg-lila">
              {/* <!-- Sidebar content here --> */}
              <h2 className="pb-10 px-2 mx-2 text-xl text-white">VICTORIA LINARO</h2>
              <Link to="/" className="nav-link px-8 py-2 text-white link-hover">
                PROYECTOS
              </Link>
              <Link to="/about" className="nav-link px-8 py-2 text-white link-hover">
                ACERCA DE MI 
              </Link>             
              <Link to="/contact" className="nav-link px-8 py-2 text-white link-hover">
                CONTACTO 
              </Link>                             
            </ul>                       
          </div>
        </div>
    </>
       
  )
}

export default NavBar

