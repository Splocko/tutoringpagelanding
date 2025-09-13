"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedShinyText from "@/components/animated-shiny-text"
import {
  Calculator,
  Atom,
  FlaskConical,
  Microscope,
  Monitor,
  GraduationCap,
  Target,
  BookOpen,
  BookMarked,
  Calendar,
  Trophy,
  MapPin,
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactModal from "@/components/contact-modal"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const features = [
  {
    icon: Target,
    title: "Focused Learning",
    description: "Targeted lessons designed to address your specific learning needs and exam requirements.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Coverage",
    description: "Full curriculum coverage for GCSE Maths, Sciences, Computer Science across all exam boards.",
  },
  {
    icon: BookMarked,
    title: "Exam Preparation",
    description: "Structured revision sessions and practice papers to build confidence for your exams.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Evening and weekend sessions available to fit around your school timetable.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Track record of helping students achieve their target grades and beyond.",
  },
  {
    icon: MapPin,
    title: "Online Sessions",
    description: "Convenient online tutoring sessions that fit your schedule and learning style.",
  },
]

const subjects = [
  { name: "Maths", icon: Calculator },
  { name: "Physics", icon: Atom },
  { name: "Chemistry", icon: FlaskConical },
  { name: "Biology", icon: Microscope },
  { name: "Computer Science", icon: Monitor },
  { name: "11+", icon: GraduationCap },
]

export default function SaoodTutoring() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isBannerVisible, setIsBannerVisible] = useState(true)

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation Component */}
      <Navigation
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isBannerVisible={isBannerVisible}
        setIsBannerVisible={setIsBannerVisible}
      />

      <section id="hero" className="relative min-h-screen flex items-center justify-center educational-bg pt-16">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col justify-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-foreground leading-tight">
              GCSE & 11+ Tutoring
              <br />
              <span className="text-primary">Maths, Sciences, Computer Science</span>
            </h1>

            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
                I'm a tutor who achieved outstanding GCSE grades and I'm here to help you do the same. Focused,
                friendly, and effective tutoring to help you achieve your target grades. One-to-one and group sessions
                available online.
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 max-w-md mx-auto">
                <AnimatedShinyText className="text-lg font-semibold">Free taster session available</AnimatedShinyText>
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-xl font-medium rounded-xl soft-glow"
              >
                Book a free chat
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="subjects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8">Subjects I Teach</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Comprehensive tutoring across key GCSE and 11+ subjects with flexible learning options.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Badge variant="secondary" className="px-6 py-3 text-sm">
                GCSE
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-sm">
                11+
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-sm">
                One-to-One
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-sm">
                Group sessions
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-sm">
                Online
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-sm">
                AQA
              </Badge>
              <Badge variant="secondary" className="px-6 py-3 text-sm">
                Edexcel
              </Badge>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {subjects.map((subject, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl border-border/50 bg-card/80 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                      <subject.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold font-serif">{subject.name}</h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8">
              Focused, friendly, and effective tutoring
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Personalized learning experiences designed to build confidence and achieve academic success.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-10 h-full hover:scale-105 transition-all duration-300 hover:shadow-xl border-border/50 bg-card/80 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold font-serif">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-gradient-to-r from-card to-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-serif">
              Ready to boost your <span className="text-primary">grades?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get in touch today to discuss your learning goals and book your first session.
            </p>
            <div className="flex justify-center pt-8">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-xl font-medium rounded-xl soft-glow"
              >
                Book a free chat
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
