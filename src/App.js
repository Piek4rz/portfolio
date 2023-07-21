import React from 'react';
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";
import Contact from "./Components/Contact";

function App() {
  return (
      <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
          <ResponsiveAppBar ></ResponsiveAppBar>
          <div>
              <div id="about">
                  <About></About>
              </div>
              <Technologies></Technologies>
              <div id="projects">
                  <Projects></Projects>
              </div>
              <div id="contact">
                  <Contact></Contact>
              </div>
          </div>
      </div>
  );
}

export default App;
