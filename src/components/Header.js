import React from 'react'
import { Link } from 'react-scroll/modules';
import developerlogo from '../images/programmer.png';
import { MdAddIcCall } from 'react-icons/md';
export default function Header() {
  return (
    <>
    <div className='text-white md:pt-20 md:pl-24'>
        <p className='pt-10 pl-10 font-downlinkBold text-md md:text-2xl md:pt-20 '>HI THERE👋.I'M</p>
        <p className='pt-5 pl-10 font-downlinkBold  tracking-wider text-3xl md:text-7xl '>Vinayak Kadam</p>
        <p className='pt-4 pl-10 font-nova tracking-wider flex text-2xl md:pt-8  md:text-4xl'><span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-pink-500 to-pink-500'>Designer + Developer&nbsp;</span> <img src={developerlogo} alt="dev"/></p>
        <p className=" font-sans font-semibold text-xl pt-3 pl-10  text-gray-400 md:text-2xl md:pt-5 md:w-2/4">
            I am Student Based In Mumbai,India<br/>
            Passionate About Building High Quality Website
        </p>
       
        <p className='pt-5 pl-10'>
          <Link
      activeClass="active"
      to="contact"
     spy={true}
     smooth={true}
     offset={50}
     duration={1400}>
        <button className="flex items-center bg-black-500 rounded-full border border-indigo-400 hover:bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-serif py-2 px-4 md:text-2xl">
        <MdAddIcCall />&nbsp;Get In Touch
        </button></Link></p>
    </div>
  </>
  )
}
