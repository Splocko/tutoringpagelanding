"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Mail, MessageCircle } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-background/95 backdrop-blur-xl border border-border/40 rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-foreground/60 hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content */}
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold font-serif text-foreground mb-2">Get in Touch</h2>
                <p className="text-foreground/70">
                  Ready to start your learning journey? Contact me today for your free taster session!
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-foreground/80">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">tutoredbysaood@icloud.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-foreground/80">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">+44 7488 528958</span>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href="mailto:tutoredbysaood@icloud.com?subject=Free Taster Session Inquiry">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="border-border hover:bg-accent bg-transparent">
                    <a
                      href="https://wa.me/447488528958?text=Hi! I'm interested in booking a free taster session for tutoring."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Open WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
