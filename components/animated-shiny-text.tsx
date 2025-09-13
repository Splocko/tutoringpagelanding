"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedShinyTextProps {
  children: React.ReactNode
  className?: string
  shimmerWidth?: number
}

export default function AnimatedShinyText({ children, className, shimmerWidth = 100 }: AnimatedShinyTextProps) {
  return (
    <div
      className={cn(
        "relative inline-block overflow-hidden bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent",
        className,
      )}
    >
      <motion.div
        className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        style={{
          width: `${shimmerWidth}px`,
          transform: "skewX(-20deg)",
        }}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 3,
        }}
      />
      {children}
    </div>
  )
}
