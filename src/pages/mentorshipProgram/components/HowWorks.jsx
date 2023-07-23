import React from 'react';
import '../Mentorship.css'

const HowWorks = () => {
        return (
                <div>
                        <div className='mt-12 md:mt-0 md:px-12 px-2 text-center'>
                                <h1 className='text-2xl md:text-5xl text-blue font-bold'>How <span className='text-gradient'>MENTORSHIP Program</span> Works?</h1>
                                <p className='text-gray md:text-xl mt-2 md:mt-6'>By leveraging the knowledge and skills within the intern community, the program empowers interns to both share their expertise and earn rewards, fostering a dynamic and collaborative learning environment.</p>
                        </div>

                        <div className='md:flex mt-20'>
                                <div className="card card-compact w-96 bg-base-100 shadow-2xl myBorder">
                                        <figure className='mt-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-gradient p-2 w-12 h-12 rounded-md">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                </svg>
                                        </figure>
                                        <div className="card-body">
                                                <h2 className="p-4 flex text-center card-title text-blue text-lg font-semibold md:text-2xl">Enrollment and Skill Assessment</h2>
                                                <p className='p-2 text-gray text-lg md:text-xl'>Interns interested in participating in the program sign up and provide details about their skills, areas of expertise, and availability. They also undergo a skill assessment to determine their proficiency in specific subjects or areas.</p>
                                        </div>
                                </div>

                                <div className='hidden md:block'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-purple-500 ml-10 mt-24 w-10 h-10">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                </div>

                                {/* for small device */}
                                <div className='md:hidden flex justify-center my-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-purple-500  text-center w-10 h-10">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                </div>


                                <div className="card card-compact w-96 bg-base-100 shadow-2xl mx-auto myBorder">
                                        <figure className='mt-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-gradient p-2 w-12 h-12 rounded-md">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                </svg>
                                        </figure>
                                        <div className="card-body">
                                                <h2 className="p-4 flex justify-center card-title text-blue text-lg font-semibold md:text-2xl">Matching and Teaching</h2>
                                                <p className='p-2 text-gray text-lg md:text-xl'>The ITIE program matches interns with fellow interns who are seeking to learn the skills the former possess. The matching process takes into account the skill requirements and availability of both the teaching intern and the learning intern. Once a match is made, the teaching intern and learning intern connect virtually or in person, depending on the program's format, to begin the teaching sessions. The teaching intern imparts their knowledge, shares insights, and provides guidance to help the learning intern enhance their skills and understanding in the chosen area.</p>
                                        </div>
                                </div>

                                <div className='hidden md:block'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-purple-500 mr-10 mt-24 w-10 h-10">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                </div>

                                {/* for small device */}
                                <div className='md:hidden flex justify-center my-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-purple-500 w-10 h-10">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                </div>

                                <div className="card card-compact w-96 bg-base-100 shadow-2xl myBorder">
                                        <figure className='mt-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-gradient p-2 w-12 h-12 rounded-md">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                </svg>
                                        </figure>
                                        <div className="card-body">
                                                <h2 className="p-4 flex justify-center card-title text-blue text-lg font-semibold md:text-2xl">Earn and Feedbacl</h2>
                                                <p className='p-2 text-gray text-lg md:text-xl'>After completing the teaching sessions, the learning intern provides feedback on the teaching intern's performance. This feedback helps improve the program and ensures quality teaching experiences for all participants. As a reward for their teaching efforts, the teaching intern earns compensation or incentives determined by the program. This can be in the form of monetary compensation, skill credits, or other mutually agreed-upon benefits</p>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default HowWorks;