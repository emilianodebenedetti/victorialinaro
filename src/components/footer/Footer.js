import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>

            <footer className="footer footer-center p-10 bg-lila mt-20 flex-end text-white">


                <div className="grid grid-flow-col gap-4">
                    <Link to="/" className="link link-hover">Inicio</Link> 
                    <Link to="/about"className="link link-hover">Sobre mi</Link> 
                    <Link to="/contact" className="link link-hover">Contáctame</Link> 
                </div> 
                <div>
                    <div className="grid grid-flow-col grid-cols-2 gap-5">
                    <a href='https://www.instagram.com/victorialinaro/' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-8 lg:w-11 h-auto" ><path d="M16,3H8C5.239,3,3,5.239,3,8v8c0,2.761,2.239,5,5,5h8c2.761,0,5-2.239,5-5V8C21,5.239,18.761,3,16,3z M12,17c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S14.761,17,12,17z M18,7c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S18.552,7,18,7z"/><path d="M12 9A3 3 0 1 0 12 15A3 3 0 1 0 12 9Z"/></svg></a> 
                    <a href='https://www.tiktok.com/@victorialinaro' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current w-8 lg:w-12 h-auto" ><path fill="none" stroke-miterlimit="10"  d="M18,20H6c-1.105,0-2-0.895-2-2V6	c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2v12C20,19.105,19.105,20,18,20z"/><path d="M18,4H6C4.895,4,4,4.895,4,6v12c0,1.105,0.895,2,2,2h12c1.105,0,2-0.895,2-2V6C20,4.895,19.105,4,18,4z M16,11	c-0.605,0-1.332-0.266-2-0.715V14c0,1.654-1.346,3-3,3s-3-1.346-3-3s1.346-3,3-3v2c-0.552,0-1,0.449-1,1s0.448,1,1,1s1-0.449,1-1V7	h2c0,1.005,1.471,2,2,2V11z"/></svg></a>                     
                    </div>
                </div> 
                <div>
                    <p>Copyright © 2022 - Todos los derechos reservados</p>
                </div>
            </footer>
    </>
  )
}

export default Footer