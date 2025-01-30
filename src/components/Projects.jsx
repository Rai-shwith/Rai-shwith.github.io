import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <div className='flex flex-col items-center my-8'>
        {/* <button className='appearance-none px-3 py-1 text-sm text-background bg-foreground rounded-lg'>My Projects</button> */}
        <div className="text-3xl font-bold tracking-tighter my-3">Featured Projects</div>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed">I build projects from 0 to 1, turning ideas into reality. Take a look at some of my favorite projects below.</p>
        <div className="grid md:grid-cols-3 w-full gap-5 justify-center mt-5">
            <Card time={"2024-Present"} title={"SkyCast"} description={"lorem espsum montendt jehtit hnalakey lan lsaei fslfeoi woi naidhe nfaoei nfaeiueun adjaeoie"} frameworks={["HTML", "JavaScript", "CSS", "Node.js " ,"OpenweatherAPI"]} />
            <Card time={"2024-Present"} title={"SkyCast"} description={"lorem espsum montendt jehtit hnalakey lan lsaei fslfeoi woi naidhe nfaoei nfaeiueun adjaeoie"} frameworks={["HTML", "JavaScript", "CSS", "Node.js " ,"OpenweatherAPI"]} />
            <Card time={"2024-Present"} title={"SkyCast"} description={"lorem espsum montendt jehtit hnalakey lan lsaei fslfeoi woi naidhe nfaoei nfaeiueun adjaeoie"} frameworks={["HTML", "JavaScript", "CSS", "Node.js " ,"OpenweatherAPI"]} />
            <Card time={"2024-Present"} title={"SkyCast"} description={"lorem espsum montendt jehtit hnalakey lan lsaei fslfeoi woi naidhe nfaoei nfaeiueun adjaeoie"} frameworks={["HTML", "JavaScript", "CSS", "Node.js " ,"OpenweatherAPI"]} />
            <Card time={"2024-Present"} title={"SkyCast"} description={"lorem espsum montendt jehtit hnalakey lan lsaei fslfeoi woi naidhe nfaoei nfaeiueun adjaeoie"} frameworks={["HTML", "JavaScript", "CSS", "Node.js " ,"OpenweatherAPI"]} />
        </div>
    </div>
  )
}

export default Projects