import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, Cpu, Factory, Bot, CheckCircle, Beaker } from "lucide-react"

const services = [
  {
    icon: Cpu,
    title: "Custom Electronic Design",
    description: "Tailored PCBs, embedded systems, and IoT solutions engineered for peak performance and scalability.",
    details: [
      "Custom PCB design and layout optimization",
      "Embedded systems development",
      "IoT device integration and connectivity",
      "Hardware-software co-design",
      "Signal integrity and EMC compliance",
      "Component selection and sourcing"
    ],
    benefits: "Optimized designs that reduce costs while maximizing performance and reliability."
  },
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    description: "High-precision, automated production of electronic components with rapid prototyping and low-to-high volume capability.",
    details: [
      "SMT assembly and through-hole mounting",
      "Multi-layer PCB fabrication",
      "Rapid prototyping services",
      "Low to high volume production",
      "Clean room manufacturing",
      "Automated pick-and-place systems"
    ],
    benefits: "Faster time-to-market with consistent quality and competitive pricing."
  },
  {
    icon: Bot,
    title: "Industrial Automation",
    description: "Smart robotics, AI-driven assembly lines, and process optimization to maximize efficiency and reduce costs.",
    details: [
      "Robotic assembly line integration",
      "PLC programming and control systems",
      "Industrial IoT implementation",
      "Process automation and optimization",
      "Human-machine interface design",
      "Predictive maintenance systems"
    ],
    benefits: "Increased efficiency, reduced labor costs, and improved product consistency."
  },
  {
    icon: CheckCircle,
    title: "Testing & Validation",
    description: "Rigorous quality control, compliance testing, and reliability analysis to ensure flawless product performance.",
    details: [
      "In-circuit testing (ICT)",
      "Functional testing protocols",
      "Environmental stress testing",
      "EMC/EMI compliance testing",
      "Reliability analysis and MTBF",
      "Regulatory certification support"
    ],
    benefits: "Guaranteed product reliability and compliance with international standards."
  }
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              From Prototype to Production
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              End-to-end electronic design and manufacturing services that transform your concepts 
              into market-ready products with precision and efficiency.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/30"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="group w-full justify-between hover:border-primary"
                          onClick={() => setSelectedService(index)}
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <IconComponent className="h-5 w-5 text-primary" />
                            </div>
                            <span>{service.title}</span>
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Service Details:</h4>
                            <ul className="space-y-2">
                              {service.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start space-x-2">
                                  <CheckCircle className="h-4 w-4 text-accent-green mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-l-accent">
                            <h4 className="font-semibold text-foreground mb-2">Key Benefits:</h4>
                            <p className="text-sm text-muted-foreground">{service.benefits}</p>
                          </div>

                          <Button variant="professional" className="w-full">
                            Request Consultation
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Integration Message */}
          <div className="bg-gradient-accent rounded-lg p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <Beaker className="h-12 w-12 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold text-white mb-4">
                End-to-End Integration
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Seamless support from concept to deployment, combining design, manufacturing, 
                and automation for complete turnkey solutions. Our integrated approach ensures 
                optimal performance and faster time-to-market.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-accent">
                Explore Integration Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}