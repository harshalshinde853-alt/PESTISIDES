import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Guides from "./Components/Guides";
import About from "./About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;