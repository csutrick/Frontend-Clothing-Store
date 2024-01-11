import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./Components/Navbar/index.js";
import Home from "./Pages/Home.js";
import Footer from "./Components/Footer/index.js";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <Router>
      <div className="">
        <Navbar 
          setSearchResults={setSearchResults}
        />
          <Routes>
            <Route 
              path="/" element={<Home 
              />}
            />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
