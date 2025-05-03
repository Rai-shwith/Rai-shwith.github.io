// components/MySkills/MySkills.jsx
import React from "react";
import SkillCategory from "./SkillCategory";
import { skillsData } from "./skills-data";

const MySkills = () => {
  return (
    <section className="w-full mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-primary">
      My Dev Arsenal
      </h2>
      <SkillCategory title="Languages" skills={skillsData.languages} />
      <SkillCategory title="Frameworks & Libraries" skills={skillsData.frameworks} />
      <SkillCategory title="Tools" skills={skillsData.tools} />
      <SkillCategory title="Currently Learning" skills={skillsData.learning} />
    </section>
  );
};

export default MySkills;
