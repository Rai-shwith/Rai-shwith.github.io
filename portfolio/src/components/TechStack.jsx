import Image from "next/image";
import React from "react";

const TechStack = ({ techStack, tags }) => {
  const techStackIcons = {
    HTML: "https://cdn.simpleicons.org/html5/E34F26",
    CSS: "https://cdn.simpleicons.org/css3/1572B6",
    JavaScript: "https://cdn.simpleicons.org/javascript/F7DF1E",
    TailwindCSS: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    FastAPI: "https://cdn.simpleicons.org/fastapi/009688",
    Python: "https://cdn.simpleicons.org/python/3776AB",
    SQLAlchemy: "https://cdn.simpleicons.org/sqlalchemy/D71F00",
    PostgreSQL: "https://cdn.simpleicons.org/postgresql/336791",
    "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
    "Express.js ":
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    React: "https://cdn.simpleicons.org/react/61DAFB",
    "C++": "https://cdn.simpleicons.org/cplusplus/00599C",
    "BeautifulSoup(bs4)":
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Beautiful_Soup_logo.png",
    Alembic: "https://cdn.simpleicons.org/alembic/D71F00",
    TensorFlow: "https://cdn.simpleicons.org/tensorflow/FF6F00",
    "Leaflet.js": "https://avatars.githubusercontent.com/u/2854298?s=48&v=4",
  };

  return (
    <div className="flex flex-wrap mt-2">
      {techStack &&
        techStack.length > 0 &&
        techStack.map((tech) => {
          const iconUrl = techStackIcons[tech] || "";
          const isSvg = iconUrl?.endsWith(".svg") || iconUrl?.includes("simpleicons");

          return (
            <div
              key={tech}
              className="bg-secondary text-secondary-foreground font-semibold rounded-md px-2 py-1 text-xs mr-2 mt-2 flex items-center gap-2"
            >
              {iconUrl && (
                <div className="relative w-5 h-5">
                  {isSvg ? (
                    // Use <img> for SVG images
                    <img
                      src={iconUrl}
                      alt={`${tech} Icon`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    // Use <Image> for other formats (png, jpg, webp)
                    <Image
                      src={iconUrl}
                      alt={`${tech} Icon`}
                      width={20}
                      height={20}
                      className="object-contain"
                      />
                  )}
                </div>
              )}
              {tech}
            </div>
          );
        })}

      {techStack?.length > 0 && tags && <div className="w-full h-0.5 bg-input my-4"></div>}

      {tags?.map((tag) => (
        <div
          className="bg-secondary text-secondary-foreground font-semibold rounded-md px-2 py-1 text-xs mr-2 mb-2"
          key={tag}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TechStack;
