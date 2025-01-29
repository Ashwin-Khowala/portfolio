import React from 'react'
import './ProfileBanner.css'
import ResumeIcon from '../assets/play-button.png'
import SkillsIcon from '../assets/skills.png'
import { useNavigate } from 'react-router-dom'
export default function ProfileBanner() {

    const navigate = useNavigate();

    function navigateSkill() {
        navigate('/skills');
    }

    return (
        <div className='profile'>
            <div className='profile-description'>
                <div className="user-name">
                    <h1>Ashwin Khowala - Full Stack Web Developer</h1>
                </div>
                <div className="user-description">
                    <p>
                        I’m a Full Stack Web Developer with expertise in the MERN stack (MongoDB, Express, React, Node.js).
                        <br />
                        I focus on building intuitive and dynamic web applications, designing seamless user interfaces, and ensuring strong backend functionality.
                        <br />
                        Currently, I'm enhancing my skills in building scalable applications.
                        <br />
                        In addition to my web development skills, I’m diving deep into data structures and algorithms to strengthen my problem-solving abilities and optimize code performance.
                        <br />
                        I’m passionate about clean, efficient code and always strive to build applications that are both robust and maintainable.
                    </p>
                </div>

                <div className="buttons">
                    <button className="resume-btn  button">
                        <img src={ResumeIcon} className="resume-icon" alt="" srcset="" />
                        <p>
                            Resume
                        </p>
                    </button>
                    <button className="skills-btn button" onClick={() => navigateSkill()}>
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
