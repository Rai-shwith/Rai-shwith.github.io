// components/MySkills/SkillCard.jsx
import React from "react";

const SkillCard = ({ name, icon, description }) => {
  return (
    <div className="p-4 w-24 h-28 md:w-40 md:h-40 bg-foreground/20 backdrop-blur-lg border border-border rounded-2xl shadow-md hover:scale-105 transition-transform duration-200 flex flex-col items-center justify-center text-center">
      <div className="text-4xl mb-2 text-primary">{icon}</div>
      <p className="text-foreground font-medium md:text-s text-xs">{name}</p>
      <p className="mt-2 md:text-xs text-[0.4rem] text-muted-foreground">{description}</p> 
    </div>
  );
};

export default SkillCard;
