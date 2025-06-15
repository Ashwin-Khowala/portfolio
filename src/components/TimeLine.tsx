// "use client";
// import { useEffect, useRef, useState } from "react"
// import { Calendar, MapPin, GraduationCap } from "lucide-react"

// const timelineData = [
//   {
//     id: 1,
//     date: "2027",
//     title: "B.Tech in Computer Science",
//     description:
//       "Undergrad in Kiit University",
//     location: "KIIT University",
//     icon: <GraduationCap className="w-5 h-5" />,
//     type: "education",
//   },
// ]

// const getTypeColor = (type: any) => {
//   switch (type) {
//     case "work":
//       return "bg-blue-500"
//     case "education":
//       return "bg-green-500"
//     case "achievement":
//       return "bg-yellow-500"
//     case "milestone":
//       return "bg-purple-500"
//     default:
//       return "bg-gray-500"
//   }
// }

// function TimelineItemComponent({ item, index }: any) {
//   const [isVisible, setIsVisible] = useState(false)
//   const ref = useRef(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1, rootMargin: "-50px" },
//     )

//     if (ref.current) {
//       observer.observe(ref.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   const isEven = index % 2 === 0

//   return (
//     <div
//       ref={ref}
//       className={`flex items-center w-full transition-all duration-700 ease-out ${isVisible
//           ? "opacity-100 translate-y-0 translate-x-0"
//           : `opacity-0 translate-y-8 ${isEven ? "-translate-x-8" : "translate-x-8"}`
//         } ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
//     >
//       {/* Content */}
//       <div className={`w-full md:w-5/12 ${isEven ? "md:pr-8" : "md:pl-8"}`}>
//         <div
//           className={`border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-gray-600 bg-gray-800`}
//         >
//           <div className="flex items-center gap-3 mb-3">
//             <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>{item.icon}</div>
//             <div className="flex items-center gap-2 text-gray-400 text-sm">
//               <Calendar className="w-4 h-4" />
//               <span>{item.date}</span>
//             </div>
//           </div>

//           <h3 className="text-xl  font-bold text-white mb-2 ">{item.title}</h3>

//           {item.location && (
//             <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
//               <MapPin className="w-4 h-8" />
//               <span>{item.location}</span>
//             </div>
//           )}

//           <p className="text-gray-300 leading-relaxed">{item.description}</p>
//         </div>
//       </div>

//       {/* Timeline dot */}
//       <div className="hidden md:flex w-2/12 justify-center">
//         <div className="relative">
//           <div
//             className={`w-4 h-4 rounded-full ${getTypeColor(item.type)} border-4 z-10 relative transition-all duration-500 ${isVisible ? "scale-100 border-gray-800" : "scale-0 border-gray-900"
//               }`}
//           />
//           <div
//             className={`absolute inset-0 w-4 h-4 rounded-full ${getTypeColor(item.type)} opacity-30 transition-all duration-700 ${isVisible ? "animate-ping" : ""
//               }`}
//           />
//         </div>
//       </div>

//       {/* Spacer for opposite side */}
//       <div className="hidden md:block w-5/12" />
//     </div>
//   )
// }

// export default function Timeline() {
//   const [headerVisible, setHeaderVisible] = useState(false)

//   useEffect(() => {
//     // Trigger header animation on mount
//     const timer = setTimeout(() => setHeaderVisible(true), 100)
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <div className="min-h-screen py-16 px-4 bg-[#141414] w-screen flex justify-center">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div
//           className={`w-screen text-center mb-16 transition-all duration-700 ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
//             }`}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Journey</h1>
//           <p className="w-[100vw] text-xl text-gray-400  mx-auto flex justify-center">
//             A timeline of my professional growth, achievements, and milestones
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Vertical line */}
//           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 h-full opacity-30" />

//           {/* Timeline items */}
//           <div className="space-y-12  md:space-y-16">
//           {/* <div className="m-[90px] "> */}
//             {timelineData.map((item, index) => (
//               <TimelineItemComponent key={item.id} item={item} index={index} />
//             ))}
//           </div>

//         </div>

//         {/* Footer */}
//         <div className="text-center mt-16 pt-8 border-t border-gray-700">
//           <p className="text-gray-400">The journey continues...</p>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import { Clock, Calendar, Users, Award, Briefcase, GraduationCap } from "lucide-react"
import { useEffect, useState } from "react"

export default function Component() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  const timelineData = [
    {
      id: 1,
      category: "Education",
      title: "B.Tech in Computer Science",
      date: "2027",
      description: "Undergrad in KIIT University",
      icon: GraduationCap,
      side: "left",
      color: "bg-green-500",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number.parseInt(entry.target.getAttribute("data-timeline-id") || "0")
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, id]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const timelineElements = document.querySelectorAll("[data-timeline-id]")
    timelineElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 opacity-90"></div>

        <div className="relative max-w-6xl mx-auto px-4 pb-16">
          <div className="text-center py-16 px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">My Journey</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">Timeline</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              A glimpse into my growth, achievements, and learning experience
            </p>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-green-400/50 via-purple-400/50 to-yellow-400/50 h-[50vh]"></div>
          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon
              const isVisible = visibleItems.has(item.id)

              return (
                <div key={item.id} className="relative flex items-center" data-timeline-id={item.id}>
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center cursor-pointer transition-all duration-700 ease-out ${isVisible
                        ? "opacity-100 scale-100 hover:scale-125 hover:shadow-lg hover:shadow-green-500/50"
                        : "opacity-0 scale-50"
                        }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className={`w-5/12 ${item.side === "left" ? "mr-auto pr-8" : "ml-auto pl-8"}`}>
                    <div
                      className={`group relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 cursor-pointer relative z-10 transition-all duration-700 ease-out ${item.side === "right" ? "text-right" : ""
                        } ${isVisible
                          ? "opacity-100 translate-y-0 hover:scale-105 hover:bg-slate-800/60 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/30"
                          : "opacity-0 translate-y-12"
                        }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 via-blue-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>

                      <div
                        className={`inline-block px-3 py-1 text-sm font-medium bg-slate-800/60 text-gray-300 rounded-full mb-4 ${item.side === "right" ? "float-right ml-4" : "float-left mr-4"
                          }`}
                      >
                        {item.category}
                      </div>

                      <div className="clear-both">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <div
                          className={`flex items-center text-gray-400 mb-4 ${item.side === "right" ? "justify-end" : "justify-start"
                            }`}
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{item.date}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {/* Footer */}
         <div className="text-center mt-16 pt-8 border-t border-gray-700">
           <p className="text-gray-400">The journey continues...</p>
         </div>
        </div>
      </div>
    </>
  )
}
