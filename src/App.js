import Home from 'components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import About from 'components/About/About';
import Web from 'components/Web/Web';
import Data from 'components/Data/Data';
import IT from 'components/IT/IT';
import './App.css';
import Navbar from 'components/Home/Navbar/Navbar';




function App() {
    return <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}/>
        <Route path="web" element={<Web/>}/>
        <Route path="data" element={<Data/>}/>
        <Route path="IT" element={<IT/>}/>
      </Routes>
    </div>
}

export default App;


