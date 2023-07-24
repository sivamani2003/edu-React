import React from 'react';
import logo from '../../../assets/logo-light.svg'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
        return (
                <div className='md:flex md:py-28 md:px-10 bg-black'>
                        <div className='md:w-1/4 mx-auto px-2 text-gray-400'>
                                <div className='flex items-center mb-4'>
                                        <img src={logo} alt="" />
                                </div>
                                <p>Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.</p>
                                <p><span className='font-semibold'>Add:</span> 70-80 Upper St Norwich NR2</p>
                                <p><span className='font-semibold'>Call:</span> +01 123 4567 890</p>
                                <p><span className='font-semibold'>Email:</span> info@eduweb.com</p>
                        </div>

                        <div className='md:w-1/4 mx-auto px-2 text-gray-400'>
                                <h1 className='text-lg md:text-3xl font-bold text-white mb-4'>Online Platform</h1>
                                <p>About</p>
                                <p>Courses</p>
                                <p>Instructor</p>
                                <p>Events</p>
                                <p>Instructor Profile</p>
                                <p>Purchase Guid</p>
                        </div>

                        <div className='md:w-1/4 mx-auto px-2 text-gray-400'>
                                <h1 className='text-lg md:text-3xl font-bold text-white mb-4'>Links</h1>
                                <p>Contact Us</p>
                                <p>Gallery</p>
                                <p>News and Articles</p>
                                <p>FAQ's</p>
                                <p>Sign in/Register</p>
                                <p>Coming soon</p>
                        </div>

                        <div className='md:w-1/4 mx-auto px-2 text-gray-400'>
                                <h1 className='text-lg md:text-3xl font-bold text-white mb-4'>Contacts</h1>
                                <p className='my-2'>Enter your email address to register to our newsletter subscription</p>
                                <div className='md:flex gap-x-4'>
                                        <input type="email" placeholder="Type here" className="input w-full max-w-xs" />
                                        <button className='btn hover:bg-[#1ab79d] flex items-center'>
                                                Subscribe
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                                </svg>
                                        </button>
                                </div>
                                <div className='flex items-center gap-x-8 mt-8'>
                                        <FaFacebook size={25}></FaFacebook>
                                        <FaTwitter size={25}></FaTwitter>
                                        <FaLinkedin size={25}></FaLinkedin>
                                        <FaInstagramSquare size={25}></FaInstagramSquare>
                                        <FaYoutube size={25}></FaYoutube>
                                </div>
                        </div>
                </div>
        );
};

export default Footer;