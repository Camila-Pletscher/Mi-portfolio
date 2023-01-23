import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/aboutMe/AboutMe';
import Home from './Components/home/Home';
import Logros from './Components/logros/Logros';
import Skills from './Components/skills/Skills';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about_me' element={<AboutMe/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/logros' element={<Logros/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
