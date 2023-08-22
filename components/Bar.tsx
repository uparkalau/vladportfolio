import { motion } from 'framer-motion'
import { ISkill } from '@/type'
import { FunctionComponent } from 'react'

const Bar: FunctionComponent<{ data: ISkill }> = ({
    data: { Icon, level, name },
}) => {
    const variants = {
        initial: {
            width: 0,
        },
        animate: {
            width: level,
            transition: {
                duration: 0.4,
                type: 'spring',
                damping: 10,
                stiffness: 100,
            },
        },
    }
    return (
        <div className="my-2 text-white bg-gray-300 rounded-full">
            <motion.div
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-300 to-blue-600"
                style={{ width: level }}
                variants={variants}
                initial="initial"
                animate="animate"
            >
                <Icon className="mr-3" />
                {name}
            </motion.div>
        </div>
    )
}

export default Bar
