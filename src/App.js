import React from "react";
import { Routes, Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
//Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Videos from "./pages/Videos";
//Components
import Layout from "./components/Layout";
//Styling
import "./styling/layout.css"

function App() {
  return (
      <div className="App.js">
      <Layout/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
  );
}

export default App;
