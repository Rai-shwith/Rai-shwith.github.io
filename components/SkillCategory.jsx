// components/MySkills/SkillCategory.jsx
import React from "react";
import SkillCard from "./SkillCard";

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-8 w-full">
      <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
      <div className="flex flex-wrap gap-4 w-full justify-center md:justify-start">
        {skills.map((skill, idx) => (
          <SkillCard key={`${title}-${idx}`} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
