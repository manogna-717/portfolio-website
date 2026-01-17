import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
