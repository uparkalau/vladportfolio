import { Category } from '@/type'
import React, { FunctionComponent } from 'react'

const NavItem:FunctionComponent<{value:Category | 'all', handleFilterCategory: Function, active: string}> = ({
    value,
    handleFilterCategory,
    active
}) => {
    let className = 'capitalize cursor-pointer hover:text-blue'
    if(active === value)
        className += " text-blue"
    return <li className={className} onClick={()=>handleFilterCategory(value)}>{value}</li>
}

const ProjectsNavbar: FunctionComponent<{handleFilterCategory: Function, active:string}> = (props) => {
  return (
    <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none '>
        <NavItem value='all' {...props}/>
        <NavItem value='react' {...props}/>
        <NavItem value='mongo' {...props}/>
        <NavItem value='node' {...props}/>
        <NavItem value='python' {...props}/>
    </div>
  )
}

export default ProjectsNavbar