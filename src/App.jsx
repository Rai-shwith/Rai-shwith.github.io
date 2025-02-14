import React from "react";
import { useTheme } from "../portfolio/src/context/ThemeContext";
import Background from "./components/Background";
import FloatingBar from "./components/FloatingBar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import { NotificationProvider } from "../portfolio/src/context/NotificationContext";

const App = () => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <Background>
        <NotificationProvider>
          <FloatingBar />
          <Header />
          <About />
          <Projects />
          <Education />
          <ContactMe />
        </NotificationProvider>
      </Background>
    </>
  );
};

export default App;
