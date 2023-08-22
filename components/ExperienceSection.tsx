import React, { FunctionComponent } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/animations'
import { ExperienceSectionProps } from '@/type'

const ExperienceSection: FunctionComponent<ExperienceSectionProps> = ({
    experiences,
}) => {
    return (
        <>
            {experiences.map((experience, index) => (
                <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    className="my-2"
                >
                    <h5 className="my-2 text-xl font-bold">
                        {experience.company}: {experience.date}
                    </h5>
                    <p className="font-semibold">{experience.role}</p>
                    <ul className="my-3 list-disc">
                        {experience.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="ml-6">
                                {task}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </>
    )
}

export default ExperienceSection
