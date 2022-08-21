import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ProjectArticle from "./components/portfolio/ProjectArticle";
import Cv from "./pages/Cv";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="qui-suis-je" element={<AboutMe />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:projectid" element={<ProjectArticle />} />
        <Route path="cv" element={<Cv />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
