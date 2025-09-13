
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
import { Hero } from "@/components/ui/animated-hero"

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
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Focused Learning",
    description: "Targeted lessons designed to address your specific learning needs and exam requirements.",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Comprehensive Coverage",
    description: "Full curriculum coverage for GCSE Maths, Sciences, Computer Science across all exam boards.",
  },
  {
    icon: <BookMarked className="h-8 w-8 text-primary" />,
    title: "Exam Preparation",
    description: "Structured revision sessions and practice papers to build confidence for your exams.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Flexible Scheduling",
    description: "Evening and weekend sessions available to fit around your school timetable.",
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: "Proven Results",
    description: "Track record of helping students achieve their target grades and beyond.",
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
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

            <Hero setIsModalOpen={setIsModalOpen} />

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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {subjects.map((subject, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative group">
                <Card className="p-8 text-center h-full transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                      <subject.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold font-serif">{subject.name}</h3>
                  </div>
                </Card>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-10 h-full hover:scale-105 transition-all duration-300 hover:shadow-xl border-border/50 bg-card/80 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold font-serif">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-serif">
              Ready to boost your grades?
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
                Book a Free Taster
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
