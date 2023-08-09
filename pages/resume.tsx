import Bar from "@/components/Bar"
import { languages, devDeploymentTools, databases, frameworksAndLibraries } from "@/data"
import { motion } from 'framer-motion'
import { fadeInUp } from "@/animations"
const resume = () => {

  return (
    <div className="px-6 py-2">
      {/* education and exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">MindGeek: January 2023 -  April 2023</h5>
            <p className="font-semibold">Software Developer</p>
            <ul className="my-3 list-disc">
              <li className="ml-6">Collaborated with a team to maintain complex business problems and big data involving millions of participants.</li>
              <li className="ml-6">Writing, testing and debugging code (PHP)</li>
              <li className="ml-6">Worked closely with project teams to address data and computing challenges in high traffic online environments.</li>
              <li className="ml-6">Optimized and managed large databases for performance (MYSQL, NoSQL) </li>
              <li className="ml-6">Conducted server-side resource profiling, optimization, and debugging in a UNIX/Linux environment.</li>
            </ul>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <div>
            <h5 className="my-2 text-xl font-bold">MolecularYou February 2021 -  July 2022</h5>
            <p className="font-semibold">Software Engeneer</p>
            <ul className="my-3 list-disc">
              <li className="ml-6">Writing, testing and debugging front-end, back-end code that works across multiple browsers and cross platforms (tablets, desktops, mobile)(Ruby, React)</li>
              <li className="ml-6">Creating web services like REST API for front-end mobile application(Ruby on rails)</li>
              <li className="ml-6">Design, write, modify, integrate, and test front-end code, prototyping components and navigation structure for mobile application (react-native, figma)</li>
              <li className="ml-6">Using GitHub to update and deploy code.(Kubernetes, Docker)</li>
              <li className="ml-6">Made use of continuous integration and deployment (GitHub, AWS, GitHub Actions)</li>
            </ul>
          </div>
        </motion.div>
        <div>
          <div>
            <h5 className="my-2 text-xl font-bold">UBC OBER <a href="https://biobanking.org/" title="biobanking.org" target="_blank">Biobanking.org</a> April 2017 - February 2021</h5>
            <p className="font-semibold">WEB Developer</p>
            <ul className="my-3 list-disc">
              <li className="ml-6">Developing an operational database to store user online biobank education research data from the Biobank Resource Centre (Laravel, PHP). </li>
              <li className="ml-6">Design, plan and implement computer simulation of research data (Python).</li>
              <li className="ml-6">Participate in laboratory meetings and present work for review.</li>
              <li className="ml-6">Responsibility for customizing and developing ATiM (PHP, CakePhp)</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
          <h5 className="my-2 text-xl font-bold">Spritecs <a href="https://www.actamedical.com/" target="_blank">Actamedical.com</a>– February 2013 to August 2016</h5>
            <p className="font-semibold">WEB Developer</p>
            <ul className="my-3 list-disc">
              <li className="ml-6">Planned, architected, developed and maintained high-load systems.</li>
              <li className="ml-6">Developing a Sales / CRM software tech stack using CodeIgniter, MySQL, Smarty.</li>
              <li className="ml-6">Worked on client (JavaScript, jQuery), server (PHP, NGINX) and database (MariaDB)</li>
              <li className="ml-6">Created a friendly interface with advanced search, data structuring, information sharing, personalization capabilities and analytics areas.</li>
              <li className="ml-6">Successfully diagnosed, troubleshoot and resolve client issues</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h5 className="my-2 text-xl font-bold">Akavita January 2012 to February 2013</h5>
            <p className="font-semibold">WEB Developer</p>
            <ul className="my-3 list-disc">
              <li className="ml-6">Developed a high-load (millions of users) social network portal for the Asian market.</li>
              <li className="ml-6">Created and supported news and contact modules. (Node, Ember)</li>
              <li className="ml-6">Handled a complex environment with multiple server-side languages (PHP, NodeJS) and databases (MySQL, Redis). </li>
              <li className="ml-6">Developed client-side code based on Ember.js MVC framework.</li>
              <li className="ml-6">Using Javascript, CoffeeScript, JQuery in a high availability environment</li>
            </ul>
          </div>
        </div>
        {/* <div>
          <div>
            <h5 className="my-2 text-xl font-bold"></h5>
            <p className="font-semibold">WEB Developer</p>
            <ul className="my-3 list-disc">
              <li className="ml-6"></li>
              <li className="ml-6"></li>
              <li className="ml-6"></li>
              <li className="ml-6"></li>
              <li className="ml-6"></li>
            </ul>
          </div>
        </div> */}
      </div>
      <div className="grid md:grid-cols-1">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Bachelor of Computer Science (2004 - 2008)</h5>
            <p className="font-semibold">Belarusian State University of Informatics and Radioelectronics, Minsk, Belarus</p>
            <p className="my-3"> </p>
          </div>
        </div>
      </div>
      {/* languages and tools */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {
              languages.map(language => <Bar data={language} key={language.name} />)
            }
          </div>
        </div>
        {/* tools and software */}
          <div>
            <h5 className="my-3 text-2xl font-bold">Tools and Software</h5>
            <div className="my-2">
              {
                devDeploymentTools.map(tool => <Bar data={tool} key={tool.name} />)
              }
            </div>
          </div>
        {/* databases */}
          <div>
            <h5 className="my-3 text-2xl font-bold">Databases</h5>
            <div className="my-2">
              {
                databases.map(database => <Bar data={database} key={database.name} />)
              }
            </div>
          </div>
        
        {/* frameworksAndLibraries */}
          <div>
            <h5 className="my-3 text-2xl font-bold">Frameworks and Libraries</h5>
            <div className="my-2">
              {
                frameworksAndLibraries.map(frameworks => <Bar data={frameworks} key={frameworks.name} />)
              }
            </div>
          </div>
      </div>
    </div>
  )
}

export default resume