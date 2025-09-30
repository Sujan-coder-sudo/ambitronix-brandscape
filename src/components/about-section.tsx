import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Cog, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              M/s. Ambitronix combines the principles of electrical engineering, computer science, 
              and manufacturing to create advanced electronic systems using automated processes.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Electronic Design, Manufacturing & Automation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Electronic Design, Manufacturing, and Automation (EDMA), we fuse cutting-edge 
                  engineering with intelligent automation to revolutionize electronics production. 
                  Our expertise spans PCB design, smart manufacturing, and robotic systems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Driven by innovation and sustainability, we empower businesses with next-generation 
                  solutions that redefine the future of electronics, delivering precision, efficiency, 
                  and scalability for industries worldwide.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="professional" className="group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline">
                  View Facility Plans
                </Button>
              </div>
            </div>

            {/* Right Content - Key Features */}
            <div className="space-y-4">
              <Card className="border-l-4 border-l-primary hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Advanced Technology</h4>
                      <p className="text-sm text-muted-foreground">
                        Cutting-edge EDA tools and automated processes for complex electronics design and production.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent-green hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Cog className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Smart Manufacturing</h4>
                      <p className="text-sm text-muted-foreground">
                        AI-powered robotics and adaptive control systems transforming traditional production workflows.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-deep-blue hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-deep-blue/10 rounded-lg">
                      <Target className="h-6 w-6 text-deep-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Industry Focus</h4>
                      <p className="text-sm text-muted-foreground">
                        Specialized solutions for aerospace, defense, automotive, medical, and telecommunications sectors.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Company Details */}
          <div className="bg-card rounded-lg p-8 shadow-card border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Company Background</h4>
                <p className="text-muted-foreground mb-4">
                  M/s. Ambitronix is a proprietary concern promoted by Smt. Savitha Rathod. 
                  The proposed industry focuses on Electronic Design, Manufacturing, and Automation (EDMA) 
                  with a requirement of 2.00 acres at Bengaluru Aerospace SEZ Industrial Area.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Constitution:</span>
                    <span className="font-medium">Proprietorship</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Employment:</span>
                    <span className="font-medium">50 positions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">Bengaluru Rural District</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Promoter Profile</h4>
                <p className="text-muted-foreground mb-4">
                  The proprietor, Smt. Savitha Rathod, is a women entrepreneur aged 43 years with M.Com Graduate 
                  qualifications. She belongs to Scheduled Caste Category and her family is financially sound 
                  for implementation of the proposed project.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Education:</span>
                    <span className="font-medium">M.Com Graduate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium">SC Women Entrepreneur</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-medium">Business & Technical</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}