import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Blog from "./Components/Blog";
function App() {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element= {<About/>} />
        <Route path="/work" element= {<Work/>} />
        <Route path="/blog" element= {<Blog/>} />

      </Routes>
    </Router>
  );
}

export default App;
