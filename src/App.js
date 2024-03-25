import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <Router>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
