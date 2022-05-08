import React from 'react'
import { SiJavascript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";

import profile from '../images/profile.jpg'
export default function About
() {
  return (
      
      
        <div className='container mx-auto text-white pt-24 md:pt-44 p-6 md:grid grid-cols-2  md:p-2' id="about">

            <div className='md:flex items-center justify-center sm:hidden md:px-10'>
                <img className=' justify-items-center md:w-100  rounded-tl-extraLarge rounded-br-extraLarge rounded-tr-2xl rounded-bl-2xl shadow-2xl hidden md:flex' src={profile} alt="err" />
            </div>
            <div>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-downlinkBold md:text-4xl' >About Us&nbsp;&nbsp;</h1>
                    <div class="flex-grow border-4 border-gray-400"></div>
                </div>

                    <p className='font-serif pt-10 text-md md:text-xl tracking-wide'>
                    Hello! My name is Vinayak and I enjoy creating things that live on
                    internet. My interest in we developement started back in 2021 when
                    i decided to try editing custom themes - turns out holding
                    together acustom relog button taught be about html & CSS.
                    <br />
                    Fast forward to today, and I've had the privilege of working at an{" "}
                    <b>
                    <span className='text-pink-400'>
                        advertising agency, a start-up, a huge corporation and student
                        led studio
                        </span>
                    </b>
                    . My main focus is to build accessible inculsive productand
                    digital experience at upstatement of variety of clients.
                    <br />
                    <br />
                    Here are few techologies i have been woking recently.
                    <br />
                    
                    </p>

                    <div className='grid grid-cols-2 font-serif text-md p-4 md:text-xl'>
                        <div>
                        <ul>
                            <li className='flex items-center pt-1 mr-3'>
                            Javascript &nbsp;&nbsp;&nbsp;
                            <SiJavascript
                                color="yellow"
                                style={{ backgroundColor: "black" }}
                            />
                            </li>
                            <li className='flex items-center pt-1'>
                            Bootstrap&nbsp;&nbsp;&nbsp;
                            <FaBootstrap color="purple" />
                            </li>
                            <li className='flex items-center pt-1'>
                            MongoDB&nbsp;
                            <SiMongodb color="green" />
                            </li>
                        </ul>
               
                        </div>

                        <div>
                        <ul>
                            <li className='flex items-center pt-1'>
                                React&nbsp;&nbsp;&nbsp;
                                <GrReactjs color="#00adf2" />
                            </li>
                            <li className='flex items-center pt-1'>
                                PHP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <FaPhp color="purple" />
                            </li>
                            <li className='flex items-center pt-1'>
                                Node js&nbsp;
                                <SiNodedotjs color="green" />
                            </li>
                        </ul>
                        </div>

                    </div>
                
            </div>
            
        </div>

  )
}
