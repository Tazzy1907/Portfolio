import "./App.css";
import NavBar from "./navBar";
import { AnimatedBackground, AnimatedText } from "animated-backgrounds";
import Education from "./education";
import Projects from "./projects";
import AboutMe from "./about";

const App = () => {
  return (
    <>
      <title>Taz Siriwardena</title>
      <AnimatedBackground animationName="auroraBorealis" />
      <NavBar />
      <div id="about" className="h-screen flex flex-col w-full items-center pt-20">
        <AboutMe />
      </div>

      <div id="projects" className="h-screen flex flex-col w-full items-center pt-20">
        <Projects />
      </div>

      <div id="experience" className="h-screen flex flex-col w-full items-center pt-20">
        <h3 className="text-3xl font-bold text-white">Experience</h3>
      </div>

      <div id="education" className="h-screen flex flex-col w-full items-center pt-20">
        <Education />
      </div>

      <div id="links" className="h-screen flex flex-col w-full items-center pt-20">
        <h3 class="text-3xl font-bold text-white">Links</h3>
        <button className="btn btn-primary text-white">Test DaisyUI Button</button>

      </div>

    </>
  );
}

export default App;
