import "./App.css";
import NavBar from "./navBar";
import { AnimatedBackground, AnimatedText } from "animated-backgrounds";
import Education from "./education";
import Projects from "./projects";

const App = () => {
  return (
    <>
      <title>Taz Siriwardena</title>
      <AnimatedBackground animationName="auroraBorealis" />
      <NavBar />


      <div id="about" class="h-screen flex flex-col w-full items-center pt-20">
        <h3 class="text-3xl font-bold text-white">About Me</h3>

        <div id="title">
        <h1 class="text-6xl font-bold text-center text-white hover:text-blue-600 transition duration-300 ease-in-out">
          <AnimatedText text="Tanaz Siriwardena" effect="rainbow" config={{
          speed: 100,
          loop: true,
          delay: 1000,
          color: '#ff0000'
        }} />
        </  h1>
      </div>
      </div>

      

      <div id="projects" class="h-screen flex flex-col w-full items-center pt-20">
        <Projects />
      </div>

      <div id="experience" class="h-screen flex flex-col w-full items-center pt-20">
        <h3 class="text-3xl font-bold text-white">Experience</h3>
      </div>

      <div id="education" class="h-screen flex flex-col w-full items-center pt-20">
        <Education />
      </div>

      <div id="links" class="h-screen flex flex-col w-full items-center pt-20">
        <h3 class="text-3xl font-bold text-white">Links</h3>
      </div>

    </>
  );
}

export default App;
