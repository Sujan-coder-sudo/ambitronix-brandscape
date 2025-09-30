import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  FileText, 
  Building, 
  CheckCircle, 
  Construction, 
  Package, 
  Play 
} from "lucide-react"

const milestones = [
  {
    icon: FileText,
    title: "Land Allotment by KIADB",
    date: "Sep 2025",
    status: "current",
    description: "Official land allotment process and documentation completion",
    details: "Securing 2.0 acres at Bengaluru Aerospace SEZ Industrial Area"
  },
  {
    icon: Calendar,
    title: "Lease Agreement with KIADB", 
    date: "Nov 2025",
    status: "upcoming",
    description: "Finalize lease terms and legal documentation",
    details: "Complete legal formalities and payment processing"
  },
  {
    icon: Building,
    title: "Building Plan Approval",
    date: "Dec 2025", 
    status: "upcoming",
    description: "Architectural plans approval from KIADB authorities",
    details: "Submit and approve detailed facility construction plans"
  },
  {
    icon: CheckCircle,
    title: "Regulatory Approvals",
    date: "Jan 2026",
    status: "upcoming", 
    description: "Environmental and statutory clearances",
    details: "KSPCB consent, fire safety, and other required approvals"
  },
  {
    icon: Construction,
    title: "Construction Phase",
    date: "Feb 2026",
    status: "upcoming",
    description: "Begin facility construction and infrastructure development",
    details: "Main building, office complex, and utility installations"
  },
  {
    icon: Building,
    title: "Construction Completion",
    date: "Jul 2027",
    status: "future",
    description: "Facility construction and infrastructure completion",
    details: "Final inspections and occupancy clearances"
  },
  {
    icon: Package,
    title: "Equipment Procurement",
    date: "Aug 2027",
    status: "future",
    description: "Installation of manufacturing equipment and systems",
    details: "SMT lines, testing equipment, and automation systems"
  },
  {
    icon: Play,
    title: "Operations Commencement",
    date: "Sep 2027",
    status: "future", 
    description: "Full-scale production and service delivery begins",
    details: "Complete implementation and production handoff"
  }
]

const designCycle = [
  {
    milestone: "M1: Design Freeze",
    timeline: "Month 3",
    description: "Completion of all schematics, simulations, and component selection, ready for prototyping"
  },
  {
    milestone: "M2: Prototype Validation", 
    timeline: "Month 9",
    description: "Successful testing and verification of alpha units against all key performance specifications"
  },
  {
    milestone: "M3: Production Line Setup",
    timeline: "Month 15", 
    description: "Full integration and calibration of robotics and assembly systems for pilot runs"
  },
  {
    milestone: "M4: Quality Certification",
    timeline: "Month 18",
    description: "First articles from production line pass all stress tests and receive required compliance approvals"
  },
  {
    milestone: "M5: Full-Scale Production",
    timeline: "Month 24",
    description: "Achievement of target yield and throughput, marking formal transition to sustained manufacturing"
  }
]

export function TimelineSection() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "current": return "bg-accent text-accent-foreground"
      case "upcoming": return "bg-primary text-primary-foreground"
      case "future": return "bg-muted text-muted-foreground"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "current": return "border-accent bg-accent/20"
      case "upcoming": return "border-primary bg-primary/20"
      case "future": return "border-muted bg-muted/20"
      default: return "border-muted bg-muted/20"
    }
  }

  return (
    <section id="timeline" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Project Roadmap
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive timeline from land acquisition to full-scale production, 
              ensuring systematic implementation and quality delivery.
            </p>
          </div>

          {/* Implementation Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Project Implementation Schedule
            </h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    {/* Timeline Line */}
                    <div className="flex flex-col items-center">
                      <div className={`p-3 rounded-full border-2 ${getStatusIcon(milestone.status)}`}>
                        <IconComponent className={`h-5 w-5 ${
                          milestone.status === 'current' ? 'text-accent' :
                          milestone.status === 'upcoming' ? 'text-primary' :
                          'text-muted-foreground'
                        }`} />
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-16 bg-border mt-2"></div>
                      )}
                    </div>
                    
                    {/* Milestone Content */}
                    <div className="flex-1 pb-8">
                      <Card className={`${
                        milestone.status === 'current' ? 'border-accent shadow-glow' :
                        milestone.status === 'upcoming' ? 'border-primary/30' :
                        'border-border'
                      } transition-all duration-300 hover:shadow-elegant`}>
                        <CardContent className="p-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                            <h4 className="text-lg font-semibold text-foreground">{milestone.title}</h4>
                            <Badge className={getStatusColor(milestone.status)}>
                              {milestone.date}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-2">{milestone.description}</p>
                          <p className="text-sm text-muted-foreground/80">{milestone.details}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Design Cycle Timeline */}
          <div className="bg-card rounded-lg p-8 border shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Design Cycle After Land Acquisition
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {designCycle.map((phase, index) => (
                <Card key={index} className="hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-2">{phase.timeline}</Badge>
                      <h4 className="font-semibold text-foreground text-sm">{phase.milestone}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Investment Structure */}
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Investment Distribution</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">R&D & Design Engineering</span>
                    <Badge variant="secondary">20%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Manufacturing & Automation</span>
                    <Badge variant="secondary">45%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Raw Materials & Components</span>
                    <Badge variant="secondary">20%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Quality Assurance & Optimization</span>
                    <Badge variant="secondary">15%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Success Metrics</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Target yield and throughput achievement</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Compliance with international standards</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-deep-blue rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Sustainable manufacturing operations</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Full automation system integration</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}