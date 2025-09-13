"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface AnnouncementBannerProps {
  message: string
  cta: string
  onCtaClick?: () => void
  className?: string
}

export function AnnouncementBanner({ message, cta, onCtaClick, className }: AnnouncementBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "flex items-center gap-3 px-4 py-2 rounded-full border border-border",
        "bg-background/80 supports-[backdrop-filter]:bg-background/50 backdrop-blur",
        "shadow-sm text-sm",
        className,
      )}
    >
      <span className="text-foreground/80">
        {message}
      </span>
      <Button size="sm" className="h-8 px-3" onClick={onCtaClick}>
        {cta}
      </Button>
    </motion.div>
  )
}
