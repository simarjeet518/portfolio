import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Projects from './pages/Projects';


function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
