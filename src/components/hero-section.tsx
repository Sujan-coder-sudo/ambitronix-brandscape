import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Download,
  MapPin,
  IndianRupee,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// Use relative imports (adjust path if this file sits in a different folder)
import hero1 from "../assets/images/hero1.jpg"
import hero2 from "../assets/images/hero2.jpg"
import hero3 from "../assets/images/hero3.jpg"

/**
 * Robust hero carousel:
 * - background-image for each slide (guarantees visibility)
 * - single overlay layer (won't accidentally hide slide)
 * - explicit z-index stacking (z-0, z-10, z-20)
 * - console preloads — will log missing assets
 */
export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  // Slides array (ensure these aren't undefined)
  const slides = useMemo(() => [hero1, hero2, hero3], [])
  const AUTO_MS = 2000

  // Preload check — logs missing images (helps debugging)
  useEffect(() => {
    slides.forEach((s, idx) => {
      if (!s) {
        // eslint-disable-next-line no-console
        console.error(`[HeroSection] slide ${idx} is missing or undefined:`, s)
      } else {
        const img = new Image()
        img.src = s as string
        img.onload = () => {
          // eslint-disable-next-line no-console
          console.log(`[HeroSection] preloaded slide ${idx}:`, s)
        }
        img.onerror = () => {
          // eslint-disable-next-line no-console
          console.error(`[HeroSection] failed to load slide ${idx}:`, s)
        }
      }
    })
  }, [slides])

  // Auto-rotate
  useEffect(() => {
    if (paused || slides.length <= 1) return
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return
    const id = window.setInterval(() => setCurrent((s) => (s + 1) % slides.length), AUTO_MS)
    return () => clearInterval(id)
  }, [paused, slides.length])

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setCurrent((s) => (s - 1 + slides.length) % slides.length)
      if (e.key === "ArrowRight") setCurrent((s) => (s + 1) % slides.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [slides.length])

  const prev = () => setCurrent((s) => (s - 1 + slides.length) % slides.length)
  const next = () => setCurrent((s) => (s + 1) % slides.length)
  const go = (i: number) => setCurrent(((i % slides.length) + slides.length) % slides.length)

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  const handleDownloadDPR = () => window.open("/ambitronix-dpr.pdf", "_blank")

  return (
    <section
      aria-label="Hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ===== Slides layer (z-0) ===== */}
      <div className="absolute inset-0 z-0">
        {slides.map((src, i) => (
          <div
            key={i}
            // style-based opacity transition to avoid class toggling issues
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              opacity: i === current ? 1 : 0,
              transition: "opacity 900ms ease-in-out",
              height: "100vh",
            }}
            className="absolute inset-0"
            aria-hidden={i === current ? "false" : "true"}
          />
        ))}
      </div>

      {/* ===== Overlay layer (single, z-10) ===== */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        // slightly dim the background; keep it subtle so image is visible
        style={{
          background:
            "linear-gradient(rgba(255,255,255,0.18), rgba(255,255,255,0.12))",
        }}
      />

      {/* dark mode overlay (only visible in dark mode) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hidden dark:block"
        style={{ background: "rgba(0,0,0,0.45)" }}
      />

      {/* ===== Content (z-20) ===== */}
      <div className="relative z-20 container mx-auto px-6 lg:px-10 text-center">
        <div className="max-w-5xl mx-auto py-12">
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4">
            <span className="block text-slate-900 dark:text-white">Industrial-scale</span>
            <span className="block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7AF028] via-[#00BBD4] to-[#0077A6]">
                Electronic Design
              </span>{" "}
              <span className="text-slate-900 dark:text-white">& Automation</span>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-200 max-w-3xl mx-auto mb-8">
            Fusing cutting-edge engineering with intelligent automation to revolutionize electronics
            production. From precision PCBs to full-scale manufacturing systems built for
            reliability and scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button
              onClick={() => scrollToSection("services")}
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-gradient-to-r from-[#00BBD4] to-[#7AF028] text-black shadow-xl hover:shadow-2xl transition"
            >
              Explore Capabilities <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              onClick={handleDownloadDPR}
              className="rounded-full px-6 py-3 border border-black/10 dark:border-white/20 text-black dark:text-white bg-white/90 dark:bg-black/40 hover:brightness-95 transition"
            >
              <Download className="mr-2 h-5 w-5" /> Download DPR
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Metric
              icon={<MapPin className="h-5 w-5 text-[#7AF028]" />}
              title="Land Planned"
              value="2.0 acres"
              meta="Bengaluru Aerospace SEZ"
            />
            <Metric
              icon={<IndianRupee className="h-5 w-5 text-[#7AF028]" />}
              title="Investment"
              value="₹16 Cr"
              meta="Total Project Cost"
            />
            <Metric
              icon={<Calendar className="h-5 w-5 text-[#7AF028]" />}
              title="Start Date"
              value="Jan 2026"
              meta="Projected Launch"
            />
          </div>

          {/* dots */}
          <div className="mt-8 flex justify-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-selected={i === current}
                className={`h-3 w-10 rounded-full transition-all ${
                  i === current ? "bg-black dark:bg-white" : "bg-black/20 dark:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* arrows (z-30) */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/70 dark:bg-black/40 shadow hover:scale-105 transition"
      >
        <ChevronLeft className="h-6 w-6 text-black dark:text-white" />
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/70 dark:bg-black/40 shadow hover:scale-105 transition"
      >
        <ChevronRight className="h-6 w-6 text-black dark:text-white" />
      </button>
    </section>
  )
}

/* Metric helper */
function Metric({
  icon,
  title,
  value,
  meta,
}: {
  icon: React.ReactNode
  title: string
  value: string
  meta: string
}) {
  return (
    <div className="backdrop-blur-sm bg-white/70 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-5 shadow-md">
      <div className="flex items-center justify-center gap-2 mb-2">
        {icon}
        <div className="text-sm font-medium text-slate-900 dark:text-white">{title}</div>
      </div>
      <div className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-1">{value}</div>
      <div className="text-xs text-slate-600 dark:text-white/70">{meta}</div>
    </div>
  )
}
