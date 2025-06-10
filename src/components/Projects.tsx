import React from "react";
import { FaNodeJs, FaReact, FaDatabase } from "react-icons/fa"; // Import icons
import { SiMongodb, SiExpress, SiFlask, SiHtml5, SiCss3 } from "react-icons/si";
import "./projects.css";
import safeBankImage from "../assets/safe_bank.png";
import musicureAiImage from "../assets/musicure-ai.png";


// Map technologies to their corresponding icons
const techIcons :any = {
    "Node.js": <FaNodeJs className="text-green-500 text-lg" />,
    "Express": <SiExpress className="text-gray-500 text-lg" />,
    "MongoDB": <SiMongodb className="text-green-400 text-lg" />,
    "React": <FaReact className="text-blue-400 text-lg" />,
    "Flask": <SiFlask className="text-gray-400 text-lg" />,
    "HTML/CSS": <SiHtml5 className="text-orange-500 text-lg" />,
    "CSS": <SiCss3 className="text-blue-500 text-lg" />,
};

const projects = [
    {
        title: "SafeBank",
        description:
            "An AI-integrated secure banking platform designed to enhance financial security and user experience. It leverages machine learning for fraud detection, provides intelligent financial insights, and ensures seamless transactions with advanced encryption. Built with a robust backend and an intuitive frontend, SafeBank offers a next-gen digital banking solution.",
        technologies: ["Node.js", "Express", "MongoDB", "React", "Flask"],
        image: `${safeBankImage}`,
    },
    {
        title: "Musicure AI",
        description:
            "🎵 Musicure AI – An AI-powered music therapy platform that personalizes music recommendations based on users' emotions and mental state. Using sentiment analysis and machine learning, it curates playlists that help reduce stress, enhance focus, and uplift mood. With an intuitive interface and seamless integration of AI models, Musicure AI transforms the way users experience music for mental well-being.",
        technologies: ["Node.js", "Flask", "MongoDB", "HTML/CSS"],
        image: `${musicureAiImage}`,
    },
];

function Projects() {
    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="about-project">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="tech-badges">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="tech-badge">
                                    {techIcons[tech] || tech}  {/* Display icon if available, else show text */}
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default Projects;
