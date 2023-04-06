import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./Components/Container";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
