import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./Components/Container";
import Home from "./Components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Container />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
