import React from "react";
import { Routes, Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
//Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";
import Videos from "./pages/Videos";
import Visitors from "./pages/Visitors";
//Components
import Layout from "./components/Layout";
//Styling
import "./styling/layout.css"

function App() {
  return (
      <>
        <Routes>
          <Route element={<Layout/>}>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="*" element={<PageNotFound />} />          
          </Route>
        </Routes>
      </>
  );
}

export default App;
