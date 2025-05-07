import React from "react";

const About = () => {
  return (
    <div className="flex flex-col my-8">
      <h2 className="text-2xl font-bold text-foreground mb-4 flex-1">
      Meet the Builder</h2>
      <p className="text-muted-foreground text">
  I'm a passionate <span className="text-muted-foreground font-bold">web developer</span> who loves turning ideas into functional,
  user-friendly applications. From crafting sleek <span className="text-muted-foreground font-bold">weather apps</span> to
  automating <span className="text-muted-foreground font-bold">LeetCode-to-GitHub</span> workflows, I enjoy building tools that
  make life easier. Currently, I'm working on <span className="text-muted-foreground font-bold">Classly</span>, an innovative
  web application that helps track student attendance via smartphones, and <span className="text-muted-foreground font-bold">IntraNav</span>,
  a real-time indoor navigation system aimed at guiding users through complex spaces. I'm also sharpening my web development skills
  while gearing up to explore AI. 🚀
</p>

    </div>
  );
};

export default About;
