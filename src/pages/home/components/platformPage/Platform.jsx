import React, { useState, useLayoutEffect } from 'react'
import "./Platform.css"
import img from '../../../../assets/home/mock-interview-9666.png'
import img1 from '../../../../assets/home/1.png'
import img2 from '../../../../assets/home/2.png'
import img3 from '../../../../assets/home/3.png'
import img4 from '../../../../assets/home/4.png'
import img5 from '../../../../assets/home/5.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);


const Platform = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggle = (index) => {
    setToggleState(index)
  }
  useLayoutEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(".content_heading", {
      x: -100, opacity: 0,
    }, {
      x: 0, duration: 0.5, ease: "power1.in", opacity: 1
    })
    tl.fromTo(".content_heading2", {
      x: -100, opacity: 0,
    }, {
      x: 0, duration: 0.5, ease: "power1.in", opacity: 1
    })
    tl.fromTo(".content_text", {
      x: -100, opacity: 0,
    }, {
      x: 0, duration: 0.5, ease: "power1.in", opacity: 1
    })
    tl.fromTo(".content_last", {
      x: -100, opacity: 0,
    }, {
      x: 0, duration: 0.5, ease: "power1.in", opacity: 1
    })
    gsap.fromTo(".content-image_container", {
      scale: 1.5, opacity: 0
    }, {
      scale: 1, duration: 1, ease: "expo.in", opacity: 1,
    })
  })

  return (
    <div className='platform_page'>
      <h2 className='text-center text-lg md:text-5xl text-pink font-bold'>A One stop Platform</h2>
      <p className='text-center lg:text-lg lg:m-4 text-gray-500'>Practice and learn till you are perfect</p>

      <ul className='header lg:text-base font-semibold m-3 p-5'>
        <li className={toggleState === 1 ? "header_content active" : "header_content"} onClick={() => { toggle(1) }}>Guided Program</li>
        <li className={toggleState === 2 ? "header_content active" : "header_content"} onClick={() => { toggle(2) }}>Doubt Resolution</li>
        <li className={toggleState === 3 ? "header_content active" : "header_content"} onClick={() => { toggle(3) }}>EduWeb</li>
        <li className={toggleState === 4 ? "header_content active" : "header_content"} onClick={() => { toggle(4) }}>Mock Interview</li>
        <li className={toggleState === 5 ? "header_content active" : "header_content"} onClick={() => { toggle(5) }}>Placement Cell</li>
        <li className={toggleState === 6 ? "header_content active" : "header_content"} onClick={() => { toggle(6) }}>Free Resources</li>
      </ul>

      <div className={toggleState === 1 ? "content_container grid xl:grid-cols-2 gap-x-40" : "hide"}>
        <div className='content'>
          <h3 className='text-2xl font-bold content_heading'>Well Guided Program</h3>
          <h1 className='text-xl font-medium py-4 text-gray'>We have invented and perfected the best system to learn coding</h1>
          <p className='text-sm my-2 text-gray'>
            Your Journey will follow a tried & Tested method that delivers the best results. Each concept that you learn will follow the following structure.
            <br />
            <br />
            Very short learning videos: 10-15 minutes 2-3 Guided Problems & 5-10 practice problems to understand: 45 minutes Doubts resolved instantly by our Teaching Assitants and Notes for Revision
          </p>
          <div className='flex flex-row text-sm content_last'>
            <div className='py-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>100+</h1>
              <p className='text-gray'>average hours of learning per course</p>
            </div>
            <div className='p-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>30+</h1>
              <p className='text-gray'>apractice problems in each course</p>
            </div>
          </div>
        </div>
        <div className='grid-cols-4 content-image_container'>
          <img src={img1} alt=''></img>
        </div>
      </div>
      <div className={toggleState === 2 ? "content_container grid xl:grid-cols-2 gap-x-40" : "hide"}>
        <div className='content'>
          <h3 className='text-2xl font-bold content_heading'>Well Guided Program</h3>
          <h1 className='text-xl font-medium py-4 text-gray'>We have invented and perfected the best system to learn coding</h1>
          <p className='text-sm my-2 text-gray'>
            Your Journey will follow a tried & Tested method that delivers the best results. Each concept that you learn will follow the following structure.
            <br />
            <br />
            Very short learning videos: 10-15 minutes 2-3 Guided Problems & 5-10 practice problems to understand: 45 minutes Doubts resolved instantly by our Teaching Assitants and Notes for Revision
          </p>
          <div className='flex flex-row text-sm content_last'>
            <div className='py-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>100+</h1>
              <p className='text-gray'>average hours of learning per course</p>
            </div>
            <div className='p-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>30+</h1>
              <p className='text-gray'>apractice problems in each course</p>
            </div>
          </div>
        </div>
        <div className='grid-cols-4 content-image_container'>
          <img src={img2} alt=''></img>
        </div>
      </div>

      <div className={toggleState === 3 ? "content_container grid xl:grid-cols-2 gap-x-40" : "hide"}>
        <div className='content'>
          <h3 className='text-2xl font-bold content_heading'>Well Guided Program</h3>
          <h1 className='text-xl font-medium py-4 text-gray'>We have invented and perfected the best system to learn coding</h1>
          <p className='text-sm my-2 text-gray'>
            Your Journey will follow a tried & Tested method that delivers the best results. Each concept that you learn will follow the following structure.
            <br />
            <br />
            Very short learning videos: 10-15 minutes 2-3 Guided Problems & 5-10 practice problems to understand: 45 minutes Doubts resolved instantly by our Teaching Assitants and Notes for Revision
          </p>
          <div className='flex flex-row text-sm content_last'>
            <div className='py-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>100+</h1>
              <p className='text-gray'>average hours of learning per course</p>
            </div>
            <div className='p-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>30+</h1>
              <p className='text-gray'>apractice problems in each course</p>
            </div>
          </div>
        </div>
        <div className='grid-cols-4 content-image_container'>
          <img src={img3} alt=''></img>
        </div>
      </div>

      <div className={toggleState === 4 ? "content_container grid xl:grid-cols-2 gap-x-40" : "hide"}>
        <div className='content'>
          <h3 className='text-2xl font-bold content_heading'>Well Guided Program</h3>
          <h1 className='text-xl font-medium py-4 text-gray'>We have invented and perfected the best system to learn coding</h1>
          <p className='text-sm my-2 text-gray'>
            Your Journey will follow a tried & Tested method that delivers the best results. Each concept that you learn will follow the following structure.
            <br />
            <br />
            Very short learning videos: 10-15 minutes 2-3 Guided Problems & 5-10 practice problems to understand: 45 minutes Doubts resolved instantly by our Teaching Assitants and Notes for Revision
          </p>
          <div className='flex flex-row text-sm content_last'>
            <div className='py-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>100+</h1>
              <p className='text-gray'>average hours of learning per course</p>
            </div>
            <div className='p-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>30+</h1>
              <p className='text-gray'>apractice problems in each course</p>
            </div>
          </div>
        </div>
        <div className='grid-cols-4 content-image_container'>
          <img src={img4} alt=''></img>
        </div>
      </div>

      <div className={toggleState === 5 ? "content_container grid xl:grid-cols-2 gap-x-40" : "hide"}>
        <div className='content'>
          <h3 className='text-2xl font-bold content_heading'>Well Guided Program</h3>
          <h1 className='text-xl font-medium py-4 text-gray'>We have invented and perfected the best system to learn coding</h1>
          <p className='text-sm my-2 text-gray'>
            Your Journey will follow a tried & Tested method that delivers the best results. Each concept that you learn will follow the following structure.
            <br />
            <br />
            Very short learning videos: 10-15 minutes 2-3 Guided Problems & 5-10 practice problems to understand: 45 minutes Doubts resolved instantly by our Teaching Assitants and Notes for Revision
          </p>
          <div className='flex flex-row text-sm content_last'>
            <div className='py-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>100+</h1>
              <p className='text-gray'>average hours of learning per course</p>
            </div>
            <div className='p-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>30+</h1>
              <p className='text-gray'>apractice problems in each course</p>
            </div>
          </div>
        </div>
        <div className='grid-cols-4 content-image_container'>
          <img src={img5} alt=''></img>
        </div>
      </div>

      <div className={toggleState === 6 ? "content_container grid xl:grid-cols-2 gap-x-40" : "hide"}>
        <div className='content'>
          <h3 className='text-2xl font-bold content_heading'>Well Guided Program</h3>
          <h1 className='text-xl font-medium py-4 text-gray'>We have invented and perfected the best system to learn coding</h1>
          <p className='text-sm my-2 text-gray'>
            Your Journey will follow a tried & Tested method that delivers the best results. Each concept that you learn will follow the following structure.
            <br />
            <br />
            Very short learning videos: 10-15 minutes 2-3 Guided Problems & 5-10 practice problems to understand: 45 minutes Doubts resolved instantly by our Teaching Assitants and Notes for Revision
          </p>
          <div className='flex flex-row text-sm content_last'>
            <div className='py-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>100+</h1>
              <p className='text-gray'>average hours of learning per course</p>
            </div>
            <div className='p-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>30+</h1>
              <p className='text-gray'>apractice problems in each course</p>
            </div>
          </div>
        </div>
        <div className='grid-cols-4 content-image_container'>
          <img src={img} alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default Platform