import React from "react";
import { Link } from 'react-scroll/modules';
import { Link as Links } from 'react-router-dom';
import { IoLogoTwitter } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";


export default function Navbar() {
  return (
    <>
      <nav  className="text-xs md:text-sm m-0 p-0 flex justify-between items-center h-16 text-white bg-zinc-900 shadow-lg font-semibold font-downlinkBold sticky top-0 z-50" role="navigation">
        <Links to="/" className="pl-8">
         
          LOGO
        </Links>

        {/* <div className="px-4 cursor-pointer hidden">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div> */}

        <div className="md:pl-8 text-center text-xs md:text-sm">
           <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={1400} className="p-3 md:mx-6 cursor-pointer  tracking-widest   ">About</Link>
            <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={1400} className="p-3 md:mx-6 cursor-pointer  tracking-widest ">Contact</Link>  
             <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={0}
            duration={1400} className="p-3 md:mx-6 cursor-pointer  tracking-widest ">Projects</Link>           
         
        </div>

        <div className=" pr-2 text-center md:block hidden">
          <div className="flex justify-center text-xl"> 
           <Link className="p-6  cursor-pointer " to="/about"><IoLogoTwitter className="md:hover:text-blue-500"/></Link>
            <a className="p-6 cursor-pointer" href="https://www.github.com/vinayak-kadam-18/"><BsGithub className="md:hover:text-red-600"/></a>  
            <a className="p-6 cursor-pointer" href="https://www.linkedin.com/in/vinayak-kadam/"><BsLinkedin className="md:hover:text-blue-400"/></a>  
         </div>
        </div>

      </nav>
    </>
  );
}
