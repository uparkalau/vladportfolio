import { IconType } from 'react-icons'

export interface IService {
    title: string
    description: string
    Icon: IconType
}

export interface ISkill {
    name: string
    level: string
    Icon: IconType
}

export interface IProject {
    name: string
    decription: string
    image_path: string
    deployed_url: string
    github_url: string
    category: Category[]
    key_techs: string[]
}

export type Category = 'react' | 'node' | 'express' | 'python' | 'PHP' | 'mongo'
