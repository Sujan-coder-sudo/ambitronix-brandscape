import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Download,
  ArrowUp,
  Linkedin,
  Twitter,
  Globe
} from "lucide-react"
import logoAmbitronix from "@/assets/logo-ambitronix-icon.png"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src={logoAmbitronix} 
                  alt="Ambitronix EDMA Logo" 
                  className="h-8 w-8"
                />
                <div>
                  <span className="text-lg font-semibold text-foreground">Ambitronix</span>
                  <span className="text-xs text-muted-foreground block -mt-1">EDMA</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Industrial-scale Electronic Design, Manufacturing & Automation. 
                Revolutionizing electronics production with cutting-edge engineering 
                and intelligent automation.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Bengaluru, Karnataka</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a 
                    href="tel:+919880107417" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 98801 07417
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a 
                    href="mailto:savi.nature@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    savi.nature@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="space-y-2">
                {[
                  { name: "About Us", href: "about" },
                  { name: "Services", href: "services" },
                  { name: "Capabilities", href: "capabilities" },
                  { name: "Industries", href: "industries" },
                  { name: "Timeline", href: "timeline" },
                  { name: "Contact", href: "contact" }
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Our Services</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Custom Electronic Design</p>
                <p>Advanced Manufacturing</p>
                <p>Industrial Automation</p>
                <p>Testing & Validation</p>
                <p>End-to-End Integration</p>
              </div>
            </div>

            {/* Project Info & Downloads */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Project Info</h4>
              <div className="space-y-3">
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-sm font-medium text-foreground mb-1">Investment</div>
                  <div className="text-lg font-bold text-primary">₹16 Crores</div>
                </div>
                <div className="bg-card rounded-lg p-4 border">
                  <div className="text-sm font-medium text-foreground mb-1">Land Area</div>
                  <div className="text-lg font-bold text-accent">2.0 Acres</div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open("/ambitronix-dpr.pdf", "_blank")}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download DPR
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} M/s. Ambitronix. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Globe className="h-4 w-4" />
              </Button>
            </div>

            {/* Back to Top */}
            <Button 
              variant="outline" 
              size="sm"
              onClick={scrollToTop}
              className="group"
            >
              <ArrowUp className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}