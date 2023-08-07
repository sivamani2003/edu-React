import React, { useLayoutEffect } from 'react'
import './MeetOurExp.css'
import twitter from '../../../../assets/home/twitter.png'
import linkedin from '../../../../assets/home/linkedin.png'
import instagram from '../../../../assets/home/instagram.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

function MeetOurExp() {

    const data = [
        {
            id: 1,
            name: "Imon Hossain",
            profile: "UI/UX Designer",
            img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
        },
        {
            id: 2,
            name: "Michel Richard",
            profile: "Web Developer",
            img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
        },
        {
            id: 3,
            name: "Fernando Lopez",
            profile: "Programmer",
            img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
        },
        {
            id: 4,
            name: "Sanjida Cruze",
            profile: "Digital Marketer",
            img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
        }
    ];


    useLayoutEffect(() => {
        let tl = gsap.timeline();
        tl.fromTo(".expert_card",
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, duration: 1, opacity: 1, stagger: 0.25, ease: "power1.inOut" }
        )
    })
    return (
        <div className='moe_page xl:px-36'>
            <div className='expert_heading' >
                <h1 className='lg:w-6/12 text-4xl font-bold'>Meet Our Experts</h1>
                <p className='lg:w-6/12 text-base lg:px-14 expert_heading-text'>BAOIAM students get mentored by the industry experts who have achieved mastery in their respective domains & are passionate about helping
                    students achieve their dreams.</p>
            </div>
            <div className='experts_container my-10 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
                {data.map((item, id) => (
                    <div key={id} className='expert_card inline-block mx-10 '>
                        <img className='expert_image' src={item.img} alt=''></img>
                        <h1 className='sm:text-base lg:text-xl font-bold text-center expert_name py-0.5'>{item.name}</h1>
                        <p className='lg:text-lg text-center expert_profile'>{item.profile}</p>
                        <div className='social_links py-4'>
                            <img src={linkedin} alt=''></img>
                            <img src={twitter} alt=''></img>
                            <img src={instagram} alt=''></img>
                        </div>
                        <p>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MeetOurExp