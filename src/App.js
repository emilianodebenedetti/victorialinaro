import './App.css';
import AppContextProvider from './components/context/AppContext';
import NavBar from './components/NavBarr/NavBar';


function App() {
  return (
    <>
      <AppContextProvider>  
              <NavBar />    
      </AppContextProvider>
    </>
  );
}

export default App;


<>
    <div className='text-center text-black'>
      ¡Envios a todo el país!
    </div>
    <div className="navbar bg-black relative"> 
    <div className="navbar-start">
        <Link to="/" className="navbar-center">
          <h2 className="btn btn-ghost normal-case text-xl text-white">MiTienda</h2>
        </Link>
        <label for="my-drawer" tabIndex="0" className="btn btn-ghost btn-circle text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg> 
        </label> 
        
        <ul tabIndex="0" class=" p-4 w-max bg-black  min-h-full text-base-content">  
          <Link to="/category/Calzas" className="flex-1 nav-link px-8  text-white">
            Calzas
          </Link>
          <Link to="/category/Abrigos" className="flex-1 nav-link px-8 text-white">
            Abrigos
          </Link>
          <Link to="/category/Musculosas&Remeras" className="flex-1 nav-link px-8 text-white">
            Musculosas&Remeras
          </Link>
          <Link to="/category/Tops" className="flex-1 nav-link px-8 text-white">
            Tops
          </Link>
          <Link to="/category/SALE" className="flex-1 nav-link px-8 text-white">
            SALE
          </Link>
          <Link to="/category/Biker&Shorts" className="flex-1 nav-link px-8 text-white">
          Biker&Shorts
          </Link>                
        </ul>
    </div>
    
    <div className="navbar-end text-white">
      {<button className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>}
      <div className="form-control ">
        <input type="text" placeholder="Buscar" className="input input-bordered w-36 md:w-auto" />
      </div>
      <div className="dropdown dropdown-end text-white"> 
        <CartWidget/>      
      </div>
    </div>
  </div>
  </>
