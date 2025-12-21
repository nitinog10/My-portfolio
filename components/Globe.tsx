"use client"

export function Globe() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Animated Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="orb-container">
          <div className="orb">
            <div className="orb-glow"></div>
            <div className="orb-inner"></div>
            <div className="orb-ring"></div>
            <div className="orb-ring-2"></div>
            <div className="orb-ring-3"></div>
            <div className="orb-particles"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
