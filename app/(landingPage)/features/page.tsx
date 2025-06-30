"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { motion } from "framer-motion";
import { 
  Target, 
  Brain, 
  Shield, 
  BarChart3, 
  Download, 
  Globe,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileText,
  Users,
  Clock,
  Award,
  Palette,
  Search,
  Share,
  Lock,
  Smartphone,
  Cloud,
  RefreshCw,
  Eye,
  TrendingUp
} from "lucide-react";

export default function FeaturesPage() {
  const featureCategories = [
    {
      title: "AI-Powered Intelligence",
      description: "Advanced AI capabilities that make your resume stand out",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      features: [
        {
          icon: <Target className="w-6 h-6" />,
          title: "Smart ATS Optimization",
          description: "99% success rate with Applicant Tracking Systems using advanced algorithm analysis",
          stats: "99% ATS Pass Rate"
        },
        {
          icon: <Brain className="w-6 h-6" />,
          title: "Intelligent Content Generation",
          description: "AI-powered resume content suggestions tailored to your industry and role",
          stats: "50+ Industries Supported"
        },
        {
          icon: <Search className="w-6 h-6" />,
          title: "Keyword Optimization",
          description: "Automatic keyword placement and density optimization for maximum visibility",
          stats: "3x More Keywords"
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Performance Analytics",
          description: "Real-time ATS compatibility scoring with actionable improvement suggestions",
          stats: "Live Scoring"
        }
      ]
    },
    {
      title: "Design & User Experience",
      description: "Beautiful, modern design that works perfectly on all devices",
      icon: <Palette className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      features: [
        {
          icon: <Palette className="w-6 h-6" />,
          title: "Professional Templates",
          description: "15+ designer-crafted templates optimized for different industries and roles",
          stats: "15+ Templates"
        },
        {
          icon: <Smartphone className="w-6 h-6" />,
          title: "Mobile-First Design",
          description: "Fully responsive design that works flawlessly on desktop, tablet, and mobile",
          stats: "100% Mobile Ready"
        },
        {
          icon: <Eye className="w-6 h-6" />,
          title: "Real-time Preview",
          description: "See your changes instantly with live preview as you edit your resume",
          stats: "Instant Updates"
        },
        {
          icon: <RefreshCw className="w-6 h-6" />,
          title: "Theme Customization",
          description: "Multiple color schemes and layouts with dark/light mode support",
          stats: "8 Color Themes"
        }
      ]
    },
    {
      title: "Security & Privacy",
      description: "Bank-level security to protect your personal information",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      features: [
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Enterprise Security",
          description: "Bank-level encryption and security protocols to protect your data",
          stats: "256-bit Encryption"
        },
        {
          icon: <Lock className="w-6 h-6" />,
          title: "Private by Default",
          description: "Your data stays private. We never share or sell your personal information",
          stats: "Zero Data Sharing"
        },
        {
          icon: <Cloud className="w-6 h-6" />,
          title: "Secure Cloud Storage",
          description: "Automatic backup and sync across all your devices with secure cloud storage",
          stats: "Auto Backup"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Access Control",
          description: "Granular permissions and sharing controls for your resume documents",
          stats: "Full Control"
        }
      ]
    },
    {
      title: "Productivity & Export",
      description: "Powerful tools to create, manage, and share your resumes",
      icon: <Download className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      features: [
        {
          icon: <Download className="w-6 h-6" />,
          title: "Multiple Export Formats",
          description: "Export in PDF, DOCX, or create shareable online links with custom domains",
          stats: "3 Export Formats"
        },
        {
          icon: <Share className="w-6 h-6" />,
          title: "Easy Sharing",
          description: "Share your resume with a professional link or download for email attachments",
          stats: "One-Click Sharing"
        },
        {
          icon: <FileText className="w-6 h-6" />,
          title: "Version Management",
          description: "Keep multiple versions of your resume for different roles and applications",
          stats: "Unlimited Versions"
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Quick Creation",
          description: "Build a professional resume in under 10 minutes with our streamlined process",
          stats: "10 Min Average"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-transparent to-blue-50/50 dark:from-violet-950/30 dark:via-transparent dark:to-blue-950/30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-100 to-blue-100 dark:from-violet-900/50 dark:to-blue-900/50 mb-8"
            >
              <Sparkles className="w-5 h-5 text-violet-600" />
              <span className="font-medium text-violet-800 dark:text-violet-300">Powerful Features</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-violet-900 to-blue-900 dark:from-slate-100 dark:via-violet-100 dark:to-blue-100 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Features That Make You
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                Irresistible to Employers
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover the comprehensive set of tools and capabilities that make ResuMeUp 
              the most advanced AI-powered resume builder in the market.
            </motion.p>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700" asChild>
                <RegisterLink>
                  <Zap className="mr-2 w-5 h-5" />
                  Try All Features Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </RegisterLink>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 1 ? 'bg-muted/20' : ''}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Category Header */}
              <motion.div 
                className="text-center mb-16"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl ${category.bgColor} mb-6`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </motion.div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {category.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="group"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-8 rounded-3xl bg-background border border-border/50 hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                            {feature.title}
                          </h4>
                          <Badge variant="secondary" className="mb-3">
                            {feature.stats}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                        {feature.description}
                      </p>

                      <div className="flex items-center mt-4 text-violet-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white">
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
                Proven Results
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Our features deliver measurable results that help you land more interviews
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "99%", label: "ATS Pass Rate", icon: <Target className="w-8 h-8" /> },
                { number: "50K+", label: "Resumes Created", icon: <FileText className="w-8 h-8" /> },
                { number: "3.2x", label: "More Interviews", icon: <TrendingUp className="w-8 h-8" /> },
                { number: "15+", label: "Template Designs", icon: <Palette className="w-8 h-8" /> }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Experience These Features?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start building your ATS-optimized resume today and see the difference our features make
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-16 px-10 text-xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700" asChild>
                  <RegisterLink>
                    <Award className="mr-3 w-6 h-6" />
                    Start Building Free
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </RegisterLink>
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                ✨ No credit card required • 🛡️ All features included • 🚀 Start in 2 minutes
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
