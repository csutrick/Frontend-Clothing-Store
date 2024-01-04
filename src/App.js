import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./Components/Navbar/index.js";
import Home from "./Pages/Home.js";
import Footer from "./Components/Footer/index.js";

import SearchProducts from "./util/searchProducts.js";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    SearchProducts()
      .then(data => {
        setSearchResults(data);
      })
        .catch(error => {
      });
  }, [searchTerm]);

  return (
    <Router>
      <div className="">
        <Navbar 
          setSearchTerm={setSearchTerm}
        />
          <Routes>
            <Route 
              path="/" element={<Home 
              searchResults={searchResults}/>}
            />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
