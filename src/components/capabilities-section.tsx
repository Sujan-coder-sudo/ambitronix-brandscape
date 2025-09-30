import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Building2, 
  Zap, 
  Droplets, 
  Users, 
  MapPin, 
  Download,
  Calendar,
  Target 
} from "lucide-react"

const facilitySpecs = [
  {
    icon: Building2,
    title: "Main Building",
    area: "3,000 sq. mtrs",
    builtUp: "2,900 sq. mtrs",
    description: "Primary manufacturing and assembly facility"
  },
  {
    icon: Users,
    title: "Office Complex",
    area: "300 sq. mtrs", 
    builtUp: "290 sq. mtrs",
    description: "Administrative and design offices"
  },
  {
    icon: Zap,
    title: "Power Infrastructure",
    area: "200 KVA",
    builtUp: "Generator backup",
    description: "Reliable power supply with backup systems"
  },
  {
    icon: Droplets,
    title: "Water Supply",
    area: "5,000 LPD",
    builtUp: "Municipal supply",
    description: "Adequate water for operations and utilities"
  }
]

const landUtilization = [
  { category: "Manufacturing Facility", area: 3000, percentage: 37 },
  { category: "Green Space & Parking", area: 3494, percentage: 43 },
  { category: "Storage & Warehousing", area: 1000, percentage: 12 },
  { category: "Office & Amenities", area: 600, percentage: 8 }
]

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Manufacturing Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              State-of-the-art facility designed for precision manufacturing with optimal 
              land utilization and sustainable operations.
            </p>
          </div>

          {/* Facility Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Planned Facility Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our strategically designed 2.0-acre facility at Bengaluru Aerospace SEZ provides 
                  the perfect environment for advanced electronic manufacturing and automation, 
                  with careful attention to efficiency and environmental considerations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">2.0</div>
                  <div className="text-sm text-muted-foreground">Acres Total Land</div>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-accent">4,420</div>
                  <div className="text-sm text-muted-foreground">Built-up Area (sq.m)</div>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-deep-blue">8,094</div>
                  <div className="text-sm text-muted-foreground">Total Plot Area (sq.m)</div>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-2xl font-bold text-primary">50</div>
                  <div className="text-sm text-muted-foreground">Employment Positions</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="professional" className="group">
                  <Download className="mr-2 h-4 w-4" />
                  Download Floor Plan
                </Button>
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Request Site Visit
                </Button>
              </div>
            </div>

            {/* Land Utilization Chart */}
            <div className="bg-card rounded-lg p-6 border shadow-card">
              <h4 className="text-lg font-semibold text-foreground mb-6">Land Utilization Breakdown</h4>
              <div className="space-y-4">
                {landUtilization.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{item.category}</span>
                      <span className="text-sm text-muted-foreground">{item.area} sq.m ({item.percentage}%)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Facility Specifications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {facilitySpecs.map((spec, index) => {
              const IconComponent = spec.icon
              return (
                <Card key={index} className="hover:shadow-elegant transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{spec.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Area/Capacity:</span>
                        <Badge variant="secondary">{spec.area}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Built-up:</span>
                        <Badge variant="outline">{spec.builtUp}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">{spec.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Infrastructure Requirements */}
          <div className="bg-card rounded-lg p-8 border shadow-card">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  Infrastructure Requirements
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Power Supply</span>
                    <span className="font-medium">200 KVA with backup</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Water Requirement</span>
                    <span className="font-medium">5,000 LPD</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">Bengaluru Aerospace SEZ</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Connectivity</span>
                    <span className="font-medium">Highway & Airport Access</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <MapPin className="h-5 w-5 text-accent mr-2" />
                  Strategic Location Benefits
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      Located in Karnataka's "Silicon Valley" with established IT and design ecosystem
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      Access to skilled professional pool and supplier network
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-deep-blue rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      Proximity to aerospace and defense manufacturing clusters
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      Government incentives and SEZ benefits for electronics manufacturing
                    </p>
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