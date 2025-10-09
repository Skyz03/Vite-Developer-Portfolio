import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    // Added whole div with bg color and margin for larger screens
    <div className="bg-background">
      <div className="md:mx-10">
        <Nav />
        <Hero />
        <Skills />
        <Projects />
      </div>
      <div className="bg-dark-gray">
        <Contact />
        <Nav />
      </div>
    </div>
  );
}

export default App;
