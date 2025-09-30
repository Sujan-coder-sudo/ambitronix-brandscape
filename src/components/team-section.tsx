import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  User, 
  GraduationCap, 
  Award, 
  Users, 
  Code, 
  Wrench, 
  Bot, 
  Beaker,
  BarChart
} from "lucide-react"

const teamRoles = [
  {
    icon: Code,
    title: "R&D Engineers",
    description: "Innovate next-gen electronic solutions",
    skills: ["Circuit Design", "Embedded Systems", "IoT Development", "Signal Processing"]
  },
  {
    icon: Wrench,
    title: "Manufacturing Specialists", 
    description: "Optimize production processes and quality control",
    skills: ["SMT Assembly", "Quality Control", "Process Optimization", "IPC Standards"]
  },
  {
    icon: Bot,
    title: "Automation Experts",
    description: "Integrate cutting-edge automation technologies",
    skills: ["Industrial Robotics", "PLC Programming", "AI/ML Integration", "Process Control"]
  },
  {
    icon: Beaker,
    title: "R&D Innovators",
    description: "Develop new solutions and improve designs",
    skills: ["Research & Development", "Product Innovation", "Technology Integration", "Testing"]
  },
  {
    icon: BarChart,
    title: "Project Managers",
    description: "Oversee project lifecycle and coordination",
    skills: ["Project Management", "Team Coordination", "Budget Management", "Timeline Planning"]
  }
]

const workforceStructure = [
  {
    department: "Electronic Design",
    roles: "PCB Designers, Hardware Engineers, Embedded Software Developers",
    ratio: "1:6 (Lead: Team)",
    model: "Day Shift"
  },
  {
    department: "Manufacturing",
    roles: "SMT Operators, Quality Inspectors, Process Engineers, Supervisors", 
    ratio: "1:15 (Supervisor: Operators)",
    model: "2 Shifts"
  },
  {
    department: "Automation",
    roles: "Mechatronics Engineers, Controls Engineers, PLC Technicians",
    ratio: "1:5 (Engineer: Technician)", 
    model: "2 Shifts"
  },
  {
    department: "Quality Assurance",
    roles: "QA Analysts, Test Engineers, Regulatory Officers",
    ratio: "1:8 (QA Lead: Team)",
    model: "Day Shift"
  },
  {
    department: "Supply Chain & Logistics",
    roles: "Procurement Officers, Inventory Controllers, Warehouse Staff",
    ratio: "1:10 (Manager: Team)",
    model: "Day Shift"
  }
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A diverse team of experienced professionals dedicated to creating innovative 
              and efficient electronic systems with expertise across the entire value chain.
            </p>
          </div>

          {/* Founder Profile */}
          <div className="bg-gradient-accent rounded-lg p-8 text-center mb-16">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Smt. Savitha Rathod</h3>
                <p className="text-white/90 mb-4">Founder & Proprietor</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <GraduationCap className="h-6 w-6 text-white mx-auto mb-2" />
                  <div className="text-white font-medium">M.Com Graduate</div>
                  <div className="text-white/80 text-sm">Business & Commerce</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Award className="h-6 w-6 text-white mx-auto mb-2" />
                  <div className="text-white font-medium">SC Category</div>
                  <div className="text-white/80 text-sm">Women Entrepreneur</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Users className="h-6 w-6 text-white mx-auto mb-2" />
                  <div className="text-white font-medium">43 Years</div>
                  <div className="text-white/80 text-sm">Industry Experience</div>
                </div>
              </div>
              
              <p className="text-white/90 mt-6 leading-relaxed">
                Visionary leader with strong business acumen and technical understanding, 
                driving the establishment of India's advanced EDMA facility with sustainable 
                and innovative manufacturing practices.
              </p>
            </div>
          </div>

          {/* Core Team Roles */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Core Team Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamRoles.map((role, index) => {
                const IconComponent = role.icon
                return (
                  <Card 
                    key={index} 
                    className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{role.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {role.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {role.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Workforce Structure */}
          <div className="bg-card rounded-lg p-8 border shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Workforce Structure & Organization
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Department</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Key Roles</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Staffing Ratio</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Shift Model</th>
                  </tr>
                </thead>
                <tbody>
                  {workforceStructure.map((dept, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="py-4 px-4">
                        <span className="font-medium text-foreground">{dept.department}</span>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-sm text-muted-foreground">{dept.roles}</span>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline" className="text-xs">{dept.ratio}</Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge 
                          variant={dept.model === "Day Shift" ? "secondary" : "outline"}
                          className="text-xs"
                        >
                          {dept.model}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Training & Development */}
          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>Training & Development</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Internship Programs</h4>
                    <p className="text-sm text-muted-foreground">
                      Partnered with local universities and polytechnics for continuous talent inflow
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Apprenticeships</h4>
                    <p className="text-sm text-muted-foreground">
                      In-house training for soldering, IPC standards, and SMT operations
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Quarterly upskilling in automation, AI/ML in manufacturing, and IoT systems
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span>Leadership Development</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Talent Pipeline</h4>
                    <p className="text-sm text-muted-foreground">
                      Identify high-potential staff for future supervisory and managerial roles
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Skills Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced training in automation technologies and smart manufacturing
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Safety & Compliance</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive EHS training and regulatory compliance education
                    </p>
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