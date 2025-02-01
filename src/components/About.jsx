import React from "react";

const About = () => {
  return (
    <div className="flex flex-col my-8">
      <h3 className="font-bold text-xl">About</h3>
      <p className="text-muted-foreground">
        I'm a passionate <span className="text-muted-foreground font-bold">software developer</span> who loves turning ideas into functional,
        user-friendly applications. From crafting sleek <span className="text-muted-foreground font-bold">weather apps</span> to
        automating <span className="text-muted-foreground font-bold">LeetCode-to-GitHub</span> workflows, I enjoy building tools that
        make life easier. Recently, I developed <span className="text-muted-foreground font-bold">Leet2Git</span>, a tool that transforms
        LeetCode problems into well-structured GitHub repositories, and
        <span className="text-muted-foreground font-bold">Get-My-Attendance</span>, a WiFi-based attendance system. I also won the <span className="text-muted-foreground font-bold">Best
        About Us Page Award</span> in a web design competition and ranked <span className="text-muted-foreground font-bold">Top 5 in a
        college hackathon</span>. Currently, I'm sharpening my web development skills
        while gearing up to explore AI. 🚀
      </p>
    </div>
  );
};

export default About;
