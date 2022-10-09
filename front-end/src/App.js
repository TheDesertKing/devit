import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import configJson from "./AppConfig.json";
import PageNotFound from "./pages/404";
import About from "./pages/about";
import Home from "./pages/home";
import Ideas from "./pages/ideas";
import Projects from "./pages/projects";
import "./css/website_design_and_header.css";

function App() {
  return (
    <>
      <Header logoPath={configJson.logoPath} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
