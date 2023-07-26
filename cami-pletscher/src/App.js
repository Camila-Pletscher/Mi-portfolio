import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./Components/Container";
import Home from "./Components/home/Home";
import HomeEn from "./Components/home/HomeEn";
import ContainerEn from "./Components/ContainerEn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Container />}></Route>
      </Routes>
      <Routes>
        <Route path="/HomeEn" element={<HomeEn />} />
        <Route path="/startEn" element={<ContainerEn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
