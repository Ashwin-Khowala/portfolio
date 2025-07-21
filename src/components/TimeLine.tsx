// "use client"

// import { Clock, Calendar, Users, Award, Briefcase, GraduationCap } from "lucide-react"
// import { useEffect, useState } from "react"

// export default function Component() {
//   const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

//   const timelineData = [
//     {
//       id: 1,
//       category: "Education",
//       title: "B.Tech in Computer Science",
//       date: "2027",
//       description: "Undergrad in KIIT University",
//       icon: GraduationCap,
//       side: "left",
//       color: "bg-green-500",
//     },
//   ]

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const id = Number.parseInt(entry.target.getAttribute("data-timeline-id") || "0")
//           if (entry.isIntersecting) {
//             setVisibleItems((prev) => new Set([...prev, id]))
//           }
//         })
//       },
//       {
//         threshold: 0.1,
//         rootMargin: "0px 0px -50px 0px",
//       },
//     )

//     const timelineElements = document.querySelectorAll("[data-timeline-id]")
//     timelineElements.forEach((el) => observer.observe(el))

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <>
//       <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 opacity-90"></div>

//         <div className="relative max-w-6xl mx-auto px-4 pb-16">
//           <div className="text-center py-16 px-4">
//             <h1 className="text-5xl md:text-6xl font-bold mb-4">My Journey</h1>
//             <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">Timeline</h2>
//             <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
//               A glimpse into my growth, achievements, and learning experience
//             </p>
//           </div>
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-green-400/50 via-purple-400/50 to-yellow-400/50 h-[50vh]"></div>
//           <div className="space-y-16">
//             {timelineData.map((item, index) => {
//               const IconComponent = item.icon
//               const isVisible = visibleItems.has(item.id)

//               return (
//                 <div key={item.id} className="relative flex items-center" data-timeline-id={item.id}>
//                   <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
//                     <div
//                       className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center cursor-pointer transition-all duration-700 ease-out ${isVisible
//                         ? "opacity-100 scale-100 hover:scale-125 hover:shadow-lg hover:shadow-green-500/50"
//                         : "opacity-0 scale-50"
//                         }`}
//                       style={{ transitionDelay: `${index * 100}ms` }}
//                     >
//                       <IconComponent className="w-8 h-8 text-white" />
//                     </div>
//                   </div>

//                   <div className={`w-5/12 ${item.side === "left" ? "mr-auto pr-8" : "ml-auto pl-8"}`}>
//                     <div
//                       className={`group relative bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 cursor-pointer relative z-10 transition-all duration-700 ease-out ${item.side === "right" ? "text-right" : ""
//                         } ${isVisible
//                           ? "opacity-100 translate-y-0 hover:scale-105 hover:bg-slate-800/60 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/30"
//                           : "opacity-0 translate-y-12"
//                         }`}
//                       style={{ transitionDelay: `${index * 150}ms` }}
//                     >
//                       <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 via-blue-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>

//                       <div
//                         className={`inline-block px-3 py-1 text-sm font-medium bg-slate-800/60 text-gray-300 rounded-full mb-4 ${item.side === "right" ? "float-right ml-4" : "float-left mr-4"
//                           }`}
//                       >
//                         {item.category}
//                       </div>

//                       <div className="clear-both">
//                         <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">
//                           {item.title}
//                         </h3>
//                         <div
//                           className={`flex items-center text-gray-400 mb-4 ${item.side === "right" ? "justify-end" : "justify-start"
//                             }`}
//                         >
//                           <Calendar className="w-4 h-4 mr-2" />
//                           <span className="text-sm font-medium">{item.date}</span>
//                         </div>
//                         <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//           {/* Footer */}
//          <div className="text-center mt-16 pt-8 border-t border-gray-700">
//            <p className="text-gray-400">The journey continues...</p>
//          </div>
//         </div>
//       </div>
//     </>
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

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Header Section */}
          <div className="text-center py-12 sm:py-16 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">My Journey</h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-6">Timeline</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A glimpse into my growth, achievements, and learning experience
            </p>
          </div>

          {/* Timeline Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-green-400/50 via-purple-400/50 to-yellow-400/50 h-[50vh]"></div>

          {/* Mobile Timeline Line - Visible only on mobile */}
          <div className="md:hidden absolute left-6 sm:left-8 w-0.5 bg-gradient-to-b from-green-400/50 via-purple-400/50 to-yellow-400/50 h-full"></div>

          <div className="space-y-12 sm:space-y-16">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon
              const isVisible = visibleItems.has(item.id)

              return (
                <div key={item.id} className="relative flex items-center" data-timeline-id={item.id}>
                  {/* Desktop Timeline Icon (Center) */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-12 lg:w-16 h-12 lg:h-16 rounded-full ${item.color} flex items-center justify-center cursor-pointer transition-all duration-700 ease-out ${isVisible
                        ? "opacity-100 scale-100 hover:scale-125 hover:shadow-lg hover:shadow-green-500/50"
                        : "opacity-0 scale-50"
                        }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <IconComponent className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
                    </div>
                  </div>

                  {/* Mobile Timeline Icon (Left side) */}
                  <div className="md:hidden absolute left-2 sm:left-4 z-10">
                    <div
                      className={`w-8 sm:w-12 h-8 sm:h-12 rounded-full ${item.color} flex items-center justify-center cursor-pointer transition-all duration-700 ease-out ${isVisible
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-50"
                        }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <IconComponent className="w-4 sm:w-6 h-4 sm:w-6 text-white" />
                    </div>
                  </div>

                  {/* Desktop Content (Alternating sides) */}
                  <div className={`hidden md:block w-5/12 ${item.side === "left" ? "mr-auto pr-8" : "ml-auto pl-8"}`}>
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
                        <h3 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">
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

                  {/* Mobile Content (Single column, right side) */}
                  <div className="md:hidden w-full ml-12 sm:ml-16">
                    <div
                      className={`group relative bg-slate-900/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-600/30 cursor-pointer relative z-10 transition-all duration-700 ease-out mr-4 ${isVisible
                        ? "opacity-100 translate-y-0 active:scale-95 hover:bg-slate-800/60 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/20"
                        : "opacity-0 translate-y-12"
                        }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-500/20 via-blue-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>

                      <div className="inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-slate-800/60 text-gray-300 rounded-full mb-3 sm:mb-4">
                        {item.category}
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-green-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <div className="flex items-center text-gray-400 mb-3 sm:mb-4">
                          <Calendar className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                          <span className="text-xs sm:text-sm font-medium">{item.date}</span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
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
          <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700">
            <p className="text-sm sm:text-base text-gray-400">The journey continues...</p>
          </div>
        </div>
      </div>
    </>
  )
}