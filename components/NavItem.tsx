import React from 'react'
import Link from 'next/link'

interface NavItemProps {
    activeItem: string
    setActiveItem: (name: string) => void
    name: string
    route: string
}

const NavItem: React.FC<NavItemProps> = ({
    activeItem,
    setActiveItem,
    name,
    route,
}) => {
    const handleClick = () => {
        setActiveItem(name)
    }

    return activeItem !== name ? (
        <Link href={route}>
            <span
                className="hover:text-blue-800 cursor-pointer"
                onClick={handleClick}
            >
                {name}
            </span>
        </Link>
    ) : null
}

export default NavItem
