import Home from 'components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ScrollToTop from 'ScrollToTop';
import About from 'components/About/About';
import Web from 'components/Web/Web';
import Data from 'components/Data/Data';
import IT from 'components/IT/IT';
import './App.css';
import Navbar from 'components/Home/Navbar/Navbar';
import Project from 'components/Projects/Project';




function App() {
    return <div className='App'>
      <Router>
        <ScrollToTop>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="about" element={<About/>}/>
            <Route path="web" element={<Web/>}/>
            <Route path="data" element={<Data/>}/>
            <Route path="IT" element={<IT/>}/>
            <Route path="project" element={<Project/>}/>
          </Routes>
        </ScrollToTop>
      </Router>
      
    </div>
}

export default App;


