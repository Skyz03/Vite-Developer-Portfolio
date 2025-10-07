import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    // Added whole div with bg color and margin for larger screens
    <div className="bg-background">
      <div className="md:mx-32">
        <Nav />
        <Hero />
        <Skills />
        <Projects />
      </div>
      <Contact />
    </div>
  );
}

export default App;
