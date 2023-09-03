import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Navbar/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contacts/Contact';
import Footer from "./components/Footer/Footer";
import Projects from './components/Portfolio/Projects';
import Skills from './components/Portfolio/Skills';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home title="Home" />} />
        <Route path="/portfolio" element={<Portfolio title="Portfolio" />} />
        <Route path='projects' element = {<Projects title= "Projects" />} />
        <Route path='skills' element = {<Skills title = "Skills" />} />
        <Route path="/about" element={<About title="About" />} />
        <Route path="/contact" element={<Contact title="Contact" />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
