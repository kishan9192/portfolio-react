import "./App.css";
import Alert from "./common/Alert";
import { useAlert } from "./hooks/AlertContext";
import About from "./sections/About/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import WorkExperience from "./sections/WorkExperience/WorkExperience";

function App() {
  const { alert } = useAlert();
  return (
    <div className="relative">
      {alert.show && <Alert {...alert} />}
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
