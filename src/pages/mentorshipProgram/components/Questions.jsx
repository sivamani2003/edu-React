import React, { useState } from 'react';
import '../Mentorship.css'
import faq from '../../../assets/FAQs-amico.png'

const Questions = () => {

        const [toggle, setToggle] = useState(false)
        const [toggleOne, setToggleOne] = useState(false)
        const [toggleTwo, setToggleTwo] = useState(false)

        const plus = <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg></>

        const minus = <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg></>

        return (
                <div className='md:flex items-center'>
                        <div className='md:w-1/2 hidden md:block'>
                                <img className='w-[80%]' src={faq} alt="" />
                        </div>
                        <div className='md:w-1/2'>
                                <div>
                                        <h1 className='text-xl md:text-5xl text-blue font-bold flex justify-center mb-6'>Frequently Asked <span className='text-pink ml-2'>Questions</span></h1>
                                </div>
                                <div>
                                        <details className="collapse bg-base-200">
                                                <summary onClick={() => setToggle(!toggle)} className="collapse-title text-xl font-medium">
                                                        <div className='flex justify-between hover:text-[#ee4962] px-4'>
                                                                <p>Q1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloremque??</p>
                                                                {
                                                                        toggle ? <>{minus}</> : <>{plus}</>
                                                                }
                                                        </div>
                                                </summary>
                                                <div className="collapse-content">
                                                        <p className='px-4'>Yes, If you are aware of BAOIAM and believe in what we are doing, then feel free to participate.</p>
                                                </div>
                                        </details>
                                        <details className="collapse bg-base-200 my-4">
                                                <summary onClick={() => setToggleOne(!toggleOne)} className="collapse-title text-xl font-medium">
                                                        <div className='flex justify-between hover:text-[#ee4962] px-4'>
                                                                <p>Q2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, cupiditate??</p>
                                                                {
                                                                        toggleOne ? <>{minus}</> : <>{plus}</>
                                                                }
                                                        </div>
                                                </summary>
                                                <div className="collapse-content">
                                                        <p className='px-4'>You can see it on the website dashboard once you login.</p>
                                                </div>
                                        </details>
                                        <details className="collapse bg-base-200">
                                                <summary onClick={() => setToggleTwo(!toggleTwo)} className="collapse-title text-xl font-medium">
                                                        <div className='flex justify-between hover:text-[#ee4962] px-4'>
                                                                <p>Q3. Lorem ipsum dolor sit amet consectetur.?</p>
                                                                {
                                                                        toggleTwo ? <>{minus}</> : <>{plus}</>
                                                                }
                                                        </div>
                                                </summary>
                                                <div className="collapse-content">
                                                        <p className='px-4'>Anyone who has a skill expertise & has passion for teaching.Be it working professional or student.</p>
                                                </div>
                                        </details>
                                </div>
                        </div>
                </div>
        );
};

export default Questions;