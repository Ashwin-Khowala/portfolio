import React from 'react'
import './ContactMe.css'
import { FaLinkedin ,FaPhoneAlt} from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import ashwinKhowala from "../assets/ashwinkhowala.jpg";


export default function ContactMe() {
  return (
    <div className='container-contact-me'>
        <div className='linkedIn-container'>
            <div className='user-details'>
                <img src={ashwinKhowala.src} alt="" />

                <p className='name'>Ashwin Khowala</p>
                <p className='user-detail'>Aspiring Software Developer</p>
                <p className='user-description'>
                I am an aspiring software developer with a strong passion for web development. Currently, I am focused on building dynamic web applications using Node.js for the backend and React for the frontend.  
                </p>
                <a href='https://www.linkedin.com/in/ashwin-khowala-072493270/' >
                <FaLinkedin style={{ marginRight: '15px' }} /> 
                    LinkedIn
                </a>
            </div>
        </div>
        <div className='contact-details'>
            <div>
                <p className='desc'>Feel Free to Reach Out!</p>
            </div>
            <div className='mail'>
                <div className='icons'>
                    <IoIosMail/>
                </div>
                <a href="mailto:ashwinkhowala.work@gmail.com">ashwinkhowala.work@gmail.com</a>
            </div>
            <div className='mobile'>
                <div className='icons'>
                    <FaPhoneAlt/>
                </div>
                <a href="tel:+91 8240468683">+91 8240468683</a>
            </div>
        </div>
    </div>
  )
}
