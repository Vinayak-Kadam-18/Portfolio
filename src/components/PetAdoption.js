import React,{ useEffect} from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://raw.githubusercontent.com/Vinayak-Kadam-18/Pet-Adoption-Website/master/screenshots//1.png" },
    { url: "https://raw.githubusercontent.com/Vinayak-Kadam-18/Pet-Adoption-Website/master/screenshots//2.png" },
    { url: "https://raw.githubusercontent.com/Vinayak-Kadam-18/Pet-Adoption-Website/master/screenshots//3.png" },
    { url: "https://raw.githubusercontent.com/Vinayak-Kadam-18/Pet-Adoption-Website/master/screenshots//4.png" },  
];
export default function PetAdoption() {
    useEffect(() => {
        window.scrollTo(0,0);
     }, []) 
  return (
    <div className='container mx-auto font-serif text-white mt-4 md:mt-8 p-6 md:grid  md:p-10'>
         <div className='flex items-center' id="contact">
                    
                    <h1 className='text-3xl font-downlinkBold md:text-4xl'>Pet Adoption&nbsp;&nbsp;</h1>
                    <div class="flex-grow border-2 border-gray-400"></div>
                   
        </div>
        <div>
            <p className='font-serif pt-10 text-md md:text-xl tracking-wide'>
                <p>The Pet Adoption website is made using <span className='text-pink-500 font-bold'> MERN stack.</span></p><br/>
                <p className='text-gray-200'><b>The pet adoption web application stores the following information.</b></p>
                <p className='pt-3'><span className='text-pink-500 font-bold '>User details:</span></p>
                <p>It will include user name, user email id, user pin-code. This information will be used for display to
                other users who want to adopt pet or give pet for adoption or vise-versa.</p><br/>
                <p><span className='text-pink-500 font-bold'>Pet description:</span></p>
                <p>It will include detail information about a pet, like pet age, pet image, pet location, type of pet,
                pet breed (if any). All this information will be useful for the user who wants to adopt the pet</p>


            </p>
        </div>

        <div className='flex items-center pt-20' id="contact">                    
                    <h1 className='text-3xl font-downlinkBold md:text-4xl'>Github&nbsp;&nbsp;</h1>
                    <div class="flex-grow  border-2 border-gray-400"></div>                   
        </div>
        <div className='pt-8'>
            <p className='text-xl pb-3'>To view Repository:</p>
            <a className='underline  text-blue-400 md:text-xl  ' href='https://github.com/Vinayak-Kadam-18/Pet-Adoption-Website'>https://github.com/Vinayak-Kadam-18/Pet-Adoption-Website</a>
        </div>



        <div className='flex items-center pt-20' id="contact">                    
                    <h1 className='text-3xl font-downlinkBold md:text-4xl'>Website&nbsp;&nbsp;</h1>
                    <div class="flex-grow border-2 border-gray-400"></div>                   
        </div>
        <div className='pt-8'>
            <p className='text-xl pb-3'>To view Live Demo:</p>
            <a className='underline text-blue-400 md:text-xl  ' href='https://petsmaart.netlify.app/'>https://petsmaart.netlify.app/</a>
        </div>
        
        <div className='hidden md:block'>
            <div className='flex items-center pt-20' id="snap">                    
                        <h1 className='text-3xl font-downlinkBold md:text-4xl'>Snapshots&nbsp;&nbsp;</h1>
                        <div class="flex-grow border-2 border-gray-400"></div>                   
            </div>
            <br/><br/>
            <div align="center">
            <SimpleImageSlider
            
            width={758}
            height={350}
            images={images}
            showBullets={false}
            showNavs={false}
            autoPlay={true}
            autoPlayDelay={4}
            slideDuration={1}
        />
            </div>
         </div>
       
    </div>
  )
}
