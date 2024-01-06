import './App.css';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Latest from './pages/Latest';
import Shop from './pages/Shop';
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/Latest" element={<Latest />} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
   </BrowserRouter>
   
    
  );
}

export default App;
