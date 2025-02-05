import React from "react";
import Internet from "./Internet";
import Github from "./icons/Github";
import ProjectStatus from "./ProjectStatus";
import Description from "./Description";
import VideoComponent from "./VideoComponent";
import TechStack from "./TechStack";

const Card = ({
  title,
  status,
  time,
  description,
  techStack,
  tags,
  website,
  github,
  thumbnailSrc,
  thumbnailLightSrc = null,
  videoSrc,
}) => {
  return (
    <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg min-w-64">
      <div className="aspect-video w-full overflow-hidden rounded-lg relative">
      <div className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-50 bg-blend-multiply"></div>
        <VideoComponent poster={thumbnailSrc} posterLight={thumbnailLightSrc} videoSrc={videoSrc} />
      </div>
      <div className=" flex flex-col p-3">
        <div className="font-bold mt-1 text-lg">{title}</div>
        <div className="flex justify-start space-x-2">
          <ProjectStatus status={status} />
          <div className="font-sans text-sm opacity-80">{time}</div>
        </div>
        <div className="text-sm font-light max-w-full text-pretty text-muted-foreground">
          <Description 
          description={description}
          normalClassNames={"text-sm font-light max-w-full text-pretty text-muted-foreground"}
          specialClassName={"font-bold"}
          />
          {/* {description} */}
        </div>
          <TechStack techStack={techStack} tags={tags} />
        <div className=" flex w-full justify-start space-x-5 ">
          {website && (
            <a
              href={
                website.startsWith("https://")
                  ? website
                  : "https://ashwithrai.me/" + website
              }
              target="_blank"
              rel="noopener"
            >
              <div className="rounded-md hover:scale-105 transition-transform ease-in-out font-semibold text-primary-foreground bg-primary/80 w-fit px-2 py-1 text-sm flex h-fit space-x-2">
                <Internet />
                <div className="">Website</div>
              </div>
            </a>
          )}
          <a
            href={"https://github.com/Rai-shwith/" + github}
            target="_blank"
            rel="noopener"
          >
            <div className="rounded-md hover:scale-105 transition-transform ease-in-out font-semibold text-primary-foreground bg-primary/80 w-fit px-2 py-1 text-sm flex h-fit space-x-2">
              <Github />
              <div className="">Github</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
