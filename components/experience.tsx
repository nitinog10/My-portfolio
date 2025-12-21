"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

const experiences = [
  {
    icon: Briefcase,
    title: "AI Developer & Technical Operations",
    company: "HARON INDIA",
    period: "Current",
    description: "Leading AI development initiatives and technical operations, building production-level AI applications and managing technical infrastructure.",
    color: "text-[#58a6ff]",
  },
  {
    icon: Briefcase,
    title: "AI Developer Intern",
    company: "TheTechBus",
    period: "Current",
    description: "Developing cutting-edge AI solutions, implementing machine learning models, and contributing to innovative AI projects.",
    color: "text-[#7ee787]",
  },
  {
    icon: GraduationCap,
    title: "Head Alumni",
    company: "Oriental Group of Institutes",
    period: "Present",
    description: "Managing technical operations and community engagement, fostering connections between alumni and current students.",
    color: "text-[#a5a5ff]",
  },
]

export function Experience() {
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
    <section ref={sectionRef} className="relative py-24 sm:py-32 md:py-40 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <span className="text-[#58a6ff]">export</span>{" "}
            <span className="text-[#79c0ff]">experience</span>
            <span className="text-[#a5a5ff]">;</span>
          </h2>
          <p className={`text-lg text-[#8b949e] font-mono transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <span className="text-[#58a6ff]">//</span> Professional journey in AI development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-12 transition-all duration-700 ${
                  isVisible 
                    ? "opacity-100 translate-x-0 scale-100" 
                    : "opacity-0 -translate-x-12 scale-95"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 top-2 w-3 h-3 rounded-full border-2 border-background ${exp.color.replace("text-", "bg-")} shadow-lg`} />

                <div className="group bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff]/50 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-[#1c2128] border border-[#30363d] flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <exp.icon className={`w-6 h-6 ${exp.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold mb-1 text-[#c9d1d9]">{exp.title}</h3>
                          <p className={`text-lg font-semibold ${exp.color}`}>{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 md:mt-0">
                          <Calendar className="w-4 h-4 text-[#8b949e]" />
                          <span className="text-sm text-[#8b949e] font-mono px-3 py-1 bg-[#1c2128] border border-[#30363d] rounded">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <p className="text-[#8b949e] leading-relaxed text-sm">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
