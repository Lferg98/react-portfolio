import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} /> 
          <Route path ="contact" element={<Contact />} />
          <Route path ="resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
    
}

export default App;
