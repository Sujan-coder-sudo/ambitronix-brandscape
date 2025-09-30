
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import logoDark from "@/assets/Logo_PNG_Ambitronix.png"
import logoLight from "@/assets/White_logo-removebg-preview.png"
import { useTheme } from "next-themes"

export function Header() {
  const { theme, resolvedTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMobileMenuOpen(false)
    }
  }

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Industries", href: "#industries" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  // Determine if dark theme is active
  const isDark = theme === "dark" || (theme === "system" && resolvedTheme === "dark")

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? isScrolled
            ? "bg-background border-b border-border shadow-card"
            : "bg-background"
          : isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-card"
          : "bg-background"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center justify-between h-24">
            <img
              src={isDark ? logoDark : logoLight}
              alt="Ambitronix EDMA Logo"
              className="h-24 w-auto sm:h-28 md:h-32 lg:h-36 xl:h-40"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.slice(1))}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 rounded-md hover:bg-accent/50"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="professional"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="hidden sm:inline-flex"
            >
              Contact Us
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden ${
              isDark ? "bg-background border-t border-border" : "bg-background/95 backdrop-blur-md border-t border-border"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2">
                <Button variant="professional" size="sm" onClick={() => scrollToSection("contact")} className="w-full">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
