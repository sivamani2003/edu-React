import React from 'react';
import why from '../../../../assets/courses/why.jpg'
import what from '../../../../assets/courses/what.jpg'

const WhyAndWhat = () => {
        return (
                <div>
                        <div>
                                <div className="md:flex">
                                        <div data-aos="zoom-in" className="md:w-1/2 px-3 md:pl-16">
                                                <h1 className="text-2xl md:text-5xl font-bold">Why <span className='text-pink'>learn</span> machine learning?</h1> <br />
                                                <div className='pl-20 md:pl-0'>
                                                        <h3 className="text-xl md:text-2xl font-bold">Design a program</h3>
                                                        <p className="mt-1 md:mt-2 text-gray">Arthur Samue was designed a computer program for playing checkers. <br />What will you design?</p> <br />
                                                        <h3 className="text-xl md:text-2xl font-bold">Be in demand</h3>
                                                        <p className="mt-1 md:mt-2 text-gray">It is noteworthy that the machine learning engineer has emerged as a highly sought-after role and is currently ranked fifth on the list of jobs in demand.</p> <br />
                                                        <h3 className="text-xl md:text-2xl font-bold">Intelligence with Machine</h3>
                                                        <p className="mt-1 md:mt-2 text-gray">“Machine intelligence is the last invention that humanity will ever need to make.”</p>
                                                </div>
                                        </div>
                                        <div data-aos="zoom-in" className='hidden md:w-1/2 md:flex justify-center'>
                                                <img src={why} className="w-[70%]" />
                                        </div>
                                </div>
                        </div>

                        <div className="mt-8 md:mt-12">
                                <div className="md:flex">
                                        <div data-aos="zoom-in" className="md:w-1/2 px-3 md:pl-16">
                                                <h1 className="text-2xl md:text-5xl font-bold">What <span className='text-pink'>placement assistance</span> will you receive?</h1> <br />
                                                <div className='pl-20 md:pl-0'>
                                                        <h3 className="text-xl md:text-2xl font-bold">Free Placement Prep Training</h3>
                                                        <p className="mt-1 md:mt-2 text-gray">Learn how to build your resume, make great <br /> applications, and ace your interviews.</p> <br />
                                                        <h3 className="text-xl md:text-2xl font-bold">Curated internships & jobs</h3>
                                                        <p className="mt-1 md:mt-2 text-gray">Get internships and fresher jobs as per your preference <br /> in your inbox.</p> <br />
                                                        <h3 className="text-xl md:text-2xl font-bold">Get highlighted on Internshala</h3>
                                                        <p className="mt-1 md:mt-2 text-gray">Top performers will be highlighted in their internship & <br /> job applications on Internshala</p>
                                                </div>
                                        </div>
                                        <div data-aos="zoom-in" className='md:w-1/2 hidden md:flex justify-center'>
                                                <img src={what} className="w-[80%]" />
                                        </div>
                                </div>
                        </div>

                </div>
        );
};

export default WhyAndWhat;