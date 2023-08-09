import React from 'react'
import Link from 'next/link'

type NavItemProps = {
    activeItem: string
    setActiveItem: (name: string) => void
    name: string
    route: string
}

const NavItem = ({ activeItem, setActiveItem, name, route }: NavItemProps) => {
    return (
        activeItem !== name && (
            <Link href={route}>
                <span
                    className="hover:text-blue-800"
                    onClick={() => setActiveItem(name)}
                >
                    {name}
                </span>
            </Link>
        )
    )
}

export default NavItem
