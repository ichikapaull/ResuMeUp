"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
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
  Award,
  Rocket,
  Globe,
  ChevronDown,
  PlayCircle,
  MousePointer2,
  Briefcase,
  GraduationCap,
  Building
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

const slideIn = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6 }
};

// Counter component
const Counter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span ref={countRef}>{count}</span>;
};

// Floating shapes component
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-primary/20 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "ATS Optimization",
      description: "95% pass rate guarantee with AI-powered keyword optimization",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Content Writer",
      description: "Smart content generation based on your industry and role",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Success Analytics",
      description: "Track performance with detailed application insights",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy Protected",
      description: "Bank-level security with end-to-end encryption",
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Google",
      image: "👩‍💻",
      content: "ResuMeUp helped me land my dream job at Google. The ATS optimization is incredible!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager", 
      company: "Meta",
      image: "👨‍💼",
      content: "Got 3x more interviews after using ResuMeUp. The AI suggestions were spot-on.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Data Scientist",
      company: "Netflix",
      image: "👩‍🔬",
      content: "The templates are beautiful and the analytics feature helped me optimize my approach.",
      rating: 5
    }
  ];

  const templates = [
    { name: "Modern Professional", category: "Executive", preview: "🎯" },
    { name: "Creative Designer", category: "Creative", preview: "🎨" },
    { name: "Tech Developer", category: "Technology", preview: "💻" },
    { name: "Business Analyst", category: "Business", preview: "📊" },
    { name: "Marketing Expert", category: "Marketing", preview: "📈" },
    { name: "Academic Scholar", category: "Education", preview: "🎓" }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingShapes />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated background */}
        <motion.div 
          className="absolute inset-0 opacity-50"
          style={{ y, opacity }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-6xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-8">
              <Badge className="px-6 py-2 text-sm bg-gradient-to-r from-primary to-purple-600 text-white border-0">
                <Trophy className="w-4 h-4 mr-2" />
                #1 ATS-Optimized Resume Builder
              </Badge>
            </motion.div>

            {/* Main heading */}
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
            >
              <span className="block">Build Your</span>
              <span className="block bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Dream Career
              </span>
              <span className="block">With ResuMeUp</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              Create ATS-friendly resumes that get you hired. Our AI-powered platform has helped 
              <span className="text-primary font-semibold"> 50,000+ professionals </span>
              land their dream jobs with a 
              <span className="text-green-500 font-semibold"> 95% success rate</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Button size="lg" className="h-16 px-8 text-lg font-semibold group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90" asChild>
                <RegisterLink>
                  <Rocket className="mr-2 w-5 h-5" />
                  Start Building Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </RegisterLink>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-8 text-lg font-semibold group border-2">
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Live stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { number: 95, suffix: "%", label: "ATS Pass Rate" },
                { number: 50, suffix: "K+", label: "Resumes Created" },
                { number: 200, suffix: "%", label: "More Interviews" },
                { number: 4.9, suffix: "/5", label: "User Rating" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-4 rounded-2xl bg-background/50 backdrop-blur-sm border"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <Counter end={stat.number} />
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-muted/20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Top Companies Choose ResuMeUp
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powered by cutting-edge AI and designed by HR experts
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Feature tabs */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Tabs value={activeFeature.toString()} className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-1 lg:h-auto lg:flex-col gap-2 bg-transparent">
                  {features.map((feature, index) => (
                    <TabsTrigger 
                      key={index}
                      value={index.toString()}
                      className="p-4 text-left data-[state=active]:bg-background data-[state=active]:shadow-lg"
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className={`p-2 rounded-xl bg-gradient-to-r ${feature.color} text-white`}>
                          {feature.icon}
                        </div>
                        <div>
                          <div className="font-semibold">{feature.title}</div>
                          <div className="text-sm text-muted-foreground">{feature.description}</div>
                        </div>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </motion.div>

            {/* Feature preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square rounded-3xl bg-gradient-to-br from-background to-muted border-2 p-8 flex items-center justify-center relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].color} opacity-10`} />
                  <div className="text-center z-10">
                    <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${features[activeFeature].color} flex items-center justify-center text-white text-4xl`}>
                      {features[activeFeature].icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{features[activeFeature].title}</h3>
                    <p className="text-muted-foreground">{features[activeFeature].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Templates Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Templates</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Templates for Every Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hand-crafted by design experts and optimized for ATS systems
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {templates.map((template, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="h-full group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="text-6xl mb-4 text-center">{template.preview}</div>
                    <CardTitle className="text-center">{template.name}</CardTitle>
                    <CardDescription className="text-center">
                      <Badge variant="secondary">{template.category}</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview Template
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Success Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real Results from Real People
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands who've transformed their careers with ResuMeUp
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="h-full p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
                  <CardContent className="relative z-10 p-0">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{testimonial.image}</div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-sm text-primary">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-blue-600"
          animate={{
            background: [
              "linear-gradient(45deg, #6366f1, #8b5cf6, #3b82f6)",
              "linear-gradient(45deg, #8b5cf6, #3b82f6, #6366f1)",
              "linear-gradient(45deg, #3b82f6, #6366f1, #8b5cf6)",
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Land Your Dream Job?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join the thousands of professionals who've boosted their careers with ResuMeUp
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button size="lg" variant="secondary" className="h-16 px-8 text-lg font-semibold text-primary hover:text-primary/80" asChild>
                <RegisterLink>
                  <Rocket className="mr-2 w-5 h-5" />
                  Start Building Now - It's Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </RegisterLink>
              </Button>
            </motion.div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                100% free templates
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Export unlimited resumes
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
