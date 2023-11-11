import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./view/home/Home";
import About from "./view/about/About";
import NavBar from "./components/navbar/NavBar";
import Landing from "./view/landing/Landing";
import { Favorite } from "./view/favorite/Favorite";
import { Detail } from "./view/detail/Detail";

function App() {

  const location = useLocation()
    
  return (
    <div >
      {
        location.pathname !== "/" && <NavBar/> 
      }
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
