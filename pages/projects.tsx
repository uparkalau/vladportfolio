import { fadeInUp } from "@/animations";
import ProjectCard from "@/components/ProjectCard";
import ProjectsNavbar from "@/components/ProjectsNavbar";
import { projects as projectsData } from "@/data";
import { Category } from "@/type";
import { motion } from "framer-motion";
import { useState } from "react";


const Projects = () => {
  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState("all")
  const handleFilterCategory = (category: Category | 'all') => {
    if(category === "all"){
      setProjects(projectsData)
      setActive(category)
      return
    }
    const newProjectsData = projectsData.filter((project) => project.category.includes(category))
    setProjects(newProjectsData)
    setActive(category)
  }

  return (
    <div className="px-5 py-2" style={{height: '65vh'}}>
      <ProjectsNavbar handleFilterCategory = {handleFilterCategory} active={active}/>
      <div className="relative grid grid-cols-12 gap-4 my-3" >
        {projects.map((project)=>(
          
            <motion.div 
              variants={fadeInUp} 
              initial="initial" 
              animate="animate" 
              className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
              key={project.name}
            >
              <ProjectCard project={project} key={project.name}/>
            </motion.div>
          
        )
        )
          
        }
      </div>
    </div>
  )
}

export default Projects