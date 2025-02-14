import React from "react";
import Description from "./Description";

const About = () => {
  return (
    <div className="flex flex-col my-8">
      <h3 className="font-bold text-xl">About</h3>
      <Description
        description={`I'm a passionate *software developer* from Bangalore who loves turning ideas into functional,
        user-friendly applications. From crafting sleek *weather apps* to
        automating *LeetCode-to-GitHub* workflows, I enjoy building tools that
        make life easier. Recently, I developed *Leet2Git*, a tool that transforms
        LeetCode problems into well-structured GitHub repositories, and
        *Get-My-Attendance*, a WiFi-based attendance system. I also won the *Best
        About Us Page Award* in a web design competition and ranked *Top 5 in a
        college hackathon*. Currently, I'm sharpening my web development skills
        while gearing up to explore AI. 🚀`}
        normalClassNames={"text-muted-foreground "}
        specialClassName={"text-muted-foreground font-bold"}
      />
    </div>
  );
};

export default About;
