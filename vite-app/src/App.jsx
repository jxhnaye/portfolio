import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Navbar from "./components/navBar";
import ParticlesComponent from './particles.jsx'

function App() {

  const location = useLocation();
  console.log(location)

  const renderParticles = location.pathname === '/';
  return (
    <div className="App">
      {/* Particles */}
      {
        renderParticles && (
        <ParticlesComponent id='particles'/>
      )}

      {/* Navbar */}
      <Navbar />

      {/* Main page content */}
      <div className="App_main-page-content"></div>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;