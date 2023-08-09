import { VscGithub } from 'react-icons/vsc';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { GoLocation } from 'react-icons/go';
import { FaUserTie } from 'react-icons/fa';
import Image from 'next/image';
import avatar from '../public/avatar.jpg';
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () =>{
    setTheme(theme==="light"?"dark":"light")
  }

  return (
    <div className="p-4 space-y-4">
      {/* Avatar */}
      <Image
        src={avatar}
        alt="my avatar"
        className="mx-auto rounded-xl"
        height={128}
        width={128}
        layout='intrinsic'
        quality={100}
      />

      {/* Name */}
      <h3 className="my-4 text-3xl font-medium tracking-wider font-VictorMono">
        <span>Vlad </span>Parkalau
      </h3>

      {/* Job title */}
      <p className="px-2 py-1 my-3 bg-gray-400 rounded-xl">Full Stack Developer</p>

      {/* Download Resume */}
      <a
        href="https://docs.google.com/document/d/e/2PACX-1vSxqBm9fMwZzJSZCVH0mps1b_-sHPNCgvjpNYvgyqzHxU-bQbBl98nUd8WJPr-ACRRB4OeqXLxIzqKW/pub"
        target='_blank'
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-400 rounded-xl"
        download="https://docs.google.com/document/d/e/2PACX-1vSxqBm9fMwZzJSZCVH0mps1b_-sHPNCgvjpNYvgyqzHxU-bQbBl98nUd8WJPr-ACRRB4OeqXLxIzqKW/pub"
      >
        <FaUserTie className="w-6 h-6 py-1" />
        Download Resume
      </a>

      {/* Social Icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-500 md:w-full">
        <a href="https://www.linkedin.com/in/vlad-parkalau/" target='_blank'>
          <TiSocialLinkedinCircular className="cursor-pointer w-7 h-7" />
        </a>
        <a href="">
          <VscGithub className="cursor-pointer w-7 h-7" />
        </a>
      </div>

      {/* Address */}
      <div className="py-4 my-5 bg-gray-400 rounded-xl">
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-5 h-5" />
          <span>Vancouver BC, Canada</span>
        </div>
        <p className="my-2">+17789278465</p>
      </div>

      {/* Email Me */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-xl bg-gradient-to-l from-blue-300 to-blue-600 focus:outline-none"
        onClick={() => window.open('mailto:uladzimir.parkalau@gmail.com')}
      >
        Email Me
      </button>

      {/* Toggle Theme */}
      <button 
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 text-white rounded-xl bg-gradient-to-l from-blue-300 to-blue-600">
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
