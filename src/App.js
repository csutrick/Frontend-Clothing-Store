import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./Components/Navbar/index.js";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/index.js";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
