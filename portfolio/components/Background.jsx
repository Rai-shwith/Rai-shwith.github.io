import React from "react";

const Background = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground md:py-24 pt-4 pb-32 flex flex-col items-center font-jakarta">
      <div className="w-[90vw]">{children}</div>
    </div>
  );
};

export default Background;
