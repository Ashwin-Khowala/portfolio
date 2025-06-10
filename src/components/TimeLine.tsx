"use client";
import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Trophy, Briefcase, GraduationCap, Star } from "lucide-react"

const timelineData = [
  {
    id: 1,
    date: "2024",
    title: "Senior Full Stack Developer",
    description:
      "Led a team of 5 developers in building scalable web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and improved deployment efficiency by 40%.",
    location: "San Francisco, CA",
    icon: <Briefcase className="w-5 h-5" />,
    type: "work",
  },
  {
    id: 2,
    date: "2023",
    title: "Best Innovation Award",
    description:
      "Received company-wide recognition for developing an AI-powered customer service chatbot that reduced response time by 60% and improved customer satisfaction scores.",
    icon: <Trophy className="w-5 h-5" />,
    type: "achievement",
  },
  {
    id: 3,
    date: "2022",
    title: "Full Stack Developer",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive and accessible user interfaces.",
    location: "Remote",
    icon: <Briefcase className="w-5 h-5" />,
    type: "work",
  },
  {
    id: 4,
    date: "2021",
    title: "Master's in Computer Science",
    description:
      "Graduated with honors, specializing in Machine Learning and Web Technologies. Completed thesis on 'Optimizing React Applications for Performance'.",
    location: "Stanford University",
    icon: <GraduationCap className="w-5 h-5" />,
    type: "education",
  },
  {
    id: 5,
    date: "2020",
    title: "First Open Source Contribution",
    description:
      "Made first significant contribution to a popular React library, which was merged and is now used by thousands of developers worldwide.",
    icon: <Star className="w-5 h-5" />,
    type: "milestone",
  },
  {
    id: 6,
    date: "2019",
    title: "Junior Developer",
    description:
      "Started career as a junior developer, working on front-end applications and learning modern development practices. Built first production React application.",
    location: "New York, NY",
    icon: <Briefcase className="w-5 h-5" />,
    type: "work",
  },
]

const getTypeColor = (type:any) => {
  switch (type) {
    case "work":
      return "bg-blue-500"
    case "education":
      return "bg-green-500"
    case "achievement":
      return "bg-yellow-500"
    case "milestone":
      return "bg-purple-500"
    default:
      return "bg-gray-500"
  }
}

function TimelineItemComponent({ item, index }:any) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "-50px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`flex items-center w-full transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 translate-y-8 ${isEven ? "-translate-x-8" : "translate-x-8"}`
      } ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content */}
      <div className={`w-full md:w-5/12 ${isEven ? "md:pr-8" : "md:pl-8"}`}>
        <div
          className={`border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-gray-600 bg-gray-800`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>{item.icon}</div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{item.date}</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>

          {item.location && (
            <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
              <MapPin className="w-4 h-4" />
              <span>{item.location}</span>
            </div>
          )}

          <p className="text-gray-300 leading-relaxed">{item.description}</p>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="hidden md:flex w-2/12 justify-center">
        <div className="relative">
          <div
            className={`w-4 h-4 rounded-full ${getTypeColor(item.type)} border-4 z-10 relative transition-all duration-500 ${
              isVisible ? "scale-100 border-gray-800" : "scale-0 border-gray-900"
            }`}
          />
          <div
            className={`absolute inset-0 w-4 h-4 rounded-full ${getTypeColor(item.type)} opacity-30 transition-all duration-700 ${
              isVisible ? "animate-ping" : ""
            }`}
          />
        </div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block w-5/12" />
    </div>
  )
}

export default function Timeline() {
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    // Trigger header animation on mount
    const timer = setTimeout(() => setHeaderVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Journey</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional growth, achievements, and milestones
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 h-full opacity-30" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItemComponent key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">The journey continues...</p>
        </div>
      </div>
    </div>
  )
}