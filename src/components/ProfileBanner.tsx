"use client"

import { useState, useEffect } from 'react'
import { Play, Award } from 'lucide-react'

export default function ProfileBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    function navigateSkill() {
        // router.push('/skills');
        console.log('Navigate to skills')
    }

    function openResume() {
        // Open resume functionality
        console.log('Open resume')
    }

    return (
        <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Video/GIF */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif')"
                }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-0 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-start text-left">
                    {/* Glassmorphism Card */}
                    <div className={`backdrop-blur-lg bg-white/10 rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl p-4 sm:p-4 md:p-6 lg:p-8 w-full max-w-5xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>

                        {/* Title */}
                        <div className="mb-4 md:mb-6">
                            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
                                <span className="block mb-1">Ashwin Khowala</span>
                                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-400 font-light">
                                    Full Stack Web Developer
                                </span>
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed mb-6 md:mb-8 space-y-2 md:space-y-3">
                            <p>
                                I'm a Full Stack Web Developer and <strong className="text-yellow-300">DevOps enthusiast</strong>, with expertise in the <strong className="text-green-300">MERN stack</strong> and <strong className="text-blue-300">Next.js</strong>.
                            </p>
                            <p>
                                I build intuitive, dynamic web applications with seamless user experiences and scalable backend systems.
                            </p>
                            <p>
                                My DevOps experience includes containerization, CI/CD pipelines, and cloud-native infrastructure enabling smooth deployment and efficient development workflows.
                            </p>
                            <p>
                                I'm currently deepening my understanding of system scalability and sharpening my problem-solving skills through advanced <strong className="text-purple-300">data structures and algorithms</strong>.
                            </p>
                            <p>
                                I’m passionate about <strong className="text-purple-300">clean, maintainable code</strong> and take pride in developing solutions that are robust, efficient, and production-ready.
                            </p>

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
                            {/* Resume Button */}
                            <button
                                onClick={openResume}
                                className="group flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg md:rounded-xl text-white font-semibold text-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-white/25 active:scale-95"
                            >
                                <Play className="w-4 h-4 md:w-5 md:h-5 group-hover:text-green-400 transition-colors duration-300" />
                                <span className="group-hover:text-green-400 transition-colors duration-300">Resume</span>
                            </button>

                            {/* Skills Button */}
                            <button
                                onClick={navigateSkill}
                                className="group flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-green-500/80 hover:bg-green-400/90 backdrop-blur-sm border border-green-400/50 rounded-lg md:rounded-xl text-white font-semibold text-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 active:scale-95"
                            >
                                <Award className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform duration-300" />
                                <span>Skills</span>
                            </button>
                        </div>
                    </div>

                    {/* Animated Background Elements */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}