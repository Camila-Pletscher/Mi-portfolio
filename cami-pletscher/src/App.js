import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Components/aboutMe/AboutMe";
import Container from "./Components/Container";
import Home from "./Components/home/Home";
import Logros from "./Components/logros/Logros";
import Skills from "./Components/skills/Skills";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/start" element={<Container/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
