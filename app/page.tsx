"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Target, BookOpen, Sparkles, Trophy, MapPin, Download, Play, Star } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

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
    icon: Calendar,
    title: "Smart Calendar",
    description: "Seamlessly integrate your schedule, tasks, and events in one intelligent view.",
  },
  {
    icon: Target,
    title: "Habit Formation",
    description: "Build lasting habits with visual progress rings and gentle reminders.",
  },
  {
    icon: BookOpen,
    title: "Mindful Journaling",
    description: "Reflect and grow with a private, structured journal and mood board.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Voice",
    description: "Just speak. Add tasks, set reminders, and organize your day with our intelligent voice assistant.",
  },
  {
    icon: Trophy,
    title: "Gamified Goals",
    description: "Stay motivated by earning badges, completing challenges, and tracking your progress.",
  },
  {
    icon: MapPin,
    title: "Location-Aware",
    description: "Get smart reminders for location-based tasks and events.",
  },
]

const testimonials = [
  {
    quote: "unmessd transformed how I manage my day. The AI voice feature is incredible!",
    name: "Sarah Chen",
    title: "Designer",
    avatar: "/professional-woman-avatar.png",
  },
  {
    quote: "Finally, a productivity app that doesn't overwhelm me. Clean, intuitive, perfect.",
    name: "Marcus Rodriguez",
    title: "Founder",
    avatar: "/professional-man-avatar.png",
  },
  {
    quote: "The habit tracking with progress rings keeps me motivated every single day.",
    name: "Emma Thompson",
    title: "Student",
    avatar: "/young-woman-student-avatar.png",
  },
]

export default function UnmessdLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation Component */}
      <Navigation />

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

        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col justify-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-white leading-tight">
              Life's messy.
              <br />
              <span className="text-primary">Get Unmessd.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-sans">
              unmessd is the intelligent productivity app that blends task management, habit formation, and AI-powered
              assistance into one beautiful, calming experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-xl pulse-glow"
              >
                <Download className="mr-2 h-5 w-5" />
                Download on the App Store
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-medium rounded-xl bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Get it on Google Play
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Everything you need to stay organized</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Six powerful features working together to create your perfect productivity system.
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

      {/* AI Assistant Showcase */}
      <section id="ai" className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
                The future of productivity is <span className="text-primary">effortless.</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                unmessd uses the power of Gemini and Deepgram to understand you. Dictate tasks on the go, get smart
                suggestions before you even ask, and let the app organize your notes. It's not just a tool; it's your
                personal assistant.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Powered by Gemini AI
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  Voice Recognition
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  Smart Suggestions
                </Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative"
            >
              <div className="relative max-w-sm mx-auto">
                <img
                  src="https://8f3riwpkblxtrplf.public.blob.vercel-storage.com/UNMESSD%20HOME%20PAGE-kDh9qNt0PzEN9m0XzBGiBCDBnDJM8S"
                  alt="unmessd App Home Page Screenshot"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-ping" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Loved by busy people everywhere</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-border/50">
                  <div className="space-y-6">
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg leading-relaxed">"{testimonial.quote}"</blockquote>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="py-24 px-6 bg-gradient-to-r from-card to-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-serif">
              Ready to clear the <span className="text-primary">clutter?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Download unmessd today and start building a more organized and intentional life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-xl pulse-glow"
              >
                <Download className="mr-2 h-5 w-5" />
                Download on the App Store
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-accent px-8 py-4 text-lg font-medium rounded-xl bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Get it on Google Play
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
