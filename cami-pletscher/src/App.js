import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/aboutMe/AboutMe';
import Home from './Components/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about_me' element={<AboutMe/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
