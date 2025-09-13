"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-purple-950/20 to-transparent border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="space-y-4"
          >
            <h3 className="font-bold text-2xl font-serif text-primary">About</h3>
            <p className="text-foreground/70 leading-relaxed">
              saood tutoring provides focused, friendly, and effective GCSE and 11+ tutoring in Maths, Sciences, and
              Computer Science. Helping students achieve their academic goals with personalized learning approaches.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg text-foreground">Quick Links</h4>
            <div className="space-y-3">
              <a href="#subjects" className="block text-foreground/70 hover:text-primary transition-colors">
                Subjects
              </a>
              <a href="#about" className="block text-foreground/70 hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="block text-foreground/70 hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg text-foreground">Get in touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-foreground/70">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">tutoredbysaood@icloud.com</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/70">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+44 7488 528958</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/70">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Online</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/70">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm">Evenings & weekends available</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0"
        >
          <p className="text-foreground/60 text-sm flex items-center">
            Teaching with care and clarity <Heart className="h-4 w-4 mx-1 text-red-500" />
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
