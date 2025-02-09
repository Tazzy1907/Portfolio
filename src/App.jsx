import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Html, ScrollControls, Scroll, OrbitControls, Environment, Stars } from "@react-three/drei";
import { BMWInstance } from "../components/bmw";
import { AmbientLight } from "three";

const App = () => {
  return (
    <Canvas>
      <Environment preset="sunset" />
      <ScrollControls pages={5}>
        <Scroll>
          <Html fullscreen = {true}>
            <nav>
              <a href="/" class="btn"><span>About Me</span></a>
              <a href="/" class="btn">Projects</a>
              <a href="/" class="btn">Experience</a>
              <a href="/" class="btn">Education</a>
              <a href="/" class="btn">Links</a>
            </nav>
          </Html>
      

          <Html style={{top: '-350px'}} fullscreen = {true}>
            <div id="About Me">
              <h1>About Me</h1>
              <h2>Tanaz Siriwardena</h2>
              <p>Motivated full-stack software developer specialising in Java and Python backend. Eager to apply skills in real-world projects through internships. Proven ability to collaborate in team settings and lead through senior management experience.</p>
            </div>
          </Html>

          <mesh>
            <BMWInstance />
          </mesh>

          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />


          <Html style={{top: '100vh'}} fullscreen = {true}>
            <div id="Projects">
              <h1>Projects</h1>
              <h3>Traffic Junction Modelling Simulator</h3>
              <ul>
                <li>Head of UI</li>
                <li>Agile Methodology</li>
                <li>Pair Programming</li>
              </ul>
              
              <h3>Web Application - Event Management</h3>
              <ul>
                <li>Login System</li>
                <li>Admin Access & Controls</li>
                <li>Permanent User Data</li>
              </ul>

              <h3>Mobile Application - Restaurant Online Ordering</h3>
              <ul>
                <li>Replicated a full-stack online ordering system for Lounges</li>
                <li>Cross Platform Application using React Native</li>
              </ul>

              <h3>3D Object Renderer</h3>
              <ul>
                <li>Complex matrix calculations</li>
                <li>Optimised calculations for 50% performance boost</li>
                <li>Camera movements & object rotations</li>
                <li>Combination of Further Maths & Computer Science</li>
              </ul>
            </div>
          </Html>
         

          <Html style={{top: '200vh'}} fullscreen = {true}>
            <div id="Experience">
              <h1>Experience</h1>
              <h3>Software Developer Intern</h3>
              <p>UBS - Summer, 2025</p>

              <h3>Head of UI</h3>
              <p>Software Engineering Project - Spring 2025</p>
              <ul>
                <li>Designed and implemented GUI interface</li>
                <li>Utilisied pair-programming alongside an agile workflow to ??</li>
              </ul>

              <h3>Assistant Manager</h3>
              <p>Merletto Lounge - June 2024-Present</p>
              <ul>
                <li>Managed teams of up to 6 per shift</li>
                <li>Conducted training for management</li>
                <li>Stocks and audits</li>
              </ul>
            </div>
          </Html>
        

          <Html style={{top: '300vh'}} fullscreen = {true}>
            <div id="Education">
              <h1>Education</h1>
              <h3>University of Warwick</h3>
              <p>BSc Computer Science, 2023 - 2026</p>
              <ul>
                <li>Expected First</li>
                <li>Key Modules: <ul>
                    <li>Software Engineering</li>
                    <li>Artificial Intelligence</li>
                    <li>Databases</li>
                    <li>Algorithms & Data Structures</li>
                    <li>Operating Systems</li>
                  </ul></li>
              </ul>

              <h3>The Royal Grammar School, High Wycombe</h3>
              <p>A Levels, 2021 - 2023</p>
              <ul>
                <li>A*A*AA in Maths, Further Maths, Computer Science & Physics</li>
              </ul>
              <br></br>
              <p>GCSEs, 2016 - 2021</p>
              <ul>
                <li>Six 9s, Five 8s including Triple Science, Further Maths & Computer Science</li>
              </ul>
            </div>
          </Html>
        
          <Html style={{top: '400vh'}} fullscreen = {true}>
            <div id="links">
              <h1>Links</h1>
              <a href="">LinkedIn</a> |
              <a href=""> GitHub</a> |
              <a href=""> Email</a> |
              <a href=""> CV</a> 
            </div>
          </Html>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default App;