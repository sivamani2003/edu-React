import React from 'react';
import { FaBusinessTime, FaCalendar, FaCertificate, FaGraduationCap, FaHandsHelping, FaLightbulb, FaPhoneAlt, FaProjectDiagram, FaUsers } from "react-icons/fa";

const CourseHighlight = () => {
        return (
                <div className='md:p-12 px-2'>
                        <h1 className='text-center text-2xl md:text-5xl font-bold my-8'>Course <span className='text-pink'>Highlights</span></h1>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-y-8'>
                                <div className='flex items-center gap-x-2 mx-auto'>
                                        <div>
                                                <FaGraduationCap className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaGraduationCap>
                                        </div>
                                        <div>
                                                <h1 className='text-lg font-bold'>Learn Online</h1>
                                                <p className='text-gray'>At your own schedule</p>
                                        </div>
                                </div>
                                <div className='flex items-center gap-x-2 mx-auto'>
                                        <div>
                                                <FaCertificate className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaCertificate>
                                        </div>
                                        <div>
                                                <h1 className='text-lg font-bold'>Learn Online</h1>
                                                <p className='text-gray'>At your own schedule</p>
                                        </div>
                                </div>
                                <div className='flex items-center gap-x-2 mx-auto'>
                                        <div>
                                                <FaUsers className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaUsers>
                                        </div>
                                        <div>
                                                <h1 className='text-lg font-bold'>Learn Online</h1>
                                                <p className='text-gray'>At your own schedule</p>
                                        </div>
                                </div>
                                <div className='flex items-center gap-x-2 mx-auto'>
                                        <div>
                                                <FaPhoneAlt className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaPhoneAlt>
                                        </div>
                                        <div>
                                                <h1 className='text-lg font-bold'>Learn Online</h1>
                                                <p className='text-gray'>At your own schedule</p>
                                        </div>
                                </div>
                                <div className='flex items-center gap-x-2 mx-auto'>
                                        <div>
                                                <FaProjectDiagram className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaProjectDiagram>
                                        </div>
                                        <div>
                                                <h1 className='text-lg font-bold'>Learn Online</h1>
                                                <p className='text-gray'>At your own schedule</p>
                                        </div>
                                </div>
                                <div className='flex items-center gap-x-2 mx-auto'>
                                        <div>
                                                <FaCalendar className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaCalendar>
                                        </div>
                                        <div>
                                                <h1 className='text-lg font-bold'>Learn Online</h1>
                                                <p className='text-gray'>At your own schedule</p>
                                        </div>
                                </div>
                                <div className='flex items-center gap-x-2 mx-auto'>
                                        <div>
                                                <FaHandsHelping className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaHandsHelping>
                                        </div>
                                        <div>
                                                <h1 className='text-lg font-bold'>Learn Online</h1>
                                                <p className='text-gray'>At your own schedule</p>
                                        </div>
                                </div>
                                <div className='flex items-center gap-x-2 mx-auto'>
                                        <div>
                                                <FaLightbulb className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaLightbulb>
                                        </div>
                                        <div>
                                                <h1 className='text-lg font-bold'>Learn Online</h1>
                                                <p className='text-gray'>At your own schedule</p>
                                        </div>
                                </div>
                                <div className='flex items-center gap-x-2 mx-auto'>
                                        <div>
                                                <FaBusinessTime className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaBusinessTime>
                                        </div>
                                        <div>
                                                <h1 className='text-lg font-bold'>Learn Online</h1>
                                                <p className='text-gray'>At your own schedule</p>
                                        </div>
                                </div>
                        </div>

                </div>
        );
};

export default CourseHighlight;