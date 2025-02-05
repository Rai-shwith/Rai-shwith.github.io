import React from "react";

const TechStack = ({ techStack, tags }) => {
  const techStackIcons = {
    "HTML": "https://cdn.simpleicons.org/html5/E34F26",
    "CSS": "https://cdn.simpleicons.org/css3/1572B6",
    "JavaScript": "https://cdn.simpleicons.org/javascript/F7DF1E",
    "TailwindCSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "FastAPI": "https://cdn.simpleicons.org/fastapi/009688",
    "Python": "https://cdn.simpleicons.org/python/3776AB",
    "SQLAlchemy": "https://cdn.simpleicons.org/sqlalchemy/D71F00",
    "PostgreSQL": "https://cdn.simpleicons.org/postgresql/336791",
    "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
    "OpenWeatherMap": "https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png",
    "Express.js": "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    "React": "https://cdn.simpleicons.org/react/61DAFB",
    "C++": "https://cdn.simpleicons.org/cplusplus/00599C",
    "BeautifulSoup(bs4)": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Beautiful_Soup_logo.png",
    "Alembic": "https://cdn.simpleicons.org/alembic/D71F00",
    "TensorFlow": "https://cdn.simpleicons.org/tensorflow/FF6F00",
    "Leaflet.js": "https://avatars.githubusercontent.com/u/2854298?s=48&v=4"
  };

  return (
    <div className="flex flex-wrap mt-2">
      {techStack && techStack.length > 0 && (
        <>
          {techStack.map((tech) => (
            <div
              className="bg-secondary text-secondary-foreground font-semibold rounded-md px-2 py-1 text-xs mr-2 mt-2 flex items-center gap-2"
              key={tech}
            >
                {techStackIcons[tech] && 
              <img className="min-w-5 w-full h-5"  src={techStackIcons[tech]} alt={`${tech} Icon`} />
              }
              {tech}
            </div>
          ))}
        </>
      )}

      {techStack && techStack.length > 0 && tags && (
        <div className="w-full h-0.5 bg-input my-4"></div>
      )}

      {tags && (
        <>
          {tags.map((tag) => (
            <div
              className="bg-secondary text-secondary-foreground font-semibold rounded-md px-2 py-1 text-xs mr-2 mb-2"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TechStack;
