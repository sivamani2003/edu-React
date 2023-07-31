import React from 'react'
import './style.css'
import { FaWeight } from 'react-icons/fa'

export default function Skilled() {
  return (
    <div>
        <div className="container">
            <div className="col-left">
                <div className="cir">
                <div className="cir2"></div>
                <div className="circle">
                    <h1>100+</h1>
                    <p className="cir-disc">Deliverd</p><p className="cir-disc">Projects</p>
                </div>
                <div className="circle">
                    <h1>Half</h1>
                    <p className="cir-disc">Bilion </p><p className="cir-disc"> Usages</p>
                </div>
                <div className="circle">
                    <h1>40+</h1>
                    <p className="cir-disc">Expert </p><p className="cir-disc"> Developer</p>
                </div>
                <div className="circle">
                    <h1>2M+</h1>
                    <p className="cir-disc">Users of </p> <p className="cir-disc">the Code</p>
                </div>
                </div>
            </div>
            <div className="col-right">
                <h1>Hire our <span>experienced</span> & <span>skilled</span> developers</h1>
                <br />
                <p className="content">We are one of the leading UI/UX design, front-end development & backend development consultancy companies and are available for hire.</p>
                <br />
                <p className="content">Save at least <strong>40%</strong> of your cost than US & Europe.</p>
                <button id="btn">Get a quote</button>
            </div>
        </div>
    </div>
  )
}
