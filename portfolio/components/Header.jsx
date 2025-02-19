import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-start my-8">
        <div className="flex flex-col md:w-9/12">
          <h1 className="text-3xl md:text-7xl font-bold">
            Hi, I'm Ashwith 👋
          </h1>
          <p className="md:text-xl">
            Passionate developer with a love for creating innovative solutions.
            I specialize in web development and enjoy working with various
            technologies to bring ideas to life. My goal is to build
            applications that are not only functional but also user-friendly and
            visually appealing.🤠
          </p>
        </div>
        <div className="relative flex-none md:w-64 md:h-64 h-24 w-24 bg-red-400 rounded-full overflow-hidden">
          <Image
            src="https://avatars.githubusercontent.com/u/147788165?v=4"
            alt="Ashwith Rai"
            fill
            sizes="(max-width: 768px) 50vw,
            (max-width: 1200px) 33vw,
            25vw"
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
