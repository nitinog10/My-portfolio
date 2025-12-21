"use client"

import { ArrowDown, Mail, Github, Linkedin, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const terminalLines = [
  { text: "$ whoami", delay: 0 },
  { text: "nitin-kumar-mishra", delay: 500 },
  { text: "$ cat about.txt", delay: 1000 },
  { text: "AI Developer | Generative AI Engineer", delay: 1500 },
  { text: "NASA Space Apps Winner 🚀", delay: 2000 },
  { text: "$ ls skills/", delay: 2500 },
  { text: "python  tensorflow  langchain  pytorch  docker", delay: 3000 },
]

export function Hero() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const line = terminalLines[currentLineIndex]
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line.text])
        setCurrentLineIndex((prev) => prev + 1)
      }, line.delay)

      return () => clearTimeout(timer)
    }
  }, [currentLineIndex])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Terminal Window */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${displayedLines.length > 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            {/* Terminal Window */}
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Terminal className="w-4 h-4 text-[#8b949e]" />
                  <span className="text-xs text-[#8b949e] font-mono">terminal</span>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  {displayedLines.map((line, index) => (
                    <div key={index} className="flex items-start gap-2">
                      {line.startsWith("$") ? (
                        <>
                          <span className="text-[#58a6ff]">→</span>
                          <span className="text-[#7ee787]">{line}</span>
                        </>
                      ) : line.includes("|") ? (
                        <span className="text-[#c9d1d9] ml-6">{line}</span>
                      ) : line.includes("🚀") ? (
                        <span className="text-[#f85149] ml-6">{line}</span>
                      ) : line.includes("/") ? (
                        <span className="text-[#a5a5ff] ml-6">{line}</span>
                      ) : (
                        <span className="text-[#c9d1d9] ml-6">{line}</span>
                      )}
                    </div>
                  ))}
                  {currentLineIndex < terminalLines.length && (
                    <div className="flex items-center gap-2">
                      <span className="text-[#58a6ff]">→</span>
                      <span className={`inline-block w-2 h-4 bg-[#58a6ff] ${showCursor ? "opacity-100" : "opacity-0"}`}></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Main Content */}
          <div className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 delay-300 ${displayedLines.length > 2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${displayedLines.length > 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  <span className="inline-block transition-all duration-500 delay-200">const</span>{" "}
                  <span className="inline-block transition-all duration-500 delay-300 text-[#79c0ff]">developer</span>{" "}
                  <span className="inline-block transition-all duration-500 delay-400">=</span>{" "}
                  <span className="inline-block transition-all duration-500 delay-500 text-[#a5a5ff]">{"{"}</span>
                </h1>
                <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold text-foreground transition-all duration-700 delay-300 ${displayedLines.length > 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  <span className="inline-block transition-all duration-500 delay-400 text-[#7ee787]">name:</span>{" "}
                  <span className="inline-block transition-all duration-500 delay-500 text-[#c9d1d9]">"Nitin Kumar Mishra"</span>
                </h1>
                <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold text-foreground transition-all duration-700 delay-500 ${displayedLines.length > 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  <span className="inline-block transition-all duration-500 delay-600 text-[#a5a5ff]">{"}"}</span>
                </h1>
              </div>

              <div className={`space-y-3 transition-all duration-700 delay-600 ${displayedLines.length > 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <p className="text-xl sm:text-2xl text-[#8b949e] font-mono">
                  <span className="text-[#58a6ff]">//</span>{" "}
                  <span className="inline-block animate-fade-in">AI Developer & Generative AI Engineer</span>
                </p>
                <p className="text-lg text-[#8b949e] font-mono">
                  <span className="text-[#58a6ff]">//</span>{" "}
                  <span className="inline-block animate-fade-in delay-200">Building intelligent systems with RAG, Agentic AI & ML</span>
                </p>
              </div>

              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[#1f2328] border border-[#30363d] rounded-md transition-all duration-700 delay-700 ${displayedLines.length > 4 ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                <div className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse"></div>
                <span className="text-sm font-mono text-[#7ee787]">NASA Space Apps Winner</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToAbout}
                className="group font-mono bg-[#238636] hover:bg-[#2ea043] text-white border border-[#238636] hover:border-[#2ea043] transition-all duration-300"
              >
                <span className="text-[#7ee787]">$</span> view_projects
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="font-mono border-[#30363d] hover:border-[#58a6ff] hover:bg-[#1c2128] text-foreground"
              >
                <a href="#contact">
                  <span className="text-[#58a6ff]">→</span> contact_me
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 items-center pt-4">
              <a
                href="mailto:nitinkmishra010@gmail.com"
                className="group text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/nitinog10"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/nitin-kumar-mishra-520615331"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-[#8b949e] font-mono text-xs">
          <span>scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
