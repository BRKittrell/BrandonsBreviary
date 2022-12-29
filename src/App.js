import React from "react";
import { Routes, Route} from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";
import Videos from "./pages/Videos";
import Visitors from "./pages/Visitors";
//Components
import Layout from "./components/Layout";
//Styling
import "./styling/about.css"
import "./styling/home.css"
import "./styling/layout.css"
import "./styling/navbar.css"
import "./styling/videos.css"
import "./styling/visitors.css"

function App() {
  return (
      <>
        <Routes>
          <Route element={<Layout/>}>
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
