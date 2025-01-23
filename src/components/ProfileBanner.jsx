import React from 'react'
import './ProfileBanner.css'
import ResumeIcon from '../assets/play-button.png'
import SkillsIcon from '../assets/skills.png'
export default function ProfileBanner() {
  return (
    <div className='profile'>
        <div className='profile-description'>
            <div className="user-name">
                <h1>Ashwin Khowala - Full Stack Web Developer</h1>
            </div>
            <div className="user-description">
                <p>
                I’m a passionate Full Stack Web Developer with a knack for building intuitive and dynamic web applications. Currently exploring the MERN stack, I love solving complex problems with clean, efficient code. Beyond coding, I’m diving into data structures and algorithms to sharpen my problem-solving skills.
                <br />
                When I’m not immersed in code, you’ll find me exploring innovative ideas in social entrepreneurship, blending technology with impactful solutions.
                <br />
                Let’s collaborate and build something amazing together!
                </p>
            </div>
            <div className="buttons">
                <button className="resume-btn  button">
                    <img src={ResumeIcon} className="resume-icon" alt="" srcset=""/>
                    <p>
                        Resume
                    </p>
                </button>
                <button className="skills-btn button">
                    <img src={SkillsIcon} className='skills-icon' alt="" srcset="" />
                    <p>
                        Skills
                    </p>
                </button>
            </div>
        </div>

    </div>
  )
}
