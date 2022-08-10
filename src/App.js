import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import AppContextProvider from './components/context/AppContext';
import Footer from './components/footer/Footer';
import NavBar from './components/NavBarr/NavBar';
import ItemDetailContainer from './components/Shop/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/Shop/ItemList/ItemListContainer';



function App() {
  return (
    <>
      <AppContextProvider>
          <BrowserRouter>
            <NavBar />
              <Routes>
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
          </BrowserRouter>
      </AppContextProvider>
    </>
  );
}

export default App;
