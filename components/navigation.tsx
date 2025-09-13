"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, BookOpen } from "lucide-react"

import AnimatedShinyText from "@/components/animated-shiny-text" // Import the new component

interface NavigationProps {
  isModalOpen: boolean
  setIsModalOpen: (open: boolean) => void
  isBannerVisible: boolean
  setIsBannerVisible: (visible: boolean) => void
}

export default function Navigation({
  isModalOpen,
  setIsModalOpen,
  isBannerVisible,
  setIsBannerVisible,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Subjects", href: "#subjects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      {isBannerVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 text-center py-4 px-4 relative mt-16 z-40"
        >
          <AnimatedShinyText className="text-sm font-medium">
            ✨ Limited time: First taster session free. Contact me
          </AnimatedShinyText>
          <button
            onClick={() => setIsBannerVisible(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800/80 hover:text-gray-800 dark:text-gray-200/80 dark:hover:text-gray-200"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
      <motion.nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-out ${isScrolled ? "top-2" : "top-0"}`}
      >
        <div className={`transition-all duration-300 ease-out ${isScrolled ? "max-w-4xl mx-auto px-4" : "w-full"}`}>
          <motion.div
            className={`flex items-center justify-between transition-all duration-300 ease-out ${
              isScrolled
                ? "h-14 bg-background/95 backdrop-blur-xl border border-border/40 rounded-full px-8 shadow-2xl shadow-primary/20 glow-effect"
                : "h-16 bg-background/90 backdrop-blur-md px-6"
            }`}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl font-serif text-primary flex items-center flex-shrink-0"
            >
              <BookOpen className="h-8 w-8 mr-2 text-primary" />
              saood tutoring
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 flex-shrink-0">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <Button
                size="sm"
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Book a Free Taster
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </motion.div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-2 bg-background/95 backdrop-blur-xl border border-border/40 rounded-2xl p-4 shadow-xl"
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
                <Button
                  size="sm"
                  onClick={() => {
                    setIsModalOpen(true)
                    setIsOpen(false)
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit"
                >
                  Book a Free Taster
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      
    </>
  )
}
