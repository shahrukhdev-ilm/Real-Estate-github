import React, { useEffect } from 'react'
import { assets } from '../assets/assets';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);
  return (
    <div  data-aos="zoom-in" data-aos-delay="50" className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1  data-aos="zoom-in" data-aos-delay="100" className='text-2xl sm:text-4xl font-bold mb-2'> About<span className='underline underline-offset-4 decoration-1 under font-light'> Our brand</span></h1>
        <p  data-aos="zoom-in" data-aos-delay="200" className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision.</p>
        <div  data-aos="zoom-in" data-aos-delay="210" className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
            <div className='flex flex-col  items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2x1:pr-28'>
                    <div>
                        <p className='text-5xl font-medium font-bold text-gray-800'>10+</p>
                        <p>Years of Excellence</p>
                    </div>
                     <div>
                        <p className='text-5xl font-medium font-bold text-gray-800'>12+</p>
                        <p>Projects Completed</p>
                    </div>
                     <div>
                        <p className='text-5xl font-medium font-bold text-gray-800'>20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                     <div>
                        <p className='text-5xl font-medium font-bold text-gray-800'>25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                    <p className='text-2xl my-10 max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                  <button className='bg-blue-600 text-white px-7 py-3.5 rounded text-sm block ml-15 mt-10 '>Learn more</button>
            </div>
          
        </div>
      </div>
  )
}

export default About
