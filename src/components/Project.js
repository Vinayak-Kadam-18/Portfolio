import React from 'react'
import Cards from './Cards'
import card2 from "../images/donny.jpg";
import card3 from "../images/petadoption.jpg";

import card1 from '../images/cardimg.jpg'
export default function Project() {
  return (
    <div className='p-6 text-white  pt-24 md:mt-30 md:p-28' id="project">
        <div className='flex items-center'>
                    
                    <h1 className='text-3xl font-downlinkBold md:text-4xl' >Projects&nbsp;&nbsp;</h1>
                    <div class="flex-grow border-4 border-gray-400"></div>
                    
        </div>
        <div className='grid grid-cols-1 items-center m-auto justify-items-center  md:grid md:grid-cols-3 md:pt-10'>
            <div className='pt-10 '> <Cards  title="Jobportal" imgsrc={card1} desc="Jobportals are an integral part of almost every hiring process and using them effectively will translate into qualified candidates for relatively low costs" to="/jobportal"/></div>
            <div className='pt-10 '> <Cards title="Portfolio" imgsrc={card2} desc="a portfolio website provides professional information about an individual or a company and presents a showcase of their work" /></div>
            <div className='pt-10 '> <Cards title="Pet Adoption" imgsrc={card3} desc="Having your own website is an exceptional way to showcase your individuality and put forth the best representation of your hotel online." to="/Pet-Adoption" />
</div>
        </div>
    </div>
  )
}
