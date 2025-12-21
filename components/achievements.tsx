"use client"

import { Trophy, Award, Target } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const achievements = [
  {
    icon: Trophy,
    title: "NASA Space Apps Challenge",
    badge: "Global Winner",
    description: "Built a technically advanced AI system recognized as one of the best global solutions",
    gradient: "from-[#2a2bf7] to-[#8b49ff]",
  },
  {
    icon: Award,
    title: "National-Level Ideathon",
    badge: "Runner up",
    description: "Runner up in national level ideathon competition for presenting an ai driven esports ecosystem gamerise",
    gradient: "from-[#00b7ff] to-[#2a2bf7]",
  },
  {
    icon: Target,
    title: "Top 5 Finalist",
    badge: "13 Hackathons finalist",
    description: "RNTU Binary Battle, LakeCity Hack 2.0, and multiple hackathon finalist positions",
    gradient: "from-[#8b49ff] to-[#c9b5ff]",
  },
]

export function Achievements() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = sectionRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 md:py-40 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2bf7]/5 via-transparent to-[#8b49ff]/5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2a2bf7]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8b49ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <span className="text-[#58a6ff]">const</span>{" "}
            <span className="text-[#79c0ff]">achievements</span>{" "}
            <span className="text-[#58a6ff]">=</span>{" "}
            <span className="text-[#a5a5ff]">[</span>
          </h2>
          <p className={`text-lg text-[#8b949e] font-mono transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <span className="text-[#58a6ff]">//</span> Recognized excellence in AI development and innovation
          </p>
        </div>

        {/* Featured Achievement Images */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* NASA Space Apps Team Image - Featured */}
          <div className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2a2bf7] via-[#8b49ff] to-[#00b7ff] rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#2a2bf7]/30 shadow-2xl shadow-[#2a2bf7]/20 group-hover:border-[#00b7ff]/50 transition-all duration-300 group-hover:scale-[1.01]">
                <img
                  src="/team gravity not found.png"
                  alt="NASA Space Apps Challenge - Team Gravity Not Found"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2a2bf7]/90 to-[#8b49ff]/90 border border-[#00b7ff]/50 backdrop-blur-sm mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#00b7ff] animate-pulse" />
                    <span className="text-sm sm:text-base font-medium text-white">NASA Space Apps Winner</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">Team Gravity Not Found</h3>
                  <p className="text-white/90 text-sm sm:text-base">Built a technically advanced AI system recognized as one of the best global solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* National Level Ideathon Image - Featured */}
          <div className={`transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00b7ff] via-[#2a2bf7] to-[#8b49ff] rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#00b7ff]/30 shadow-2xl shadow-[#00b7ff]/20 group-hover:border-[#8b49ff]/50 transition-all duration-300 group-hover:scale-[1.01]">
                <img
                  src="/national level ideathon.png"
                  alt="National Level Ideathon Winner"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00b7ff]/90 to-[#2a2bf7]/90 border border-[#8b49ff]/50 backdrop-blur-sm mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#8b49ff] animate-pulse" />
                    <span className="text-sm sm:text-base font-medium text-white">National Winner</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">National-Level Ideathon</h3>
                  <p className="text-white/90 text-sm sm:text-base">First place in national competition for innovative AI solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`bg-[#0d1117] border border-[#30363d] rounded-lg group p-6 sm:p-8 hover:border-[#58a6ff]/50 transition-all duration-700 ${
                isVisible 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="mb-6 relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                />
                <achievement.icon className="w-12 h-12 sm:w-14 sm:h-14 text-[#00b7ff] group-hover:text-[#2a2bf7] transition-colors duration-300 relative z-10 group-hover:scale-110 transform group-hover:drop-shadow-[0_0_12px_rgba(42,43,247,0.8)]" />
              </div>
              <div
                className={`inline-block px-4 py-1.5 bg-gradient-to-r ${achievement.gradient} bg-opacity-20 text-[#c9b5ff] text-sm font-medium rounded-full mb-4 border border-[#2a2bf7]/30`}
              >
                {achievement.badge}
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-balance text-foreground">
                {achievement.title}
              </h3>
              <p className="text-foreground/75 leading-relaxed text-pretty text-sm sm:text-base font-body">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
