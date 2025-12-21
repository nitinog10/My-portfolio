"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, Code, Rocket, Terminal } from "lucide-react"

export function About() {
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

  const codeSnippet = `class Developer {
  constructor() {
    this.name = "Nitin Kumar Mishra";
    this.role = "AI Developer & Generative AI Engineer";
    this.location = "India";
    this.status = "available";
  }
  
  skills = [
    "Deep Learning",
    "RAG Systems",
    "Agentic AI",
    "Computer Vision"
  ];
  
  build() {
    return "intelligent AI systems";
  }
}`

  const highlights = [
    {
      icon: Brain,
      title: "AI & ML",
      description: "Deep Learning, Computer Vision, Reinforcement Learning",
      color: "text-[#58a6ff]",
      bgColor: "bg-[#1c2128]",
      borderColor: "border-[#30363d]",
    },
    {
      icon: Code,
      title: "Generative AI",
      description: "RAG Systems, LangChain, LangFlow, LangGraph, MCP",
      color: "text-[#7ee787]",
      bgColor: "bg-[#1c2128]",
      borderColor: "border-[#30363d]",
    },
    {
      icon: Rocket,
      title: "Production",
      description: "Scalable AI applications and automation systems",
      color: "text-[#a5a5ff]",
      bgColor: "bg-[#1c2128]",
      borderColor: "border-[#30363d]",
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 md:py-40 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <span className="text-[#58a6ff]">function</span>{" "}
            <span className="text-[#79c0ff]">about</span>
            <span className="text-[#a5a5ff]">()</span>{" "}
            <span className="text-[#58a6ff]">{"{"}</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Code Block */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Code className="w-4 h-4 text-[#8b949e]" />
                  <span className="text-xs text-[#8b949e] font-mono">developer.js</span>
                </div>
              </div>
              <div className="p-6">
                <pre className="text-sm font-mono text-[#c9d1d9] overflow-x-auto">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`space-y-6 text-lg leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="space-y-4">
              <p className={`text-[#c9d1d9] transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                I am an <span className="text-[#58a6ff] font-semibold transition-all duration-500 delay-500">AI Developer</span> and{" "}
                <span className="text-[#7ee787] font-semibold transition-all duration-500 delay-600">Generative AI Engineer</span>, passionate about building
                intelligent, scalable, and real-world AI systems.
              </p>
              <p className={`text-[#8b949e] transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                My expertise spans across <span className="text-[#a5a5ff] transition-all duration-500 delay-600">Agentic AI pipelines</span>,{" "}
                <span className="text-[#a5a5ff] transition-all duration-500 delay-700">RAG architectures</span>, and{" "}
                <span className="text-[#a5a5ff] transition-all duration-500 delay-800">Model Context Protocol (MCP)</span> servers.
              </p>
              <p className={`text-[#8b949e] transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                Currently working as <span className="text-[#58a6ff] transition-all duration-500 delay-700">AI Developer & Technical Operations</span> at HARON
                INDIA and <span className="text-[#58a6ff] transition-all duration-500 delay-800">AI Developer Intern</span> at TheTechBus, I have consistently
                delivered high-impact AI projects and led teams in building production-level applications.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`group ${highlight.bgColor} border ${highlight.borderColor} rounded-lg p-6 hover:border-[#58a6ff]/50 transition-all duration-500 ${
                isVisible 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${highlight.bgColor} border ${highlight.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${highlight.color}`}>{highlight.title}</h3>
                  <p className="text-[#8b949e] text-sm leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
