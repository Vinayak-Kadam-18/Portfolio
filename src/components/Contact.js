import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { TiArrowDownThick } from "react-icons/ti";

import Resume from '../file/resume.pdf'

export default function Contact() {
    
  return (
    <div className='p-6 text-white mt-24 md:pl-28 md:pr-28 md:mt-1' >
        <div className='flex items-center' id="contact">
                    
                    <h1 className='text-3xl font-downlinkBold md:text-4xl'>Contact&nbsp;&nbsp;</h1>
                    <div class="flex-grow border-4 border-gray-400"></div>
                   
        </div>
        <div className='mt-10 flex justify-center items-center'>
        <p className='font-serif text-gray-300 md:pt-8 md:text-2xl'>Get In Touch With Me To Get The Business Done!</p>          
        </div>
        <div className='grid grid-cols-5 justify-items-center pt-10 md:pt-16'>
            <div>
                <button className="flex items-center bg-gray-700 rounded-full transition-shadow ease-in-out hover:-translate-y-3 hover:scale-105 text-white font-serif py-2 px-6 md:py-4 md:px-8 md:text-3xl">
                <MdOutlineEmail/></button><br/>
                <p className='font-mono font-medium px-5 text-sm md:text-xl'>Email</p>
            </div>
            <div>
                <button className="flex items-center bg-gray-700 rounded-full  transition-shadow ease-in-out hover:-translate-y-3 hover:scale-105 text-white font-serif py-2 px-6 md:py-4 md:px-8 md:text-3xl" onClick={() =>  navigator.clipboard.writeText('9324799571')}>
                <HiPhone/></button><br/>
                <p className='font-mono font-medium px-3 text-sm md:text-xl'>Contact</p>
            </div>
            <div>
                <button className="flex items-center bg-gray-700 rounded-full  transition-shadow ease-in-out hover:-translate-y-3 hover:scale-105 text-white font-serif py-2 px-6 md:py-4 md:px-8 md:text-3xl">
                <BsGithub/></button><br/>
                <p className='font-mono font-medium px-5 text-sm md:text-xl'>Github</p>
            </div>
            <div>
                <button className="flex items-center bg-gray-700 rounded-full  transition-shadow ease-in-out hover:-translate-y-3 hover:scale-105 text-white font-serif py-2 px-6 md:py-4 md:px-8 md:text-3xl">
                <SiLinkedin/></button><br/>
                <p className='font-mono font-medium px-3 text-sm md:text-xl'>LinkedIn</p>
            </div>
            <div>
                <button className="flex items-center bg-gray-700 rounded-full  transition-shadow ease-in-out hover:-translate-y-3 hover:scale-105 text-white font-serif py-2 px-6 md:py-4 md:px-8 md:text-3xl">
                <FaTwitter/></button><br/>
                <p className='font-mono font-medium px-4 text-sm md:text-xl'>Twitter</p>
            </div>

        </div>
        <div className='p-10 md:p-16'>
            <hr className='border-gray-500'/>
        </div>
        <div className='grid justify-center items-center'>
        <p className='font-serif text-gray-300 md:pt-1 md:text-2xl'>Wants To Know More?</p>   
        <p className='pt-5 pl-10'><a href={Resume} download="Vinayak-Kadam-Resume" target='_blank' rel="noopener noreferrer"><button className="flex items-center bg-black-500 rounded-full border border-neon hover:bg-neon hover:text-black text-white font-serif py-2 px-5 md:text-2xl">
        Resume&nbsp;<TiArrowDownThick/>
        </button></a></p> 
        </div>

       
    </div>
  )
}
