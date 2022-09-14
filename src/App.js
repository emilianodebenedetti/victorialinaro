import { BrowserRouter, } from 'react-router-dom';
import './App.css';
import AppContextProvider from './components/context/AppContext';
import NavBar from './components/NavBarr/NavBar';


function App() {
  return (
    <>
      <AppContextProvider>
          <BrowserRouter>
            <NavBar />
              {/* <Routes>
                <Route exact path="/" element={<ItemListContainer/>}/>
                <Route 
                  path="/category/:proyectoId" 
                  element={<ItemListContainer />} 
                />
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
            <Footer/> */}
          </BrowserRouter>
      </AppContextProvider>
    </>
  );
}

export default App;
