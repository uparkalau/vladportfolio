import { services } from '../data'
import ServiceCard from '../components/ServiceCard'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/animations'

const index = () => {
    return (
        <div className="flex flex-col flex-grow px-6 pt-1">
            <h5 className="my-3 font-medium">
                Experienced result-oriented full-stack software engineer
                proficient in static and dynamic applications,
                client-side/server-side programming, and database architecture.
                Skilled in GUI development, Object-Oriented Programming, and the
                entire software lifecycle from requirements analysis to
                production support. Provides technical support for company
                projects and offers daily guidance to team members. Collaborates
                with the project team to develop, test, and implement software
                code.
            </h5>
            <div
                className="flex-grow p-4 mt-5"
                style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
            >
                <h6 className="my-3 text-xl font-bold tracking-wide">
                    What I offer
                </h6>
                <motion.div className="grid gap-6 my-3 lg:grid-cols-2">
                    {services.map((service) => (
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            key={service.title}
                            className="bg-gray-400 rounded-lg lg:col-span-1"
                        >
                            <ServiceCard
                                key={service.title}
                                service={service}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default index
