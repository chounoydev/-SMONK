import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Token from "./components/Token";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
function App() {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-purple-100 to-purple-50">
      <Navbar />
      <Home />
      <About />
      <Features />
      <Token />
      <Roadmap />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
