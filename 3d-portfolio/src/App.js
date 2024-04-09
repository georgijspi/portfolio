import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import { MatrixRainingLetters } from "react-mdr";

const Body = styled.div`
  // background-color: ${({ theme }) => theme.bg}; 
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
`;

const MatrixBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1; // Lower z-index to place it behind other content
`;

const MatrixOpacity = styled.div`
  background-color: ${({ theme }) => theme.bg+99}; /* Set background color */
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
        <MatrixOpacity>
          <MatrixBackground>
            <MatrixRainingLetters />
          </MatrixBackground>
          <Hero />
          <Skills />
          <Experience />

        </MatrixOpacity>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
