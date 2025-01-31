import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="flex flex-col items-center my-8">
      {/* <button className='appearance-none px-3 py-1 text-sm text-background bg-foreground rounded-lg'>My Projects</button> */}
      <div className="text-3xl font-bold tracking-tighter my-3">
        Featured Projects
      </div>
      <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed">
        I build projects from 0 to 1, turning ideas into reality. Take a look at
        some of my favorite projects below.
      </p>
      <div className="grid md:grid-cols-3 w-full gap-5 justify-center mt-5">
        <Card
          title={"Leet2Git"}
          time={"Aug 2024"}
          status={"In Progress"}
          thumbnailSrc={"leet2git.jpg"}
          videoSrc={"LeetCode.webm"}
          website={""}
          github={"LEET2GIT"}
          frameworks={[
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "FastAPI",
            "SQL Alchemy",
            "Postgres Database",
            "Github API",
            "LeetCode API",
            "Websocket",
            "Full Stack",
          ]}
          description={
            "Leet2Git is a web app that helps users seamlessly convert their LeetCode submissions into GitHub repositories, creating a structured portfolio of their problem-solving skills. Users can either manually upload solutions by entering question details or automatically fetch all submissions using their LeetCode session cookies. The app organizes solutions into folders and generates a README.md with question details. The project is 90% complete and will be released soon! 🚀"
          }
        />
        <Card
          title={"SkyCast"}
          time={"Oct 2024"}
          status={"Completed"}
          thumbnailSrc={"skycast.jpg"}
          videoSrc={"skycast.webm"}
          website={"https://skycast.ashwithrai.me"}
          github={"SkyCast"}
          frameworks={[
            "HTML",
            "Tailwind CSS",
            "JavaScript",
            "Node.js ",
            "OpenweatherMap API",
          ]}
          description={
            "SkyCast is a Node.js weather app providing real-time weather updates and 5-day forecasts. It automatically detects your location via GPS or IP and supports manual searches for any city. Powered by the OpenWeatherMap API, SkyCast delivers accurate weather data in a simple, user-friendly interface."
          }
        />
        <Card
          title={"Get My Attendance"}
          time={"Dec 2024"}
          status={"Completed"}
          thumbnailSrc={"getMyAttendance.jpg"}
          thumbnailLightSrc={"getMyAttendanceLight.jpg"}
          videoSrc={""}
          website={""}
          github={"getMyAttendance"}
          frameworks={[
            "HTML",
            "Tailwind CSS",
            "JavaScript",
            "PostgreSQL",
            "Express",
            "EJS",
            "WebSockets",
            "Offline",
            "Hackathon",
            "Attendance Management",
            "Responsive",
            "Innovative",
            "Raspberry Pi",
          ]}
          description={
            "A web-based attendance management system designed for colleges, built during a 24-hour hackathon. It allows teachers to mark attendance digitally. The system was hosted on a local Raspberry Pi, accessible via attendance.local. The project ranked in the Top 5 at the hackathon and later evolved into a more advanced version with plans for online hosting and synchronization. 🚀"
          }
        />
        <Card
          title={"Classly"}
          time={"Nov 2024"}
          status={"In Progress"}
          thumbnailSrc={"classly.jpg"}
          thumbnailLightSrc={"classlyLight.jpg"}
          videoSrc={""}
          website={"get-my-attendance"}
          github={""}
          frameworks={[
            "React",
            "Tailwind CSS",
            "PostgreSQL",
            "Express",
            "Education",
            "WebSockets",
            "Offline-first",
            ,
            "Raspberry Pi",
            "Scalable",
            "Student Information System (SIS)",
            "Attendance Management",
            "Mobile Support",
            "Innovative",
            "Cloud Synchronization",
          ]}
          description={
            "Classly is the evolved version of Get-My-Attendance, designed for offline-first attendance management in colleges using a Raspberry Pi server while supporting cloud synchronization. It ensures seamless access whether online or offline, allowing teachers to manage attendance and students to track records efficiently. With mobile support already integrated, future plans include expanding to entire colleges and transforming it into a complete Student Information System (SIS). 🚀"
          }
        />
        <Card
          title={"C++ Lab Codes"}
          time={"Oct 2024"}
          status={"Completed"}
          thumbnailSrc={"cpp.jpg"}
          videoSrc={"cpp.webm"}
          website={"cpp"}
          github={"cpp"}
          frameworks={[
            "C++",
            "Python",
            "Beautiful Soup (bs4)",
            "HTML",
            "CSS",
            "JavaScript",
          ]}
          description={
            "I created a webpage that showcases all the C++ lab codes from my 3rd semester. Using a Python script with BeautifulSoup (bs4), I converted each C++ code into HTML pages, allowing my classmates to view both the code and its output directly on the website. This project made it easier for students to access and understand the code in an interactive way."
          }
        />
        <Card
          title={"Shopping Cart"}
          time={"Jul 2024"}
          status={"Completed"}
          thumbnailSrc={"shopping.jpg"}
          videoSrc={"shopping.webm"}
          website={"FM-Challenge-Product-list-with-cart"}
          github={"FM-Challenge-Product-list-with-cart"}
          frameworks={[
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive",
            "Frontend Mentor Challenge",
          ]}
          description={
            "I completed the Product-list-with-cart challenge from Frontend Mentor, where I built a product list with a fully functional cart. Users can add or remove items, adjust quantities, and view an order confirmation modal. The project includes **responsive design**, and **hover/focus states** for all interactive elements. I followed the provided **README.md** for setup and successfully implemented the challenge, ensuring a smooth user experience across different devices."
          }
        />
        <Card
          title={"Student Ranker"}
          time={"Jul 2024"}
          status={"Completed"}
          thumbnailSrc={"studentRankerAfter.jpg"}
          thumbnailLightSrc={"studentRanker.jpg"}
          videoSrc={"studentRanker.webm"}
          website={"Student-Ranker"}
          github={"Student-Ranker "}
          frameworks={["HTML", "CSS", "JavaScript"]}
          description={
            "I built a webpage called Student Ranker to help my aunt, a school teacher, sort student marks and assign ranks automatically. The webpage is built using HTML, CSS, and JavaScript. Teachers can enter the names and marks of students, and by pressing the Arrange button, the system automatically assigns ranks based on the students' marks. This project significantly simplified a previously tedious task for teachers."
          }
        />
        <Card
          title={"Age Calculator"}
          time={"Jul 2024"}
          status={"Completed"}
          thumbnailSrc={"ageCalculator.jpg"}
          videoSrc={"ageCalculator.webm"}
          website={"FM-Challenge-Age-calculator-app"}
          github={"FM-Challenge-Age-calculator-app"}
          frameworks={["HTML", "CSS", "JavaScript"]}
          description={
            "I completed the Age Calculator App challenge from Frontend Mentor, which calculates the user's age, including the month and day, based on the date of birth (DOB) they enter. The app is optimized for both desktop and mobile devices, providing a seamless user experience across different screen sizes."
          }
        />
        <Card
          title={"Super Hero Web App"}
          time={"Jun 2024"}
          status={"Completed"}
          thumbnailSrc={"hero.jpg"}
          videoSrc={""}
          website={"https://heros.ashwithrai.me/"}
          github={"FastAPI-SuperHero"}
          frameworks={[
            "FastAPI",
            "HTML",
            "CSS",
            "JavaScript",
            "Postgresql",
            "Cockroach DB",
            "SQL Alchemy",
            "Alembic",
          ]}
          description={
            "I built the FastAPI-SuperHero web application as my first full-stack project using FastAPI. Users can log in with email (dummy email works), sign up, or log in as a guest, and create heroes with names and alter-egos like Spiderman and Peter Parker. They can view all heroes, see individual hero details, and like both their own and others' heroes. Additionally, users can manage their profile, delete their heroes, or even delete their profile entirely. This project demonstrates my ability to build a full-stack application with user authentication and CRUD operations."
          }
        />
        <Card
          title={"Vegetable and Fruits Classifier"}
          time={"Jan 2025"}
          status={"Experimental"}
          thumbnailSrc={"VegFruitAi.jpg"}
          videoSrc={"vegFruitAi.webm"}
          website={""}
          github={"VegFruitAI"}
          frameworks={[
            "Python",
            "FastAPI",
            "TensorFlow",
            "HTML",
            "CSS",
            "JavaScript",
          ]}
          description={
            "I developed an AI-powered fruit and vegetable recognition tool that uses a machine learning model to identify fruits and vegetables from uploaded images. The project includes a FastAPI backend and a user-friendly frontend. I used TensorFlow for image classification, enabling accurate identification of various fruits and vegetables based on the uploaded images."
          }
        />
        <Card
          title={"Leet Code Solutions"}
          time={"Nov 2024"}
          status={"Maintained"}
          thumbnailSrc={"leetSolutions.jpg"}
          videoSrc={""}
          website={""}
          github={"LeetSolutions"}
          frameworks={["LeetCode","DSA","Problem Solving","Well Organized"]}
          description={
            "LeetSolutions is a repository containing well-organized solutions to LeetCode problems, automatically generated by the tool Leet2Git. The repository highlights my ability to structure and present DSA (Data Structures and Algorithms) solutions in an accessible format. Each solution is neatly categorized, making it easy to explore and learn from the problems. This project demonstrates my development skills and commitment to creating efficient tools for organizing coding solutions."
          }
        />
        <Card
          title={"TO-DO App"}
          time={"Nov 2024"}
          status={"Completed"}
          thumbnailSrc={"todo.jpg"}
          videoSrc={"todo.webm"}
          website={"TODO-REACT"}
          github={"TODO-REACT"}
          frameworks={["React","Tailwind CSS"]}
          description={"I built a TO-DO app while learning React, which is my first React application. The app allows users to take notes, mark them as completed, and hide the marked ones. It also stores the information locally, ensuring the data persists even when the browser tab is closed. This project gave me hands-on experience with React and local storage, enhancing my understanding of state management and data persistence."}
        />
        <Card
          title={"Shell Codes using Python"}
          time={"Oct 2024"}
          status={"On Hold"}
          thumbnailSrc={"shellpy.jpg"}
          videoSrc={"shellpy.webm"}
          website={""}
          github={"shellpy"}
          frameworks={["Python","Shell Scripting"]}
          description={"ShellPy is a repository where Python meets shell scripting, designed to simplify tasks like managing directories and files. The main script, dirgen, allows users to create directory and file structures using an easy Emmet-like syntax. By adding the repository to your PATH, you can use the dirgen command in your terminal to generate file structures with ease. The project is designed to make shell scripting more efficient and fun, with plans for future Python scripts to further enhance your shell scripting experience."}
        />
        <Card
          title={"Web Development Skill Lab Codes"}
          time={"Aug 2024"}
          status={"Completed"}
          thumbnailSrc={"hybridWebdev.jpg"}
          videoSrc={""}
          website={"Skill-Lab-Hybrid-Web-Dev"}
          github={"Skill-Lab-Hybrid-Web-Dev"}
          frameworks={["HTML","CSS","JavaScript"]}
          description={"This repository contains the work I have completed as part of the Hybrid Web Development program offered by my college. The program is structured in a day-by-day format, with specific tasks, exercises, and assignments to be completed each day."}
        />
      </div>
    </div>
  );
};

export default Projects;
