import { Html, ScrollControls, Scroll, useScroll } from "@react-three/drei";


const NavBar = () => {
    const scrollData = useScroll();
  
    const scrollToSection = (offset) => (e) => {
      e.preventDefault();
      scrollData.el.scrollTo({
        top: window.innerHeight * offset,
        behaviour: 'smooth'
      });
    };
  
    return (
      <Html fullscreen className="navbar-container">
        <nav className="navbar">
          <a href="#aboutme" className="btn" onClick={() => scrollToSection(0)}><span>About Me</span></a>
          <a href="#projects" className="btn" onClick={() => scrollToSection(1)}><span>Projects</span></a>
          <a href="#experience" className="btn" onClick={() => scrollToSection(2)}><span>Experience</span></a>
          <a href="#education" className="btn" onClick={() => scrollToSection(3)}><span>Education</span></a>
          <a href="#links" className="btn" onClick={() => scrollToSection(4)}><span>Links</span></a>
        </nav>
      </Html>
    )
  }

export default NavBar;