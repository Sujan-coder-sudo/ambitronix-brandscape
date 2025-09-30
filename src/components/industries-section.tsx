import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Plane, 
  Car, 
  Heart, 
  Radio, 
  Factory, 
  Shield,
  Satellite,
  Cpu
} from "lucide-react"

const industries = [
  {
    icon: Plane,
    title: "Aerospace & Defence",
    description: "Mission-critical electronic systems for aerospace and defense applications",
    applications: [
      "Avionics systems",
      "Defense communication equipment",
      "Radar and surveillance systems",
      "Flight control electronics"
    ],
    customers: ["HAL", "DRDO", "BEL", "ISRO"]
  },
  {
    icon: Car,
    title: "Automotive & EV",
    description: "Advanced automotive electronics and electric vehicle components",
    applications: [
      "Battery management systems",
      "Electric drive controllers",
      "ADAS sensor modules",
      "Infotainment systems"
    ],
    customers: ["Tata Motors", "Mahindra", "Bajaj Auto", "TVS Motor"]
  },
  {
    icon: Heart,
    title: "Medical & Healthcare",
    description: "Precision medical devices and diagnostic equipment electronics",
    applications: [
      "Patient monitoring devices",
      "Diagnostic equipment",
      "Surgical instruments",
      "Portable medical devices"
    ],
    customers: ["Healthcare OEMs", "Medical Device Manufacturers", "Research Labs"]
  },
  {
    icon: Radio,
    title: "Telecom & Electronics",
    description: "Communication infrastructure and consumer electronics solutions",
    applications: [
      "Base station equipment",
      "RF modules and antennas",
      "Network infrastructure",
      "IoT communication devices"
    ],
    customers: ["Airtel", "Jio", "BSNL", "Electronics Companies"]
  },
  {
    icon: Factory,
    title: "Industrial Automation",
    description: "Smart manufacturing and process automation solutions",
    applications: [
      "PLC and control systems",
      "Industrial IoT devices",
      "Process monitoring",
      "Robotics controllers"
    ],
    customers: ["Manufacturing Companies", "Process Industries", "Automation Integrators"]
  },
  {
    icon: Satellite,
    title: "Space Technology",
    description: "Specialized electronics for space and satellite applications",
    applications: [
      "Satellite electronics",
      "Ground station equipment",
      "Space-grade components",
      "Communication systems"
    ],
    customers: ["ISRO", "Space Research Organizations", "Satellite Manufacturers"]
  }
]

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specialized electronic solutions across diverse sectors, from aerospace and defense 
              to medical devices and industrial automation.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/30"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {industry.title}
                      </CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {industry.applications.map((app, appIndex) => (
                          <Badge 
                            key={appIndex} 
                            variant="secondary" 
                            className="text-xs px-2 py-1"
                          >
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Target Customers:</h4>
                      <div className="text-xs text-muted-foreground">
                        {industry.customers.join(" • ")}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Key Statistics */}
          <div className="bg-gradient-accent rounded-lg p-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">
                Market Reach & Potential
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">6+</div>
                  <div className="text-white/90 text-sm">Industry Sectors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-white/90 text-sm">Target Companies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">₹100Cr+</div>
                  <div className="text-white/90 text-sm">Market Potential</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-white/90 text-sm">Support Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Specialized Capabilities */}
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Defense & Aerospace Expertise</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Specialized experience in designing and manufacturing electronics for mission-critical 
                  defense and aerospace applications with stringent quality and reliability requirements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Mil-Std Compliance</Badge>
                  <Badge variant="outline" className="text-xs">High Reliability</Badge>
                  <Badge variant="outline" className="text-xs">Security Clearance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cpu className="h-5 w-5 text-accent" />
                  <span>Advanced Technology Integration</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Cutting-edge capabilities in IoT, AI/ML integration, and smart manufacturing 
                  technologies that enable next-generation electronic solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">IoT Integration</Badge>
                  <Badge variant="outline" className="text-xs">AI/ML Ready</Badge>
                  <Badge variant="outline" className="text-xs">Smart Manufacturing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}