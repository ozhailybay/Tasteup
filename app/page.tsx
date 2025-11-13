"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import IPhoneMockup from "@/components/iphone-mockup"
import TypingAnimation from "@/components/typing-animation"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-primary/10 animate-gradient-shift" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(54,201,141,0.15),transparent_50%)]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_70%_80%,rgba(54,201,141,0.1),transparent_50%)]" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-primary/10 transition-all duration-300">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              TasteUp
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="#schools"
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
            >
              Schools
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(54,201,141,0.5)] relative overflow-hidden group">
            <span className="relative z-10">Download App</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <div
                className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4 border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105 cursor-default"
                style={{ animation: "float 3s ease-in-out infinite" }}
              >
                🚀 AI-Powered School Meals
              </div>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight"
                style={{ animation: "fade-in-up 0.8s ease-out forwards" }}
              >
                Making School Meals{" "}
                <TypingAnimation 
                  text="Smarter"
                  speed={80}
                  delay={1000}
                  className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient-x"
                />
                {" "}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient-x">
                  🍏
                </span>
              </h1>
              <p
                className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed"
                style={{ animation: "fade-in-up 0.8s ease-out 2.5s forwards", opacity: 0 }}
              >
                AI-powered feedback system that helps schools create better menus, reduce food waste, and make students
                happier.
              </p>
              <div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
                style={{ animation: "fade-in-up 0.8s ease-out 2.8s forwards", opacity: 0 }}
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110 text-lg px-8 py-6 hover:shadow-[0_0_30px_rgba(54,201,141,0.6)] relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Download the App
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/30 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 hover:bg-primary/10 transition-all duration-300 hover:scale-110 bg-transparent border-2 border-primary/30 hover:border-primary group"
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </Button>
              </div>
            </div>

            {/* Right Column - iPhone Mockup */}
            <div 
              className="flex justify-center lg:justify-end"
              style={{ animation: "fade-in-up 0.8s ease-out 0.6s forwards", opacity: 0 }}
            >
              <div className="relative">
                {/* Floating animation for the phone */}
                <div 
                  className="transform transition-transform duration-700 hover:scale-105"
                  style={{ 
                    animation: "float 6s ease-in-out infinite",
                    filter: "drop-shadow(0 20px 40px rgba(54, 201, 141, 0.3))"
                  }}
                >
                  <IPhoneMockup />
                </div>
                
                {/* Floating elements around the phone */}
                <div 
                  className="absolute -top-8 -right-8 text-4xl opacity-60"
                  style={{ animation: "float 4s ease-in-out infinite 1s" }}
                >
                  📱
                </div>
                <div 
                  className="absolute -bottom-6 -left-6 text-3xl opacity-60"
                  style={{ animation: "float 5s ease-in-out infinite 2s" }}
                >
                  🍎
                </div>
                <div 
                  className="absolute top-1/2 -left-12 text-2xl opacity-60"
                  style={{ animation: "float 3s ease-in-out infinite 0.5s" }}
                >
                  ⭐
                </div>
              </div>
            </div>
          </div>

          {/* Hero Stats Card */}
          <div className="mt-20 relative" style={{ animation: "scale-in 0.8s ease-out 0.6s forwards", opacity: 0 }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-3xl animate-pulse-slow" />
            <Card className="relative overflow-hidden border-2 border-primary/30 shadow-2xl hover:shadow-[0_0_40px_rgba(54,201,141,0.3)] transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-12 bg-gradient-to-br from-primary/5 via-background to-primary/10">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                  {[
                    { emoji: "🎯", value: "95%", label: "Satisfaction", delay: 0 },
                    { emoji: "📊", value: "40%", label: "Less Waste", delay: 0.1 },
                    { emoji: "🏫", value: "50+", label: "Schools", delay: 0.2 },
                    { emoji: "👥", value: "10K+", label: "Students", delay: 0.3 },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="space-y-2 group cursor-default"
                      style={{
                        animation: `fade-in-up 0.6s ease-out ${0.8 + stat.delay}s forwards`,
                        opacity: 0,
                      }}
                    >
                      <div className="text-5xl group-hover:scale-125 transition-transform duration-300">
                        {stat.emoji}
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div
            id="features-header"
            data-animate
            className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
              isVisible["features-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Powered by AI, Built for{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Students
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Our intelligent platform transforms how schools understand and improve their meal programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                emoji: "🎯",
                title: "Personalized Menus",
                description:
                  "AI analyzes student preferences and dietary needs to create menus that students actually love and eat.",
                gradient: "from-primary/10 to-primary/5",
              },
              {
                emoji: "💬",
                title: "Real-time Feedback",
                description:
                  "Students share instant feedback through our app, helping schools make data-driven decisions quickly.",
                gradient: "from-primary/5 to-primary/10",
              },
              {
                emoji: "🧠",
                title: "AI Recommendations",
                description:
                  "Smart algorithms suggest menu improvements based on trends, nutrition, and student satisfaction data.",
                gradient: "from-primary/10 to-primary/5",
              },
              {
                emoji: "🌍",
                title: "School Collaboration",
                description: "Connect with schools like KTL, Spectrum, and NIS to share insights and best practices.",
                gradient: "from-primary/5 to-primary/10",
              },
            ].map((feature, i) => (
              <div
                key={i}
                id={`feature-${i}`}
                data-animate
                className={`transition-all duration-1000 delay-${i * 100} ${
                  isVisible[`feature-${i}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Card className="group hover:shadow-[0_0_30px_rgba(54,201,141,0.2)] transition-all duration-500 hover:scale-[1.03] border-2 hover:border-primary/50 h-full relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <CardContent className="p-8 space-y-4 relative z-10">
                    <div className="text-6xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      {feature.emoji}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-6xl">
          <div
            id="how-header"
            data-animate
            className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
              isVisible["how-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              How{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">TasteUp</span>{" "}
              Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Simple, powerful, and designed for everyone in the school community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                emoji: "📱",
                title: "Students Rate Meals",
                description: "Quick and easy feedback after every meal through our mobile app.",
              },
              {
                step: "02",
                emoji: "🤖",
                title: "AI Analyzes Data",
                description: "Our AI processes feedback and identifies patterns and preferences.",
              },
              {
                step: "03",
                emoji: "📈",
                title: "Schools Improve",
                description: "Get actionable insights and recommendations to enhance your menu.",
              },
            ].map((step, i) => (
              <div
                key={i}
                id={`step-${i}`}
                data-animate
                className={`transition-all duration-1000 delay-${i * 200} ${
                  isVisible[`step-${i}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="relative">
                  <div className="absolute -top-4 -left-4 text-7xl font-bold text-primary/10">{step.step}</div>
                  <Card className="relative hover:shadow-[0_0_30px_rgba(54,201,141,0.2)] transition-all duration-500 hover:scale-105 border-2 border-primary/20 hover:border-primary/50 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-8 space-y-4 relative z-10">
                      <div className="text-6xl group-hover:scale-125 transition-transform duration-500">
                        {step.emoji}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section id="schools" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div
            id="schools-header"
            data-animate
            className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
              isVisible["schools-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Leading Schools
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Join the growing community of schools transforming their meal programs.
            </p>
          </div>

          <div
            id="schools-grid"
            data-animate
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center transition-all duration-1000 ${
              isVisible["schools-grid"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { 
                logo: "/for_ktl.png"
              },
              { 
                logo: "/for_spectrum.png"
              },
              { 
                logo: "/for_nis.png"
              },
              { 
                logo: "/for_nurorda.png"
              }
            ].map((school, i) => (
              <div
                key={i}
                className="text-center hover:scale-110 transition-all duration-500 cursor-pointer group"
                style={{ animation: `float 3s ease-in-out ${i * 0.5}s infinite` }}
              >
                <div className="group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex justify-center">
                  <img 
                    src={school.logo} 
                    alt="School logo"
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div
            id="testimonials-header"
            data-animate
            className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
              isVisible["testimonials-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              What{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">People</span>{" "}
              Are Saying
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Real feedback from students, teachers, and administrators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stars: "⭐⭐⭐⭐⭐",
                quote:
                  "TasteUp helped us reduce food waste by 40% while improving student satisfaction. It's a game-changer!",
                emoji: "👨‍🍳",
                name: "Chef Michael",
                role: "Head Chef, KTL",
              },
              {
                stars: "⭐⭐⭐⭐⭐",
                quote:
                  "Finally, a way for students to have a real voice in what they eat. The app is super easy to use!",
                emoji: "👩‍🎓",
                name: "Sarah K.",
                role: "Student, Spectrum",
              },
              {
                stars: "⭐⭐⭐⭐⭐",
                quote:
                  "The AI recommendations are incredibly accurate. We've seen a huge improvement in meal participation.",
                emoji: "👔",
                name: "Dr. James Lee",
                role: "Principal, NIS",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                id={`testimonial-${i}`}
                data-animate
                className={`transition-all duration-1000 delay-${i * 200} ${
                  isVisible[`testimonial-${i}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Card className="hover:shadow-[0_0_30px_rgba(54,201,141,0.2)] transition-all duration-500 hover:scale-105 border-2 border-primary/20 hover:border-primary/50 h-full group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 space-y-4 relative z-10">
                    <div className="flex gap-1 text-2xl">{testimonial.stars}</div>
                    <p className="text-foreground leading-relaxed italic">{testimonial.quote}</p>
                    <div className="flex items-center gap-3 pt-4">
                      <div className="text-4xl group-hover:scale-125 transition-transform duration-300">
                        {testimonial.emoji}
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div
            id="cta-card"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["cta-card"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="relative overflow-hidden border-2 border-primary/30 shadow-2xl hover:shadow-[0_0_50px_rgba(54,201,141,0.4)] transition-all duration-500 hover:scale-[1.02] group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 animate-gradient-shift" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(54,201,141,0.2),transparent_70%)] group-hover:scale-110 transition-transform duration-700" />
              <CardContent className="relative p-12 text-center space-y-6 z-10">
                <div className="text-6xl" style={{ animation: "float 3s ease-in-out infinite" }}>
                  🚀
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
                  Ready to Transform Your{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    School Meals?
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                  Join thousands of students and schools already using TasteUp to create better, smarter meal programs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110 text-lg px-8 py-6 hover:shadow-[0_0_30px_rgba(54,201,141,0.6)] relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Download the App
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/30 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 hover:bg-primary/10 transition-all duration-300 hover:scale-110 bg-transparent border-2 border-primary/30 hover:border-primary group"
                  >
                    <span className="flex items-center gap-2">
                      Contact Sales
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 group cursor-pointer">
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  TasteUp
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Making school meals smarter with AI-powered feedback and recommendations.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-foreground">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Download
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-foreground">Connect</h4>
              <div className="flex gap-4 text-2xl">
                {["📧", "💼", "🐦", "📱"].map((emoji, i) => (
                  <Link key={i} href="#" className="hover:scale-125 hover:-translate-y-1 transition-all duration-300">
                    {emoji}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
            <p>© 2025 TasteUp. All rights reserved. Making school meals better, one bite at a time. 🍏</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
