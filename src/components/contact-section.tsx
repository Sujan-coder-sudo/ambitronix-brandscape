import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Download, 
  Send, 
  Clock,
  Building,
  User
} from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    })
    
    setIsSubmitting(false)
    
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  const handleDownloadDPR = () => {
    // This would link to the actual DPR document
    window.open("/ambitronix-dpr.pdf", "_blank")
    toast({
      title: "DPR Download Started",
      description: "The Detailed Project Report is being downloaded.",
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your electronic design and manufacturing needs? 
              Contact us for consultations, partnerships, or to download our detailed project report.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-primary" />
                    <span>Company Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">M/s. Ambitronix</h4>
                    <p className="text-sm text-muted-foreground">
                      Electronic Design, Manufacturing & Automation
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Proprietor</h4>
                    <p className="text-sm text-muted-foreground">Smt. Savitha Rathod</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span>Address</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>#B 105, Jyothi Enclave</p>
                    <p>1st A Cross, Kaggadasapura Main Road</p>
                    <p>C V Raman Nagar</p>
                    <p>Bengaluru - 560093</p>
                    <p>Karnataka, India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-deep-blue">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-deep-blue" />
                    <span>Contact Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a 
                      href="tel:+919880107417" 
                      className="text-sm text-foreground hover:text-primary transition-colors"
                    >
                      +91 98801 07417
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a 
                      href="mailto:savi.nature@gmail.com"
                      className="text-sm text-foreground hover:text-primary transition-colors"
                    >
                      savi.nature@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-primary" />
                    <span>Planned Facility</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Bengaluru Aerospace SEZ Industrial Area</p>
                    <p>Bengaluru Rural District</p>
                    <p>Karnataka, India</p>
                    <div className="pt-2">
                      <span className="text-xs font-medium text-primary">
                        2.0 acres | ₹16 Cr investment | Jan 2026 start
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    We'd love to hear about your project requirements and discuss how we can help.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name" 
                          placeholder="Your full name" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          required 
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+91 XXXXX XXXXX" 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input 
                          id="company" 
                          placeholder="Your company name" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input 
                        id="subject" 
                        placeholder="How can we help you?" 
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                        className="min-h-[120px]"
                        required 
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="submit" 
                        variant="professional" 
                        className="flex-1"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                      <Button 
                        type="button"
                        variant="outline" 
                        onClick={handleDownloadDPR}
                        className="flex-1"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download DPR
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      * Required fields. We'll respond within 24 hours during business days.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
                <p className="text-muted-foreground">
                  Current office location in Bengaluru with planned facility at Aerospace SEZ
                </p>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive map would be embedded here</p>
                    <p className="text-sm text-muted-foreground">
                      Showing current office and planned facility locations
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