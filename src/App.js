import Home from 'components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import About from 'components/About/About';
import Web from 'components/Web/Web';
import Data from 'components/Data/Data';
import IT from 'components/IT/IT';
import './App.css';
// import {gsap, TimelineLite, Power3 } from 'gsap';
// import { useEffect } from "react";

function App() {

  // let tl = new TimeLineLite({ delay: 0.3})
  // useEffect(() => {
  //   tl.from('.hero-text', {y:15, opacity: 0, ease:Power3.easeOut}, 'start')
  // }, [])
    return <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="web" element={<Web/>}/>
        <Route path="data" element={<Data/>}/>
        <Route path="IT" element={<IT/>}/>
      </Routes>
    </div>
}

export default App;


