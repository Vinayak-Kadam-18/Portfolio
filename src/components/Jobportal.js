import React,{ useEffect} from 'react'


export default function Jobportal() {
    useEffect(() => {
        window.scrollTo(0,0);
     }, []) 
  return (
    <div className='container mx-auto font-serif text-white mt-4 md:mt-8 p-6 md:grid  md:p-10'>
         <div className='flex items-center' id="contact">
                    
                    <h1 className='text-3xl font-downlinkBold md:text-4xl'>Jobportal&nbsp;&nbsp;</h1>
                    <div class="flex-grow border-2 border-gray-400"></div>
                   
        </div>
        <div>
            <p className='font-serif pt-10 text-md md:text-xl tracking-wide'>
                <p>The Jobportal website is made using <span className='text-pink-500 font-bold'> PHP</span> and <span className='text-pink-500 font-bold'>MySQL</span></p><br/>
                The system has following requirements:
                <div className='pl-4'>
                    <p>•	Job seekers Registration.</p>
                    <p>•	Job seekers Login.</p>
                    <p>•	Candidates can search and view all jobs.</p>
                    <p>•	Advanced search can be done on basis of role, location and type of job etc.</p>
                    <p>•	Candidates can apply for more than one job.</p>
                    <p>•	Candidates can view all of the posted jobs by a company.</p>
                    <p>•	Job seekers can view all their applied jobs.</p>
                    <p>•	Job seekers can update their information.</p>
                    <p>•	Job seekers get job recommendation.</p>
                    <p>•	Job seekers can upload their resume.</p>
                    <p>•	Companies and organizations can register.</p>
                    <p>•	Companies can post the jobs.</p>
                    <p>•	Companies can view all of their posted job.</p>
                    <p>•	Companies can view the a</p>
                </div>


            </p>
        </div>

        <div className='flex items-center pt-20' id="contact">                    
                    <h1 className='text-3xl font-downlinkBold md:text-4xl'>Github&nbsp;&nbsp;</h1>
                    <div class="flex-grow  border-2 border-gray-400"></div>                   
        </div>
        <div className='pt-8'>
            <p className='text-xl pb-3'>To view Repository:</p>
            <a className='underline  text-blue-400 md:text-xl  ' href='https://github.com/Vinayak-Kadam-18/jobportal'>https://github.com/Vinayak-Kadam-18/Jobportal</a>
        </div>



        <div className='flex items-center pt-20' id="contact">                    
                    <h1 className='text-3xl font-downlinkBold md:text-4xl'>Website&nbsp;&nbsp;</h1>
                    <div class="flex-grow border-2 border-gray-400"></div>                   
        </div>
        <div className='pt-8'>
            <p className='text-xl pb-3'>To view Live Demo:</p>
            <a className='underline text-blue-400 md:text-xl  ' href='https://vk-jobportals.000webhostapp.com'>https://vk-jobportals.000webhostapp.com</a>
        </div>

    </div>
  )
}
