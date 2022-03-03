import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Home />
        <About />
        <Projects />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
