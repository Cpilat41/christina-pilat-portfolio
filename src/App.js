import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Travel from "./Components/Travel";
// import Header from "./Components/Header";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AboutMe />} path="/" />
          <Route
            element={<AboutMe />}
            exact
            path="/christina-pilat-portfolio/"
          />
          <Route element={<Contact />} path="/Contact" />
          <Route element={<Resume />} path="/Resume" />
          <Route element={<Projects />} path="/Projects" />
          <Route element={<Travel />} path="/Travel" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
