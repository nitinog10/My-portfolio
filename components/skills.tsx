"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Zap, Cpu, Database, Code2, Terminal } from "lucide-react"

const skillCategories = [
  {
    icon: Sparkles,
    title: "Artificial Intelligence",
    color: "text-[#58a6ff]",
    skills: ["Deep Learning (CNN, RNN, Attention)", "Computer Vision & OpenCV", "Reinforcement Learning", "ML Algorithms"],
  },
  {
    icon: Zap,
    title: "Generative AI",
    color: "text-[#7ee787]",
    skills: ["RAG Systems", "LangChain, LangFlow, LangGraph", "Prompt Engineering", "Fine-tuning LLMs"],
  },
  {
    icon: Cpu,
    title: "Agentic AI",
    color: "text-[#a5a5ff]",
    skills: ["Multi-agent pipelines", "Autonomous AI systems", "AI workflow orchestration", "Intelligent simulation agents"],
  },
  {
    icon: Code2,
    title: "MCP & Development",
    color: "text-[#f85149]",
    skills: ["Model Context Protocol servers", "Custom IDE tools", "Automation systems", "Developer-focused AI utilities"],
  },
  {
    icon: Database,
    title: "Tech Stack",
    color: "text-[#ffa657]",
    skills: ["Python, C++, Kotlin", "TensorFlow, PyTorch", "Docker, Firebase, GCP", "REST APIs, Web Integrations"],
  },
]

export function Skills() {
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
            <span className="text-[#58a6ff]">const</span>{" "}
            <span className="text-[#79c0ff]">skills</span>{" "}
            <span className="text-[#58a6ff]">=</span>{" "}
            <span className="text-[#a5a5ff]">{"{"}</span>
          </h2>
          <p className={`text-lg text-[#8b949e] font-mono transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <span className="text-[#58a6ff]">//</span> Technical expertise across AI and ML ecosystem
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff]/50 transition-all duration-700 ${
                isVisible 
                  ? "opacity-100 translate-y-0 scale-100 rotate-0" 
                  : "opacity-0 translate-y-12 scale-95 rotate-1"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-[#1c2128] border border-[#30363d] flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className={`text-lg font-bold ${category.color}`}>{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className={`text-[#8b949e] text-sm font-mono flex items-start transition-all duration-500 ${
                      isVisible 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${(index * 150) + (skillIndex * 50) + 300}ms` }}
                  >
                    <span className={`${category.color} mr-2 transition-all duration-300 group-hover:scale-125`}>→</span>
                    <span className="text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
