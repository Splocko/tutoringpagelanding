"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-purple-950/20 to-transparent border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="space-y-4"
          >
            <h3 className="font-bold text-2xl font-serif text-primary">unmessd</h3>
            <p className="text-foreground/70 leading-relaxed">
              Transforming chaos into clarity, one task at a time. Built for the modern mind that refuses to settle for
              messy.
            </p>
          </motion.div>

          {/* Developer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg text-foreground">About the Developer</h4>
            <div className="space-y-3">
              <p className="text-foreground/70">
                Built with passion by <span className="text-primary font-medium">Saood</span>, a 16-year-old developer
                who believes that age is just a number when it comes to creating meaningful solutions.
              </p>
              <p className="text-foreground/60 text-sm">
                When not coding, you'll find him exploring new technologies, drinking way too much coffee, and dreaming
                up the next big thing that'll make life a little less messy for everyone.
              </p>
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <p className="text-foreground/60 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by a teenager who refuses to let age define
            capability
          </p>
          <p className="text-foreground/60 text-sm">unmessd by saood</p>
        </motion.div>
      </div>
    </footer>
  )
}
