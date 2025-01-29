import React from 'react'
import { useTheme } from './context/ThemeContext';
import Background from './components/Background';
import FloatingBar from './components/FloatingBar';

const App = () => {

  const { toggleTheme} = useTheme();


  return (
    <>
    <Background>
      <FloatingBar />
    </Background>
    </>
  );
}

export default App
