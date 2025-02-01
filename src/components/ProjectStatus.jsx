const statuses = {
    "In Progress": "bg-blue-500 text-white",
    "Completed": "bg-green-500 text-white",
    "Beta Release": "bg-yellow-500 text-black",
    "Maintained": "bg-purple-500 text-white",
    "Archived": "bg-gray-500 text-white",
    "Planned": "bg-indigo-500 text-white",
    "On Hold": "bg-red-500 text-white",
    "Prototype": "bg-orange-500 text-white",
    "Experimental": "bg-pink-500 text-white",
  };
  
  const ProjectStatus = ({ status }) => {
    return (
      <div className={`font-semibold rounded-md px-2 py-1 text-xs ${statuses[status] || "bg-gray-400 text-white"}`}>
        {status}
      </div>
    );
  };
  
  
  export default ProjectStatus
  