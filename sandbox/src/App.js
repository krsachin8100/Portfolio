import Home from "../components/Home";
import Nav from "../components/nav";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Achieve from "../components/achieve";
import About from "../components/about";
import Faq from "../components/faq";
import Work from "../components/work";
export default function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/achieve" element={<Achieve />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}
