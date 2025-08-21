"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "AI Assistant", href: "#ai" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Download", href: "#download" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl font-serif text-primary"
          >
            unmessd
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="mr-2 h-4 w-4" />
              Get App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-border/50"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">
                <Download className="mr-2 h-4 w-4" />
                Get App
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
