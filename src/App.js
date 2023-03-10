import React from "react";
import { Routes, Route} from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import JustForLaughs from "./pages/Laugh";
import PageNotFound from "./pages/PageNotFound";
import Play from "./pages/Play";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
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
import "./styling/resume.css"
import "./styling/construction.css"
import "./styling/laugh.css"
import "./styling/heist.css"

function App() {
  return (
      <>
        <Routes>
          <Route path="contact" element={<Contact />} />
          <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/laugh" element={<JustForLaughs/>} />
          <Route path="/play" element={<Play />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="*" element={<PageNotFound />} />          
          </Route>
        </Routes>
      </>
  );
}

export default App;
