import Home from 'components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import About from 'components/About/About';
import Web from 'components/Web/Web';
import Data from 'components/Data/Data';
import IT from 'components/IT/IT';
import './App.css';


function App() {

  
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


