import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Contact from "./Components/Contact/Contact";
import HomeSection from "./Components/HomeSection/HomeSection";
import Projcets from "./Components/Projcets/Projcets";
import Skills from "./Components/Skills/Skills";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

function App() {
  return (
    <section className="App">
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projcets />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
