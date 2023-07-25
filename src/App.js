import React, {useState} from 'react';
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";
import Contact from "./Components/Contact";
import Box from "@mui/material/Box";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const lightModeStyles = {
        backgroundColor: '#f0f0f0',
        minHeight: '100vh',
        overflowX: 'clip'
    };

    const darkModeStyles = {
        backgroundColor: '#161818',
        minHeight: '100vh',
        overflowX: 'clip'
    };

    const styles = darkMode ? darkModeStyles : lightModeStyles;

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
}


  return (
      <Box sx={styles}>
          <ResponsiveAppBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}></ResponsiveAppBar>
          <div>
              <div id="about">
                  <About></About>
              </div>
              <Technologies></Technologies>
              <div id="projects">
                  <Projects darkMode={darkMode}></Projects>
              </div>
              <div id="contact">
                  <Contact darkMode={darkMode}></Contact>
              </div>
          </div>
      </Box>
  );
}

export default App;
