import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Robotsuiveur from "./pages/Robotsuiveur";
import Laserpourchat from "./pages/Laserpourchat";
import ListX from "./pages/ListX";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="qui-suis-je" element={<AboutMe />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/robotsuiveur" element={<Robotsuiveur />} />
        <Route path="portfolio/laserpourchat" element={<Laserpourchat />} />
        <Route path="portfolio/listx" element={<ListX />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
