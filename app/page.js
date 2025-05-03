import React from "react";
import Background from "@/components/Background";
import FloatingBar from "@/components/FloatingBar";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import { NotificationProvider } from "@/context/NotificationContext";
import { ThemeProvider } from "@/context/ThemeContext";
import MySkills from "@/components/MySkills";

export default function Home() {
  return (
    <ThemeProvider>
      <Background>
        <NotificationProvider>
          <Header />
          <About />
          <MySkills />
          <Projects />
          <Education />
          <ContactMe />
          <FloatingBar />
        </NotificationProvider>
      </Background>
    </ThemeProvider>
  );
}
