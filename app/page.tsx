"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Achievements } from "@/components/achievements"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"

const ShaderGradientCanvas = dynamic(
  () => import("@shadergradient/react").then((mod) => ({ default: mod.ShaderGradientCanvas })),
  { ssr: false }
)

const ShaderGradient = dynamic(
  () => import("@shadergradient/react").then((mod) => ({ default: mod.ShaderGradient })),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-background" />}>
          <ShaderGradientCanvas
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <ShaderGradient
              animate="on"
              axesHelper="off"
              bgColor1="#000000"
              bgColor2="#000000"
              brightness={0.8}
              cAzimuthAngle={270}
              cDistance={0.5}
              cPolarAngle={180}
              cameraZoom={15.1}
              color1="#73bfc4"
              color2="#ff810a"
              color3="#8da0ce"
              destination="onCanvas"
              embedMode="off"
              envPreset="city"
              format="gif"
              fov={45}
              frameRate={10}
              gizmoHelper="hide"
              grain="on"
              lightType="env"
              pixelDensity={1}
              positionX={-0.1}
              positionY={0}
              positionZ={0}
              range="disabled"
              rangeEnd={40}
              rangeStart={0}
              reflection={0.4}
              rotationX={0}
              rotationY={130}
              rotationZ={70}
              shader="defaults"
              type="sphere"
              uAmplitude={3.2}
              uDensity={0.8}
              uFrequency={5.5}
              uSpeed={0.4}
              uStrength={0.3}
              uTime={0}
              wireframe={false}
            />
          </ShaderGradientCanvas>
        </Suspense>
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </div>
    </main>
  )
}
