import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';

        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [showMobileMenu])

        useEffect(() => {
            Aos.init({
                duration: 800,
                delay: 200,
                once: false,
            });
        }, []);

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
         <img data-aos="zoom-in" data-aos-delay="50"  src={assets.logo} alt="Estate logo" className="mr-2" />
         <ul className='hidden md:flex gap-7 text-white'>
            <a  data-aos="zoom-in" data-aos-delay="50" href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
            <a  data-aos="zoom-in" data-aos-delay="100" href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
            <a  data-aos="zoom-in" data-aos-delay="200" href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
            <a  data-aos="zoom-in" data-aos-delay="300" href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
         </ul>
                 <button
                     data-aos="zoom-in"
                     data-aos-delay="100"
                     className='hidden md:block bg-white px-8 py-2 rounded-full'
                     onClick={() => setShowSignUpModal(true)}
                 >
                     Sign Up
                 </button>
         <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt='Menu icon' />
            </div>
            <div className={`md:hidden ${showMobileMenu ? 'fixed w-full ' :  'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end p-6 cursor-pointer'>   
                    <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>    
                    <a onClick={()=> setShowMobileMenu(false)} href='#Header' className='px-4 py-2 rounded-full inline-block'>Home</a>
                    <a onClick={()=> setShowMobileMenu(false)} href='#About' className='px-4 py-2 rounded-full inline-block'>About</a>
                    <a onClick={()=> setShowMobileMenu(false)} href='#Projects' className='px-4 py-2 rounded-full inline-block'>Projects</a>
                    <a onClick={()=> setShowMobileMenu(false)} href='#Testimonials' className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
                </ul>
            </div>
            {/* Sign Up Modal */}
            {showSignUpModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" data-aos="fade-in" data-aos-duration="500">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative" data-aos="zoom-in" data-aos-duration="700">
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                            onClick={() => setShowSignUpModal(false)}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-6 text-center" data-aos="fade-down" data-aos-delay="100">Sign Up</h2>
                        <form className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border rounded px-4 py-2 focus:outline-none focus:ring"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="border rounded px-4 py-2 focus:outline-none focus:ring"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="border rounded px-4 py-2 focus:outline-none focus:ring"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition"
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            )}
      
    </div>
  )
}

export default Navbar
