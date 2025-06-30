"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Shield, 
  FileText,
  BarChart3,
  Users,
  Trophy,
  ArrowRight,
  Star,
  Target,
  Brain,
  Download,
  Eye,
  Clock,
  TrendingUp,
  Rocket,
  Globe,
  Award,
  Briefcase,
  PlayCircle,
  Code,
  MousePointer2,
  Layers,
  Palette
} from "lucide-react";

export default function Home() {
  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const heroInView = useInView(heroRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });

  return (
    <div className="w-full overflow-x-hidden">
      {/* Floating cursor effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.05), transparent 50%)`
        }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen relative overflow-hidden flex items-center">
        {/* Dynamic Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-violet-50 via-background to-blue-50 dark:from-slate-950 dark:via-background dark:to-violet-950"
          style={{ y: y1, opacity }}
        />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-1/2 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Animated Icons */}
        <motion.div
          className="absolute top-40 left-20 text-violet-400/40"
          animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <FileText className="w-8 h-8" />
        </motion.div>
        
        <motion.div
          className="absolute top-60 right-32 text-blue-400/40"
          animate={{ y: [10, -10, 10], rotate: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <Trophy className="w-10 h-10" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-32 text-purple-400/40"
          animate={{ y: [-15, 15, -15], rotate: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        >
          <Target className="w-6 h-6" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={heroInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <Badge variant="secondary" className="px-6 py-3 text-sm font-medium bg-gradient-to-r from-violet-100 to-blue-100 dark:from-violet-900/50 dark:to-blue-900/50 border-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                </motion.div>
                #1 ATS-Optimized Resume Builder
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="ml-2"
                >
                  🚀
                </motion.div>
              </Badge>
            </motion.div>

            {/* Main Heading with Enhanced Animation */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight mb-6 leading-tight">
                <motion.span 
                  className="block"
                  initial={{ x: -100, opacity: 0 }}
                  animate={heroInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Build Resumes That
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-violet-600 via-blue-600 to-purple-600 bg-clip-text text-transparent relative"
                  initial={{ x: 100, opacity: 0 }}
                  animate={heroInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Get You Hired
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨
                  </motion.div>
                </motion.span>
                <motion.span 
                  className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mt-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={heroInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  with AI-Powered ATS Magic
                </motion.span>
              </h1>
            </motion.div>

            {/* Enhanced Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Create <span className="text-violet-600 font-semibold">ATS-optimized resumes</span> that pass screening systems 
              and land you more interviews. Join <span className="text-blue-600 font-semibold">50,000+ professionals</span> who 
              got hired faster with our AI-powered platform.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              initial={{ y: 40, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="h-16 px-8 text-lg font-bold bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 group" asChild>
                  <RegisterLink>
                    <Rocket className="mr-2 w-5 h-5" />
                    Start Building Free
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </RegisterLink>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="h-16 px-8 text-lg font-semibold border-2 hover:bg-violet-50 dark:hover:bg-violet-950 group">
                  <PlayCircle className="mr-2 w-5 h-5" />
                  Watch Demo
                  <motion.div
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Eye className="w-4 h-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats with Animation */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                { number: "98%", label: "ATS Pass Rate", icon: Target, color: "text-green-500" },
                { number: "50K+", label: "Resumes Created", icon: FileText, color: "text-blue-500" },
                { number: "3.2x", label: "More Interviews", icon: TrendingUp, color: "text-purple-500" },
                { number: "4.9/5", label: "User Rating", icon: Star, color: "text-yellow-500" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group cursor-pointer"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={heroInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="mx-auto mb-3 w-12 h-12 rounded-full bg-gradient-to-r from-violet-100 to-blue-100 dark:from-violet-900/50 dark:to-blue-900/50 flex items-center justify-center group-hover:shadow-lg transition-shadow"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </motion.div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    animate={heroInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.8 + index * 0.1, type: "spring", bounce: 0.4 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-2 bg-muted-foreground/50 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Revolutionary Features Section */}
      <section ref={featuresRef} className="py-24 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-transparent to-blue-50/50 dark:from-violet-950/50 dark:via-transparent dark:to-blue-950/50"
          style={{ y: y2 }}
        />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-violet-200/20 to-transparent rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-blue-200/20 to-transparent rounded-full blur-xl animate-float delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-20"
              initial={{ y: 50, opacity: 0 }}
              animate={featuresInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={featuresInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-blue-100 dark:from-violet-900/50 dark:to-blue-900/50 mb-6"
              >
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">Powered by Advanced AI</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-violet-900 to-blue-900 dark:from-slate-100 dark:via-violet-100 dark:to-blue-100 bg-clip-text text-transparent">
                Features That Make You
                <br />
                <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                  Irresistible to Employers
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our cutting-edge platform combines AI intelligence with ATS optimization 
                to create resumes that don't just pass the test—they excel.
              </p>
            </motion.div>

            {/* Enhanced Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "99% ATS Success Rate",
                  description: "Our advanced algorithm ensures your resume passes even the strictest ATS filters",
                  color: "from-green-500 to-emerald-500",
                  bgColor: "bg-green-50 dark:bg-green-950/50",
                  delay: 0
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI Content Optimization",
                  description: "Smart keyword placement and phrase optimization that recruiters actually want to see",
                  color: "from-purple-500 to-violet-500",
                  bgColor: "bg-purple-50 dark:bg-purple-950/50",
                  delay: 0.1
                },
                {
                  icon: <Palette className="w-8 h-8" />,
                  title: "Designer Templates",
                  description: "Beautiful, modern templates crafted by top designers and approved by HR experts",
                  color: "from-pink-500 to-rose-500",
                  bgColor: "bg-pink-50 dark:bg-pink-950/50",
                  delay: 0.2
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Success Analytics",
                  description: "Real-time tracking of your application performance with actionable insights",
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "bg-blue-50 dark:bg-blue-950/50",
                  delay: 0.3
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Bank-Level Security",
                  description: "Your personal information is protected with enterprise-grade encryption",
                  color: "from-yellow-500 to-orange-500",
                  bgColor: "bg-yellow-50 dark:bg-yellow-950/50",
                  delay: 0.4
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Standards",
                  description: "Templates optimized for international markets and various industries",
                  color: "from-indigo-500 to-purple-500",
                  bgColor: "bg-indigo-50 dark:bg-indigo-950/50",
                  delay: 0.5
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="group cursor-pointer"
                  initial={{ y: 50, opacity: 0 }}
                  animate={featuresInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`p-8 rounded-3xl ${feature.bgColor} border border-white/50 dark:border-slate-800/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 h-full group-hover:border-violet-200 dark:group-hover:border-violet-800`}>
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {feature.icon}
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {feature.description}
                    </p>

                    {/* Hover effect arrow */}
                    <motion.div
                      className="flex items-center mt-4 text-violet-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Demo Section */}
            <motion.div 
              className="mt-20 text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={featuresInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-violet-100/50 to-blue-100/50 dark:from-violet-900/20 dark:to-blue-900/20 border border-violet-200/50 dark:border-violet-800/50 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  See the Difference Yourself
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Watch your resume transform from ordinary to extraordinary in real-time
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 group">
                    <PlayCircle className="mr-2 w-5 h-5" />
                    Try Interactive Demo
                    <motion.div
                      className="ml-2"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - Interactive Process */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 to-violet-50 dark:from-slate-950 dark:to-violet-950">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-r from-violet-200/20 to-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div 
              className="text-center mb-20"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your Dream Job in
                <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent"> 3 Simple Steps</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our streamlined process gets you from zero to hire-ready in minutes, not hours
              </p>
            </motion.div>

            {/* Interactive Steps */}
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
              {[
                {
                  step: "01",
                  title: "Choose Your Style",
                  description: "Pick from our collection of ATS-optimized templates designed by hiring experts",
                  icon: <Palette className="w-8 h-8" />,
                  color: "from-violet-500 to-purple-500",
                  bgColor: "bg-violet-50 dark:bg-violet-950/50",
                  details: ["15+ Professional Templates", "Industry-Specific Designs", "Mobile-Optimized Layouts", "Dark/Light Mode Support"]
                },
                {
                  step: "02", 
                  title: "AI Does the Heavy Lifting",
                  description: "Our AI analyzes your input and suggests powerful keywords and phrases that get noticed",
                  icon: <Brain className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "bg-blue-50 dark:bg-blue-950/50",
                  details: ["Smart Keyword Optimization", "Industry-Specific Suggestions", "ATS Score in Real-Time", "Grammar & Style Check"]
                },
                {
                  step: "03",
                  title: "Download & Dominate",
                  description: "Export your polished resume and start getting more interviews immediately",
                  icon: <Rocket className="w-8 h-8" />,
                  color: "from-green-500 to-emerald-500",
                  bgColor: "bg-green-50 dark:bg-green-950/50",
                  details: ["PDF & DOCX Export", "Shareable Online Link", "Multiple Versions", "Cover Letter Generator"]
                }
              ].map((step, index) => (
                <motion.div 
                  key={index} 
                  className="relative group"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Connection Line */}
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-violet-300 to-transparent dark:from-violet-700 z-0" />
                  )}
                  
                  <motion.div
                    className={`relative p-8 rounded-3xl ${step.bgColor} border border-white/50 dark:border-slate-800/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}
                    whileHover={{ y: -5 }}
                  >
                    {/* Step Number */}
                    <motion.div
                      className={`absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} text-white font-bold text-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.step}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-6 ml-8`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <motion.li 
                          key={detailIndex}
                          className="flex items-center text-sm text-muted-foreground"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: detailIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Interactive Button */}
                    <motion.div
                      className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <MousePointer2 className="w-4 h-4 mr-2" />
                        Try This Step
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Time Estimate */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-violet-200/50 dark:border-violet-800/50">
                <Clock className="w-5 h-5 text-violet-600" />
                <span className="font-semibold">Average completion time: </span>
                <span className="text-violet-600 font-bold">7 minutes</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories - Enhanced Testimonials */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/30 via-transparent to-blue-50/30 dark:from-violet-950/30 dark:via-transparent dark:to-blue-950/30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div 
              className="text-center mb-20"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 mb-6"
              >
                <Trophy className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-800 dark:text-green-300">Real Success Stories</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
                  From Job Seekers to
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how professionals transformed their careers with ResuMeUp
              </p>
            </motion.div>

            {/* Enhanced Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Software Engineer",
                  company: "Google",
                  content: "ResuMeUp's AI optimization helped me land 5 interviews in 2 weeks. The ATS pass rate is incredible - I went from 0 to 5 callbacks instantly!",
                  avatar: "SJ",
                  rating: 5,
                  stats: { before: "0% response rate", after: "85% response rate" },
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  name: "Michael Chen",
                  role: "Product Manager",
                  company: "Meta",
                  content: "The keyword suggestions were game-changing. My resume went from generic to compelling. I received 3 offers within a month!",
                  avatar: "MC", 
                  rating: 5,
                  stats: { before: "2 months searching", after: "3 offers in 1 month" },
                  color: "from-purple-500 to-violet-500"
                },
                {
                  name: "Emily Rodriguez",
                  role: "Data Scientist",
                  company: "Netflix",
                  content: "The templates are beautiful and the ATS optimization actually works. I doubled my interview rate compared to my old resume.",
                  avatar: "ER",
                  rating: 5,
                  stats: { before: "1 interview/month", after: "4 interviews/week" },
                  color: "from-green-500 to-emerald-500"
                },
                {
                  name: "David Kim",
                  role: "UX Designer",
                  company: "Spotify",
                  content: "As a designer, I was skeptical about templates. But these are genuinely well-crafted and helped me showcase my work perfectly.",
                  avatar: "DK",
                  rating: 5,
                  stats: { before: "Freelancing", after: "Full-time at Spotify" },
                  color: "from-pink-500 to-rose-500"
                },
                {
                  name: "Aisha Patel",
                  role: "Marketing Director",
                  company: "Airbnb",
                  content: "The AI suggestions understood my industry perfectly. It felt like having a personal career coach guiding every word choice.",
                  avatar: "AP",
                  rating: 5,
                  stats: { before: "Mid-level role", after: "Director position" },
                  color: "from-orange-500 to-yellow-500"
                },
                {
                  name: "James Wilson",
                  role: "DevOps Engineer",
                  company: "Tesla",
                  content: "Switched careers from QA to DevOps using ResuMeUp. The skills optimization helped me bridge the gap convincingly.",
                  avatar: "JW",
                  rating: 5,
                  stats: { before: "Career switch", after: "Dream role at Tesla" },
                  color: "from-indigo-500 to-blue-500"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="group cursor-pointer"
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-8 rounded-3xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-white/50 dark:border-slate-800/50 hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.2, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-muted-foreground mb-6 italic leading-relaxed group-hover:text-foreground/80 transition-colors">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Stats */}
                    <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border border-green-200/50 dark:border-green-800/50">
                      <div className="text-sm space-y-1">
                        <div className="text-red-600 dark:text-red-400">Before: {testimonial.stats.before}</div>
                        <div className="text-green-600 dark:text-green-400">After: {testimonial.stats.after}</div>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {testimonial.avatar}
                      </motion.div>
                      
                      <div>
                        <div className="font-semibold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at <span className="font-medium">{testimonial.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Proof */}
            <motion.div 
              className="mt-20 text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { metric: "50,000+", label: "Success Stories" },
                  { metric: "95%", label: "Get Interviews" },
                  { metric: "3.2x", label: "Faster Hiring" },
                  { metric: "500+", label: "Companies" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent mb-2">
                      {stat.metric}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Irresistible Offer */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse" />
        
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Header */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8"
              >
                <Award className="w-5 h-5" />
                <span className="font-medium">Limited Time Offer</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎉
                </motion.div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                <motion.span
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="block"
                >
                  Ready to Land Your
                </motion.span>
                <motion.span
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"
                >
                  Dream Job?
                </motion.span>
              </h2>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Join <span className="font-bold text-yellow-300">50,000+ professionals</span> who've 
                transformed their careers with our AI-powered resume builder
              </motion.p>
            </motion.div>

            {/* Value Proposition */}
            <motion.div 
              className="grid md:grid-cols-3 gap-6 mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              {[
                { icon: <Zap className="w-6 h-6" />, text: "7-minute setup" },
                { icon: <Shield className="w-6 h-6" />, text: "No credit card needed" },
                { icon: <Download className="w-6 h-6" />, text: "Unlimited downloads" }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.icon}
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="h-16 px-10 text-xl font-bold bg-white text-purple-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 group" asChild>
                  <RegisterLink>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="mr-3"
                    >
                      <Rocket className="w-6 h-6" />
                    </motion.div>
                    Start Building Now - FREE
                    <motion.div
                      className="ml-3"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </RegisterLink>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="h-16 px-10 text-xl font-semibold border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm group">
                  <Eye className="mr-3 w-6 h-6" />
                  View Live Demo
                  <motion.div
                    className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <PlayCircle className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-white/70">
                ✨ <span className="font-semibold">100% Free to start</span> • 
                🛡️ <span className="font-semibold">Your data is secure</span> • 
                🚀 <span className="font-semibold">Used by top companies</span>
              </p>
              
              <div className="flex items-center justify-center gap-8 opacity-60">
                <div className="text-sm">Trusted by professionals at:</div>
                <div className="flex items-center gap-6 text-sm font-medium">
                  <span>Google</span> • <span>Meta</span> • <span>Netflix</span> • <span>Tesla</span> • <span>Spotify</span>
                </div>
              </div>
            </motion.div>

            {/* Urgency Element */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true }}
              className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 border border-yellow-300/30"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡
              </motion.div>
              <span className="text-sm font-medium text-yellow-200">
                Join the 1,000+ people who started building today
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
