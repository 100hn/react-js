import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Career from './components/Career';
import Home from './components/Home';
import Pitch from './components/Pitch';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route exect path='/' Component={Home}/>
      <Route  path='/about'Component={About}/>
      <Route  path='/portfolio'Component={Portfolio}/>
      <Route  path='/career'Component={Career}/>
      <Route  path='/Pitch'Component={Pitch}/>
     </Routes>
     </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
