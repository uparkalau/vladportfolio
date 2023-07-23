
import { RiBookLine, RiCodepenLine, RiComputerLine, RiDatabaseLine, RiToolsLine } from 'react-icons/ri'
import { BiCodeAlt, BiLibrary } from 'react-icons/bi'
import { GoDeviceDesktop } from 'react-icons/go'
import { IService } from './type'



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


