import React, { FunctionComponent } from 'react'
import { Category } from '@/type'
import { categoryValues } from '@/data'

interface NavItemProps {
    value: Category
    handleFilterCategory: (category: Category) => void
    active: boolean
}

const NavItem: FunctionComponent<NavItemProps> = ({
    value,
    handleFilterCategory,
    active,
}) => {
    const className = `capitalize cursor-pointer hover:text-blue ${
        active ? 'text-blue' : ''
    }`

    return (
        <li className={className} onClick={() => handleFilterCategory(value)}>
            {value}
        </li>
    )
}

interface ProjectsNavbarProps {
    handleFilterCategory: (category: Category) => void
    active: string
}

const ProjectsNavbar: FunctionComponent<ProjectsNavbarProps> = ({
    handleFilterCategory,
    active,
}) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
            {categoryValues.map((category) => (
                <NavItem
                    key={category}
                    value={category}
                    handleFilterCategory={handleFilterCategory}
                    active={category === active}
                />
            ))}
        </div>
    )
}

export default ProjectsNavbar
