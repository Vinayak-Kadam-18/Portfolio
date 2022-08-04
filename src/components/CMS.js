import React,{ useEffect} from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://raw.githubusercontent.com/Vinayak-Kadam-18/Course_Managemet_System/master/Course_System/Screenshots/1.PNG" },
    { url: "https://raw.githubusercontent.com/Vinayak-Kadam-18/Course_Managemet_System/master/Course_System/Screenshots/2.PNG" },
    { url: "https://raw.githubusercontent.com/Vinayak-Kadam-18/Course_Managemet_System/master/Course_System/Screenshots/3.PNG" },
    { url: "https://raw.githubusercontent.com/Vinayak-Kadam-18/Course_Managemet_System/master/Course_System/Screenshots/4.PNG" },
    { url: "https://raw.githubusercontent.com/Vinayak-Kadam-18/Course_Managemet_System/master/Course_System/Screenshots/5.PNG" },
   
  ];

export default function PetAdoption() {
    useEffect(() => {
        window.scrollTo(0,0);
     }, []) 
  return (
    <div className='container mx-auto font-serif text-white mt-4 md:mt-8 p-6 md:grid  md:p-10'>
         <div className='flex items-center' id="contact">
                    
                    <h1 className='text-3xl font-downlinkBold md:text-4xl'>Course Management System&nbsp;&nbsp;</h1>
                    <div class="flex-grow border-2 border-gray-400"></div>
                   
        </div>
        <div>
            <p className='font-serif pt-10 text-md md:text-xl tracking-wide'>
                <p>The Course management system is made using <span className='text-pink-500 font-bold'> Dot Net Technology.</span></p><br/>
                <p className='text-gray-200'><b>The CMS have 3 modules</b></p>
                <p className='pt-3'><span className='text-pink-500 font-bold '>Admin:</span></p>
                <p>The role of admin is to Add/Edit/Delete the student and teacher into the course management system. They registeration part 
                    is done by admin. The courses and modules is also done by admin on behalf of respective teachers.</p><br/>
                <p><span className='text-pink-500 font-bold'>Student</span></p>
                <p>The students can view only those course in which they are enrolled. They can complete assignments and quiz of that course.
                </p><br/>
                <p><span className='text-pink-500 font-bold'>Teacher</span></p>
                <p>The teacher can view all the students information which are enrolled in the courses. They can also view the submitted assignments and the quizes.
                     </p>


            </p>
        </div>

        <div className='flex items-center pt-20' id="contact">                    
                    <h1 className='text-3xl font-downlinkBold md:text-4xl'>Github&nbsp;&nbsp;</h1>
                    <div class="flex-grow  border-2 border-gray-400"></div>                   
        </div>
        <div className='pt-8'>
            <p className='text-xl pb-3'>To view Repository:</p>
            <a className='underline  text-blue-400 md:text-xl  ' href='https://github.com/Vinayak-Kadam-18/Course_Managemet_System'>https://github.com/Vinayak-Kadam-18/Course_Managemet_System</a>
        </div>



        <div className='flex items-center pt-20' id="contact">                    
                    <h1 className='text-3xl font-downlinkBold md:text-4xl'>Website&nbsp;&nbsp;</h1>
                    <div class="flex-grow border-2 border-gray-400"></div>                   
        </div>
        <div className='pt-8'>
            <p className='text-xl pb-3'>To view Live Demo:</p>
            <p className=' md:text-xl  ' >The Project is currently ongoing and not fully completed.</p>
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
            autoPlayDelay={5}
            slideDuration={1}
        />
            </div>
         </div>
    </div>
  )
}
