import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <div className='flex flex-col items-center my-8'>
        {/* <button className='appearance-none px-3 py-1 text-sm text-background bg-foreground rounded-lg'>My Projects</button> */}
        <div className="text-3xl font-bold tracking-tighter my-3">Featured Projects</div>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed">I build projects from 0 to 1, turning ideas into reality. Take a look at some of my favorite projects below.</p>
        <div className="grid md:grid-cols-3 w-full gap-5 justify-center mt-5">
            <Card time={"2024-Present"} title={"SkyCast"} thumbnailSrc={"/thumbnail/skycast.jpg"} videoSrc={"/videos/skycast.mp4"} link={"https://skycast.ashwithrai.me"} description={"SkyCast is a Node.js weather app providing real-time weather updates and 5-day forecasts. It automatically detects your location via GPS or IP and supports manual searches for any city. Powered by the OpenWeatherMap API, SkyCast delivers accurate weather data in a simple, user-friendly interface."} frameworks={["HTML", "JavaScript", "CSS","Tailwind CSS", "Node.js " ,"OpenweatherMap API"]} />
        </div>
    </div>
  )
}

export default Projects