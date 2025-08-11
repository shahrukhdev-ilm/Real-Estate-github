import { useEffect } from 'react'
import React from 'react'
import Navbar from './Navbar'
import Aos from 'aos'

export const Header = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: "url('/header_img.png')"}} id='Header'>
      <Navbar />

    <div data-aos="zoom-in" data-aos-delay="50" className='container text-center mx-auto py-4 px-4 md:px-20 lg:px-32 text-white'>
        <h2  data-aos="zoom-in" data-aos-delay="100" className='text-5x1 sm:text-6x1 md:text-[82px] inline-block max-w-3x1 font-semibold pt-20'>
            Explore homes that fit your dreams
        </h2>
        <div  data-aos="zoom-in" data-aos-delay="200" className='space-x-6 mt-16'>
            <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
            <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
        </div>
    </div>
    </div>
  )
}

export default Header

