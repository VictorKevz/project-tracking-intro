import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <main className="outer-container">
      <div className="header-bg"></div>
      <div className="inner-container">
        <Navbar/>
        <Hero/>
      </div>
      <Footer/>
    </main>
  );
}

export default App;