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

export default function Home() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
