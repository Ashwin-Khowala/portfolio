import './ProfileBanner.css';
import ResumeIcon from '../assets/play-button.png';
import SkillsIcon from '../assets/skills.png';
import { useRouter } from 'next/navigation';

export default function ProfileBanner() {
    const router = useRouter();

    function navigateSkill() {
        router.push('/skills');
    }

    return (
        <div className="profile w-screen min-h-[60vh] justify-center md:min-h-[80vh] flex items-center px-4">
            <div className="max-w-6xl w-full flex flex-col items-start text-left gap-6">
                <div className="font-bold text-xl md:text-3xl text-[#FFFF]">
                    <h1>Ashwin Khowala - Full Stack Web Developer</h1>
                </div>

                <div className="text-white text-xs md:text-base leading-relaxed">
                    <p>
                        I'm a Full Stack Web Developer with expertise in the MERN stack and NextJS.
                        <br />
                        I focus on building intuitive and dynamic web applications, designing seamless user interfaces, and ensuring strong backend functionality.
                        <br />
                        Currently, I'm enhancing my skills in building scalable applications.
                        <br />
                        In addition to my web development skills, I'm diving deep into data structures and algorithms to strengthen my problem-solving abilities and optimize code performance.
                        <br />
                        I'm passionate about clean, efficient code and always strive to build applications that are both robust and maintainable.
                    </p>
                </div>

                <div className="buttons">
                    <button className="resume-btn  button">
                        <img src={ResumeIcon.src} className="resume-icon" alt="" srcSet="" />
                        <p>
                            Resume
                        </p>
                    </button>
                    <button className="skills-btn button" onClick={() => navigateSkill()}>
                        <img src={SkillsIcon.src} className='skills-icon' alt="" srcSet="" />
                        <p>
                            Skills
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
}