import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { TiArrowDownThick } from "react-icons/ti";

import Resume from '../file/Resume.pdf'
import swal from 'sweetalert';

export default function Contact() {
    
    const contact = async () =>{
        navigator.clipboard.writeText('9324799571');
        swal({title:'Contact Details Copied'})

    }
  return (
    <div className=' text-white mt-24 md:pl-28 md:pr-28 md:mt-1 mb-10'  >
        <div className='p-4 flex items-center' id="contact">
                    
                    <h1 className='text-3xl font-downlinkBold md:text-4xl'>Contact&nbsp;&nbsp;</h1>
                    <div class="flex-grow border-4 border-gray-400"></div>
                   
        </div>
        <div className='mt-10 flex justify-center items-center'>
        <p className='pl-6 pr-6 font-serif text-gray-300 md:pt-8 md:text-2xl'>Get In Touch With Me To Get The Business Done!</p>          
        </div>
        <div className='grid grid-cols-5 justify-center items-center pl-3 md:pl-10 pt-10 md:pt-16'>
            <div>
                <a href='mailto:vinayakkadam935@gmail.com'><button className="flex items-center bg-gray-700 rounded-full transition-shadow ease-in-out md:hover:-translate-y-3 md:hover:scale-105 text-white font-serif py-2 px-6 md:py-4 md:px-8 md:text-3xl">
                <MdOutlineEmail/></button></a><br/>
                <p className='font-mono font-medium px-5 text-sm md:text-xl'>Email</p>
            </div>
            <div>
                <button className="flex items-center bg-gray-700 rounded-full  transition-shadow ease-in-out md:hover:-translate-y-3 md:hover:scale-105 text-white font-serif py-2 px-6 md:py-4 md:px-8 md:text-3xl" onClick={contact}>
                <HiPhone/></button><br/>
                <p className='font-mono font-medium px-3 text-sm md:text-xl'>Contact</p>
            </div>
            <div>
                <a href='https://github.com/Vinayak-Kadam-18'><button className="flex items-center bg-gray-700 rounded-full  transition-shadow ease-in-out md:hover:-translate-y-3 md:hover:scale-105 text-white font-serif py-2 px-6 md:py-4 md:px-8 md:text-3xl">
                <BsGithub/></button></a><br/>
                <p className='font-mono font-medium px-5 text-sm md:text-xl'>Github</p>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/vinayak-kadam/'><button className="flex items-center bg-gray-700 rounded-full  transition-shadow ease-in-out md:hover:-translate-y-3 md:hover:scale-105 text-white font-serif py-2 px-6 md:py-4 md:px-8 md:text-3xl">
                <SiLinkedin/></button></a><br/>
                <p className='font-mono font-medium px-3 text-sm md:text-xl'>LinkedIn</p>
            </div>
            <div>
                <button className="flex items-center bg-gray-700 rounded-full  transition-shadow ease-in-out md:hover:-translate-y-3 md:hover:scale-105 text-white font-serif py-2 px-6 md:py-4 md:px-8 md:text-3xl">
                <FaTwitter/></button><br/>
                <p className='font-mono font-medium px-4 text-sm md:text-xl'>Twitter</p>
            </div>

        </div>
        <div className='p-10 md:p-16'>
            <hr className='border-gray-500'/>
        </div>
        <div className='grid justify-center items-center'>
        <p className='font-serif text-gray-300 md:pt-1 md:text-2xl'>Wants To Know More?</p>   
        <p className='pt-5 pl-10'><a href={Resume} download="Vinayak-Kadam-Resume" target='_blank' rel="noopener noreferrer"><button className="flex items-center bg-black-500 rounded-full border border-pink-400 hover:bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-serif py-2 px-5 md:text-2xl">
        Resume&nbsp;<span>< TiArrowDownThick/></span>
        </button></a></p> 
        </div>

       
    </div>
  )
}
