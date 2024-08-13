import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./pages/Home/home";
import AnimatedCursor from "react-animated-cursor";
import "./index.css";

function App() {
  return (
    <div>
      <AnimatedCursor
        color="250, 218, 157"
        innerSize={8}
        outerSize={20}
        innerScale={1}
        innerStyle={{
          backgroundColor: "#fada9d",
          mixBlendMode: "exclusion",
        }}
        outerScale={1.3}
        outerAlpha={0}
        outerStyle={{
          backgroundColor: "#fada9d",
          mixBlendMode: "exclusion",
        }}
      />
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
