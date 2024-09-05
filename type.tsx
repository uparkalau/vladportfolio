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

export interface Experience {
    company: string
    date: string
    role: string
    tasks: string[]
}

export interface Education {
    degree: string
    date: string
    institution: string
}

export interface EducationSectionProps {
    educations: Education[]
}

export interface ExperienceSectionProps {
    experiences: Experience[]
}

export interface Language {
    name: string
    level: string
    Icon: IconType
}

export interface LanguagesToolsSectionProps {
    items: Language[]
    title: string
}

export type Category =
    | 'react'
    | 'node'
    | 'express'
    | 'python'
    | 'PHP'
    | 'ruby'
    | 'mobile'
    | 'php'
    | 'mysql'
    | 'bootstrap'
    | 'wordpress'
    | 'jquery'
    | 'react-native'
    | 'lamp'
    | 'javascript'
    | 'drupal'
