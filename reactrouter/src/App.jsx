import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nopage from "./pages/Nopage";
import Navbar from "./components/Navbar";
import Blog from './pages/Blog'

function App() {

  return (
  <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/blog/:id/:blogname" element={<Blog/>}></Route>
      <Route path="/*" element={<Nopage/>}></Route>
    </Routes>
  </Router>
  </>
  );
}

export default App;
