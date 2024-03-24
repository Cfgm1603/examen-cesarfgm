import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Page2 from "./pages/Page2.jsx";

function App() {
  return (
    <Router>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
