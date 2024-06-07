import "./App.css";
import About from "./sections/About/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import WorkExperience from "./sections/WorkExperience/WorkExperience";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
