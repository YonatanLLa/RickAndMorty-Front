import { Route, Routes } from "react-router-dom";
import Home from "./view/home/Home";
import "./App.css";
import About from "./view/about/About";
import NavBar from "./components/navbar/NavBar";
import Landing from "./view/landing/Landing";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
