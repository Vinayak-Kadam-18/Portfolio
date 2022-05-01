import React from "react";
import { Link } from 'react-scroll/modules';
import { IoLogoTwitter } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";


export default function Navbar() {
  return (
    <>
      <nav className="m-0 p-0 flex justify-between items-center h-16 text-white bg-zinc-900 shadow-lg font-semibold font-downlinkBold sticky top-0 z-50" role="navigation">
        <Link to="/" className="pl-8">
         
          LOGO
        </Link>

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

        <div className="pl-8 text-center cursor-pointer text-sm">
           <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={1400} className="p-3 md:p-6 tracking-widest ">About</Link>
            <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={1400} className="p-3 md:p-6 tracking-widest ">Contact</Link>  
             <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={0}
            duration={1400} className="p-3 md:p-6 tracking-widest ">Projects</Link>           
         
        </div>

        <div className=" pr-2 text-center md:block hidden">
          <div className="flex justify-center text-xl"> 
           <Link className="p-6  " to="/about"><IoLogoTwitter/></Link>
            <Link className="p-6" to="/cotact"><BsGithub/></Link>  
            <Link className="p-6" to="/linkedn"><BsLinkedin/></Link>  
         </div>
        </div>

      </nav>
    </>
  );
}
