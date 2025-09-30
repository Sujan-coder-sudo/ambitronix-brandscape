import { Button } from "@/components/ui/button"
import { ArrowRight, Download, MapPin, IndianRupee, Calendar } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleDownloadDPR = () => {
    // This would link to the actual DPR document
    window.open("/ambitronix-dpr.pdf", "_blank")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90 dark:opacity-95"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-green/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-teal/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Industrial-scale{" "}
            <span className="bg-gradient-to-r from-accent-green to-primary-teal bg-clip-text text-transparent">
              Electronic Design
            </span>{" "}
            & Automation
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fusing cutting-edge engineering with intelligent automation to revolutionize electronics production. 
            From custom PCBs to complete industrial solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("services")}
              className="group"
            >
              Explore Capabilities
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={handleDownloadDPR}
              className="border-white/30 text-white hover:bg-white/10 hover:border-accent-green group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download DPR
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-5 w-5 text-accent-green mr-2" />
                <span className="text-white/90 text-sm font-medium">Land Planned</span>
              </div>
              <div className="text-2xl font-bold text-white">2.0 acres</div>
              <div className="text-white/70 text-xs">Bengaluru Aerospace SEZ</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <IndianRupee className="h-5 w-5 text-accent-green mr-2" />
                <span className="text-white/90 text-sm font-medium">Investment</span>
              </div>
              <div className="text-2xl font-bold text-white">₹16 Cr</div>
              <div className="text-white/70 text-xs">Total Project Cost</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-5 w-5 text-accent-green mr-2" />
                <span className="text-white/90 text-sm font-medium">Start Date</span>
              </div>
              <div className="text-2xl font-bold text-white">Jan 2026</div>
              <div className="text-white/70 text-xs">Projected Launch</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent-green rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}