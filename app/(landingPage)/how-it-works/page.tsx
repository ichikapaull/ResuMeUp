"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Palette, 
  Brain, 
  Rocket,
  User,
  FileText,
  Zap,
  Target,
  Download,
  Share,
  Award,
  Sparkles,
  MousePointer2,
  Eye,
  RefreshCw,
  TrendingUp,
  Shield,
  Globe
} from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      step: "01",
      title: "Choose Your Template",
      subtitle: "Professional Designs",
      description: "Select from our collection of 15+ ATS-optimized templates designed by industry experts and HR professionals.",
      icon: <Palette className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50 dark:bg-violet-950/20",
      features: [
        "15+ Professional Templates",
        "Industry-Specific Designs",
        "ATS-Optimized Layouts",
        "Mobile-Responsive Designs",
        "Dark/Light Mode Support"
      ],
      time: "30 seconds",
      preview: "Template Gallery"
    },
    {
      step: "02",
      title: "Add Your Information",
      subtitle: "Smart Data Entry",
      description: "Fill in your details with our intuitive form. Our AI suggests improvements and optimizes content as you type.",
      icon: <User className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      features: [
        "Smart Form Auto-completion",
        "Real-time Suggestions",
        "Section-by-Section Guidance",
        "Import from LinkedIn",
        "Auto-save Progress"
      ],
      time: "5-7 minutes",
      preview: "Live Editor"
    },
    {
      step: "03",
      title: "AI Optimization",
      subtitle: "Intelligent Enhancement",
      description: "Our AI analyzes your content, suggests keywords, and optimizes for ATS compatibility with real-time scoring.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      features: [
        "Keyword Optimization",
        "ATS Compatibility Check",
        "Content Enhancement",
        "Industry-Specific Suggestions",
        "Real-time Scoring"
      ],
      time: "2 minutes",
      preview: "AI Analysis"
    },
    {
      step: "04",
      title: "Review & Customize",
      subtitle: "Perfect Your Resume",
      description: "Preview your resume, make final adjustments, and customize colors and themes to match your style.",
      icon: <Eye className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      features: [
        "Live Preview",
        "Color Customization",
        "Font Selection",
        "Layout Adjustments",
        "Mobile Preview"
      ],
      time: "1-2 minutes",
      preview: "Live Preview"
    },
    {
      step: "05",
      title: "Download & Share",
      subtitle: "Multiple Formats",
      description: "Export your resume in PDF or DOCX format, or create a shareable link to showcase your professional profile online.",
      icon: <Download className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      features: [
        "PDF & DOCX Export",
        "High-Quality Output",
        "Shareable Online Links",
        "Print Optimization",
        "Unlimited Downloads"
      ],
      time: "10 seconds",
      preview: "Export Options"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Creation",
      description: "Build a professional resume in under 10 minutes",
      stat: "Average: 8 min"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "ATS Optimized",
      description: "99% pass rate with applicant tracking systems",
      stat: "99% Success Rate"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Enhanced",
      description: "Smart suggestions improve your content automatically",
      stat: "3x Better Content"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "More Interviews",
      description: "Users get 3.2x more interview callbacks",
      stat: "3.2x More Callbacks"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-violet-50/50 dark:from-blue-950/30 dark:via-transparent dark:to-violet-950/30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-violet-100 dark:from-blue-900/50 dark:to-violet-900/50 mb-8"
            >
              <Rocket className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-800 dark:text-blue-300">Simple Process</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-violet-900 dark:from-slate-100 dark:via-blue-100 dark:to-violet-100 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              How ResuMeUp Works
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Simple. Fast. Effective.
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Create a professional, ATS-optimized resume in just 5 simple steps. 
              Our AI-powered platform guides you through every stage of the process.
            </motion.p>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-500" />
                <span>Average time: 8 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-500" />
                <span>No experience required</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-500" />
                <span>Works on any device</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`relative grid lg:grid-cols-2 gap-12 items-center mb-20 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full w-0.5 h-20 bg-gradient-to-b from-violet-300 to-transparent dark:from-violet-700 z-0" />
                )}

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} text-white font-bold text-xl flex items-center justify-center shadow-lg`}>
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex}
                        className="flex items-center gap-3"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="px-4 py-2">
                      <Clock className="w-4 h-4 mr-2" />
                      {step.time}
                    </Badge>
                    <Badge variant="outline" className="px-4 py-2">
                      <MousePointer2 className="w-4 h-4 mr-2" />
                      {step.preview}
                    </Badge>
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <motion.div
                    className={`p-8 rounded-3xl ${step.bgColor} border border-border/50 backdrop-blur-sm`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-6 mx-auto`}>
                      {step.icon}
                    </div>
                    <div className="text-center">
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.subtitle}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Our Process Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our streamlined approach combines AI intelligence with proven design principles 
                to deliver exceptional results every time.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {benefit.description}
                  </p>
                  <Badge variant="secondary" className="font-semibold">
                    {benefit.stat}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                See It In Action
              </h2>
              <p className="text-xl text-muted-foreground">
                Watch our process transform a blank page into a professional resume
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-3xl bg-gradient-to-r from-violet-100/50 to-blue-100/50 dark:from-violet-900/20 dark:to-blue-900/20 border border-violet-200/50 dark:border-violet-800/50 backdrop-blur-sm text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 flex items-center justify-center text-white mx-auto mb-6">
                <Sparkles className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Interactive Demo Available</h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Try our live demo to experience the complete resume building process 
                without creating an account.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-2">
                  <Eye className="mr-2 w-5 h-5" />
                  Try Interactive Demo
                </Button>
                <Button size="lg" className="h-14 px-8 text-lg font-bold bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700" asChild>
                  <RegisterLink>
                    <Rocket className="mr-2 w-5 h-5" />
                    Start Building Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </RegisterLink>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of professionals who've built their dream resume with ResuMeUp
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-bold text-violet-600" asChild>
                  <RegisterLink>
                    <Award className="mr-3 w-6 h-6" />
                    Start Your Resume Now
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </RegisterLink>
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>All features included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Ready in 8 minutes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
