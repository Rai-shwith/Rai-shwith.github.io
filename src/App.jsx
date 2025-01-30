import React from 'react'
import { useTheme } from './context/ThemeContext';
import Background from './components/Background';
import FloatingBar from './components/FloatingBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

const App = () => {

  const { toggleTheme} = useTheme();


  return (
    <>
    <Background>
      <FloatingBar />
      <Header />
      <About />
      <Projects />
      <ContactMe />
    </Background>
    </>
  );
}

export default App
