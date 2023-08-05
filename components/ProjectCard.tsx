import { IProject } from "@/type"
import { FunctionComponent, useState } from "react"
import Image from 'next/image';
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'

const ProjectCard: FunctionComponent<{
    project: IProject
}> = ({
    project: {
        name,
        image_path,
        category,
        deployed_url,
        decription,
        github_url,
        key_techs
    }
}) => {
    const [showDetails, setShowDetails] = useState(false)

    return (
        <div>
            <Image width={250} height={80} src={image_path} alt={name} className="cursor-pointer" onClick={() => setShowDetails(true)} />
            <p className="my-2 text-center">{name}</p>
            {showDetails && (
                <div className="grid absolute top-0 left-0 z-10 w-full h-auto md:grid-cols-2 gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark-100">
                    <div>
                        <Image width={400} height={150} src={image_path} alt={name} />
                        <div className="flex justify-center my-4 space-x-3">
                            <a className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                                href={github_url}
                            >
                                <AiFillGithub /><span>GitHub</span>
                            </a>
                            <a className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                                href={deployed_url}
                            >
                                <AiFillProject /><span>Project</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
                        <h3 className="mb-3 font-medium">{decription}</h3>
                        <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                            {
                                key_techs.map(tech =>( 
                                    <span key={tech+"tech"} className="px-2 py-1 bg-gray-200 dark:bg-dark-200 rounded">
                                        {tech}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                    <button onClick={() => setShowDetails(false)}
                        className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200" 
                    >
                        <MdClose size={30}/>
                    </button>
                </div>
            )}
        </div>
    )
}

export default ProjectCard