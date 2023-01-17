import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
