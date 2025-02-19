import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-start my-8">
        <div className="flex flex-col md:w-9/12">
          <div className="text-3xl s m:text-5xl font-bold">
            Hi, I'm Ashwith 👋
          </div>
          <div className="md:text-xl">
            Passionate developer with a love for creating innovative solutions.
            I specialize in web development and enjoy working with various
            technologies to bring ideas to life. My goal is to build
            applications that are not only functional but also user-friendly and
            visually appealing.🤠
          </div>
        </div>
        <div className="relative flex-none md:w-64 md:h-64 h-24 w-24 bg-red-400 rounded-full overflow-hidden">
          <Image
            src="https://avatars.githubusercontent.com/u/147788165?v=4"
            alt="Ashwith Rai"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
