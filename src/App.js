import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
// import Header from "./Components/Header";
import "/christina-pilat-portfolio/styles/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            element={<AboutMe />}
            exact
            path="/christina-pilat-portfolio/"
          />
          <Route element={<Contact />} path="/Contact" />
          <Route element={<Resume />} path="/Resume" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
