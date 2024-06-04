import "./App.css";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <About />
    </div>
  );
}

export default App;
