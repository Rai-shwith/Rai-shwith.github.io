import React from "react";

const Card = ({ title, time, description, frameworks, link }) => {
  return (
    <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg min-w-64">
      <div className="aspect-video w-full overflow-hidden">
      <video 
  muted 
  autoPlay 
  loop 
  className="w-full h-full"
  poster="/thumbnail/skycast.jpg"
>
  <source src="/videos/skycast.mp4" type="video/mp4" />
</video>

      </div>
      <div className=" flex flex-col p-3">
        <div className="font-bold mt-1 text-lg">{title}</div>
        <div className="font-sans text-sm opacity-80">{time}</div>
        <div className="text-sm font-light max-w-full text-pretty text-muted-foreground">
          {description}
        </div>
        <div className="flex flex-wrap mt-2">
          {frameworks.map((framework) => (
            <div className="bg-secondary text-secondary-foreground font-semibold rounded-md px-2 py-1 text-xs mr-2 mb-2" key={framework}>
              {framework}
            </div>
          ))}
        </div>
      <a href={link}>
      <div className="rounded-md font-semibold text-primary-foreground bg-primary/80 w-fit px-3 text-sm">Website</div>
      </a>
      </div>
    </div>
  );
};

export default Card;
