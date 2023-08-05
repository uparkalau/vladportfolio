

import { IProject, IService, ISkill } from './type'
import { IoLogoIonic } from 'react-icons/io';
import { CgCPlusPlus } from 'react-icons/cg';
import { BsCircleFill, BsFiletypeXml } from 'react-icons/bs'
import { FaReact, FaNodeJs, FaGit, FaGithub, FaGitlab, FaAws, FaDocker, FaLinux, FaWindows, FaApple, FaCodeBranch, FaJira, FaGoogle } from 'react-icons/fa';
import { DiMysql, DiRedis, DiMongodb, DiPostgresql, DiSymfonyBadge, DiDrupal, DiWordpress, DiPhp, DiRuby, DiJavascript1, DiPython, DiHtml5, DiCss3, DiDotnet, DiLaravel } from 'react-icons/di';
import { SiApache, SiCakephp, SiKubernetes, SiNginx } from 'react-icons/si';
import { RiBookLine, RiCodepenLine, RiComputerLine, RiDatabaseLine, RiToolsLine } from 'react-icons/ri'
import { BiCodeAlt, BiLibrary } from 'react-icons/bi'
import { GoDeviceDesktop } from 'react-icons/go'

export const services: IService[] = [
    {
        title: "Web Apps Development",
        description: "Welcome! I create amazing web apps using MERN stack <b>MongoDB, Express, React, Node & HTML</b>, <b>CSS</b>.",
        Icon: RiCodepenLine,
    },
    {
        title: "Full-stack Expertise",
        description: "I build frontend & backend using <b>C#</b>, <b>.NET</b>, <b>JS</b>, <b>Ruby</b>, <b>PHP</b>, <b>Python</b>. UI design to keep users delighted!",
        Icon: RiComputerLine,
    },
    {
        title: "Database Management",
        description: "Master in <b>MySql</b>, <b>MariaDB</b>, <b>Redis</b>, <b>MongoDB</b>, <b>PostgreSQL</b>. Seamlessly manage data for seamless experiences.",
        Icon: RiDatabaseLine,
    },
    {
        title: "API Development",
        description: "Expert in building robust & scalable APIs for modern web apps. Latest tech & best practices.",
        Icon: BiCodeAlt,
    },
    {
        title: "Cutting-edge Tech",
        description: "Utilize <b>React</b>, <b>React-native</b>, <b>Ember</b>, <b>Vue</b>, <b>Node</b>, <b>Symfony</b> for impressive & engaging apps.",
        Icon: BiLibrary,
    },
    {
        title: "Dev & Deployment",
        description: "Efficient project management & version control with <b>Git</b>, <b>GitHub</b>, <b>GitLab</b>, <b>CI/CD</b>, <b>JIRA</b>. Smooth & scalable deployment.",
        Icon: RiToolsLine,
    },
    {
        title: "Operating Systems",
        description: "Deliver top-notch apps on <b>Windows</b>, <b>Linux</b>, <b>MacOS</b>. Seamless & immersive experiences for users.",
        Icon: GoDeviceDesktop,
    },
    {
        title: "Education",
        description: "Bachelor's in Computer Science from <b>Belarusian State University of Informatics and Radioelectronics</b>. Always up-to-date with tech!",
        Icon: RiBookLine,
    },
];

export const languages: ISkill[] = [
    // Languages
    {
        name: 'PHP',
        level: '85%',
        Icon: DiPhp
    },
    {
        name: 'JavaScript',
        level: '95%',
        Icon: DiJavascript1
    },
    {
        name: 'Python',
        level: '90%',
        Icon: DiPython
    },
    {
        name: 'Ruby',
        level: '75%',
        Icon: DiRuby
    },
    {
        name: 'C#',
        level: '90%',
        Icon: DiDotnet
    },
    {
        name: 'C/C++',
        level: '80%',
        Icon: CgCPlusPlus
    }
];

export const databases: ISkill[] = [
    // Databases
    {
        name: 'MySql',
        level: '85%',
        Icon: DiMysql
    },
    {
        name: 'MariaDB',
        level: '75%',
        Icon: DiMysql
    },
    {
        name: 'Redis',
        level: '80%',
        Icon: DiRedis
    },
    {
        name: 'MongoDB',
        level: '85%',
        Icon: DiMongodb
    },
    {
        name: 'PostgreSQL',
        level: '90%',
        Icon: DiPostgresql
    }
];

export const frameworksAndLibraries: ISkill[] = [
    // Frameworks and libraries
    {
        name: 'React',
        level: '95%',
        Icon: FaReact
    },
    {
        name: 'React-native',
        level: '85%',
        Icon: FaReact
    },
    {
        name: 'Laravel',
        level: '85%',
        Icon: DiLaravel
    },
    {
        name: 'Node',
        level: '65%',
        Icon: FaNodeJs
    },
    {
        name: 'Symfony',
        level: '75%',
        Icon: DiSymfonyBadge
    },
    {
        name: 'Vue',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'JQuery',
        level: '55%',
        Icon: BsCircleFill
    },
    {
        name: 'Ember',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'CodeIgniter',
        level: '75%',
        Icon: IoLogoIonic
    },
    {
        name: 'Smarty',
        level: '70%',
        Icon: BiCodeAlt
    },
    {
        name: '.NET',
        level: '55%',
        Icon: DiDotnet
    },
    {
        name: 'HTML',
        level: '85%',
        Icon: DiHtml5
    },
    {
        name: 'XML',
        level: '40%',
        Icon: BsFiletypeXml
    },
    {
        name: 'CSS',
        level: '45%',
        Icon: DiCss3
    },
    {
        name: 'Drupal',
        level: '35%',
        Icon: DiDrupal
    },
    {
        name: 'Wordpress',
        level: '40%',
        Icon: DiWordpress
    },
    {
        name: 'CakePHP',
        level: '75%',
        Icon: SiCakephp
    }
];

export const devDeploymentTools: ISkill[] = [
    // Development & Deployment Tools
    {
        name: 'GitHub',
        level: '85%',
        Icon: FaGithub
    },
    {
        name: 'GitLab',
        level: '80%',
        Icon: FaGitlab
    },
    {
        name: 'GIT',
        level: '90%',
        Icon: FaGit
    },
    {
        name: 'SVN',
        level: '55%',
        Icon: FaCodeBranch
    },
    {
        name: 'CI/CD',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name: 'JIRA',
        level: '75%',
        Icon: FaJira
    },
    {
        name: 'Apache',
        level: '85%',
        Icon: SiApache
    },
    {
        name: 'Nginx',
        level: '75%',
        Icon: SiNginx
    },
    {
        name: 'AWS',
        level: '55%',
        Icon: FaAws
    },
    {
        name: 'GCP',
        level: '45%',
        Icon: FaGoogle
    },
    {
        name: 'Kubernetes',
        level: '45%',
        Icon: SiKubernetes
    },
    {
        name: 'Docker',
        level: '47%',
        Icon: FaDocker
    }
];

export const operatingSystems: ISkill[] = [
    // Operating Systems
    {
        name: 'Windows',
        level: '75%',
        Icon: FaWindows
    },
    {
        name: 'Linux',
        level: '76%',
        Icon: FaLinux
    },
    {
        name: 'MacOS',
        level: '77%',
        Icon: FaApple
    }
];

export const projects:IProject[] = [
    {
        name: "ToDo List",
        decription: "This web page allow you to create , modify your ToDo's tasks",
        image_path: '/images/ToDoList.png',
        deployed_url: 'https://singular-nougat-74e7f3.netlify.app/',
        github_url: 'https://github.com/uparkalau/mern-todo-client/',
        category: ["node", "express", "react","mongo"],
        key_techs: ["React", "Redux", "Bootstrap"]
    },
    {
        name: "ToDo2 List2",
        decription: "This web page allow you to create , modify your ToDo's tasks",
        image_path: '/images/ToDoList.png',
        deployed_url: 'https://singular-nougat-74e7f3.netlify.app/',
        github_url: 'https://github.com/uparkalau/mern-todo-client/',
        category: ["react","mongo"],
        key_techs: ["Bootstrap"]
    },
    {
        name: "ToDo3 List3",
        decription: "This web page allow you to create , modify your ToDo's tasks",
        image_path: '/images/ToDoList.png',
        deployed_url: 'https://singular-nougat-74e7f3.netlify.app/',
        github_url: 'https://github.com/uparkalau/mern-todo-client/',
        category: ["node", "mongo"],
        key_techs: ["Redux", "Bootstrap"]
    },
]
