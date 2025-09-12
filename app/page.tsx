"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Target, BookOpen, BookMarked, Calendar, Trophy, MapPin, MessageCircle } from "lucide-react"
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
  { name: "Maths", icon: GraduationCap },
  { name: "Physics", icon: GraduationCap },
  { name: "Chemistry", icon: GraduationCap },
  { name: "Biology", icon: GraduationCap },
  { name: "Computer Science", icon: GraduationCap },
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

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center gradient-bg pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "1.5s" }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full blur-2xl animate-pulse delay-500"
            style={{ animationDuration: "1.8s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/35 to-blue-500/35 rounded-full blur-xl animate-pulse delay-300"
            style={{ animationDuration: "1.6s" }}
          />
          <div
            className="absolute top-20 left-1/2 w-32 h-32 bg-purple-400/20 rounded-full blur-lg animate-bounce"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute bottom-20 right-1/3 w-48 h-48 bg-blue-400/15 rounded-full blur-2xl animate-pulse delay-1500"
            style={{ animationDuration: "1.7s" }}
          />
          <div
            className="absolute top-2/3 left-20 w-24 h-24 bg-indigo-500/25 rounded-full blur-md animate-pulse delay-800"
            style={{ animationDuration: "1.4s" }}
          />
        </div>

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col justify-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-white leading-tight">
              GCSE 11+ TUTORING
              <br />
              <span className="text-primary">Maths, Sciences, Computer Science</span>
            </h1>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans">
                I'm a tutor who achieved outstanding GCSE grades and I'm here to help you do the same. Focused,
                friendly, and effective tutoring to help you achieve your target grades. One-to-one and group sessions
                available online.
              </p>
              <p className="text-lg font-semibold text-red-400">FREE TASTER SESSION available</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-xl pulse-glow"
              >
                Book a free chat
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 text-green-400 hover:bg-white/10 hover:text-green-300 px-8 py-4 text-lg font-medium rounded-xl bg-transparent"
              >
                <a href="https://wa.me/447488528958" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp me
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("subjects")?.scrollIntoView({ behavior: "smooth" })}
                className="text-white hover:text-white bg-black/30 hover:bg-black/40 border-white/30 hover:border-white/50 px-8 py-4 text-lg font-medium rounded-xl"
              >
                View subjects
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent" />
      </section>

      <section id="subjects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Subjects I Teach</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Comprehensive tutoring across key GCSE and 11+ subjects with flexible learning options.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                GCSE
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                11+
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                11+ Preparation
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                One-to-One
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Group sessions
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Online
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                AQA
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Edexcel
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Other exam boards
              </Badge>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {subjects.map((subject, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                      <subject.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold font-serif">{subject.name}</h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 h-full hover:scale-105 transition-all duration-300 hover:shadow-xl border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
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

      <section id="contact" className="py-24 px-6 bg-gradient-to-r from-card to-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-serif">
              Ready to boost your <span className="text-primary">grades?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get in touch today to discuss your learning goals and book your first session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-xl pulse-glow"
              >
                Book a free chat
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("subjects")?.scrollIntoView({ behavior: "smooth" })}
                className="text-white hover:text-white bg-black/30 hover:bg-black/40 border-white/30 hover:border-white/50 px-8 py-4 text-lg font-medium rounded-xl"
              >
                Explore subjects
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
