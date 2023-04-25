import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} /> 
          <Route path ="contact" element={<Contact />} />
          <Route path ="resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
    
}

export default App;
