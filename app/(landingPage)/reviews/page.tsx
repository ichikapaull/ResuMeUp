"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, User, Trophy, Heart, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const ReviewsPage = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "TechCorp",
      rating: 5,
      review: "ResuMeUp completely transformed my job search. The ATS optimization helped me get 3x more interview calls. The templates are modern and professional.",
      avatar: "SJ",
      verified: true,
      featured: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "StartupCo",
      rating: 5,
      review: "Best resume builder I've used. The AI suggestions were spot-on and helped me highlight my achievements perfectly. Got my dream job in 2 weeks!",
      avatar: "MC",
      verified: true,
      featured: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "DataLabs",
      rating: 5,
      review: "The ATS compatibility is outstanding. My resume now passes through all screening systems. The interface is intuitive and saves so much time.",
      avatar: "ER",
      verified: true,
      featured: false
    },
    {
      id: 4,
      name: "David Kim",
      role: "Product Designer",
      company: "DesignStudio",
      rating: 5,
      review: "Clean, professional templates that actually look good. The customization options are perfect - not too simple, not overwhelming.",
      avatar: "DK",
      verified: true,
      featured: false
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Project Manager",
      company: "ConsultingGroup",
      rating: 5,
      review: "Helped me transition careers seamlessly. The skills optimization feature highlighted transferable skills I didn't even think of.",
      avatar: "LT",
      verified: true,
      featured: false
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Sales Director",
      company: "SalesCorp",
      rating: 5,
      review: "Professional results in minutes. My colleagues keep asking where I got my resume done. The PDF quality is pristine.",
      avatar: "JW",
      verified: true,
      featured: false
    }
  ];

  const stats = [
    { icon: <Trophy className="w-6 h-6" />, value: "98%", label: "Success Rate" },
    { icon: <Heart className="w-6 h-6" />, value: "50K+", label: "Happy Users" },
    { icon: <ThumbsUp className="w-6 h-6" />, value: "4.9/5", label: "Average Rating" },
    { icon: <Star className="w-6 h-6" />, value: "10K+", label: "5-Star Reviews" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Star className="w-4 h-4 mr-2" />
              Trusted by Professionals Worldwide
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">
              What Our Users Say
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who've transformed their careers with ResuMeUp. 
              Real stories from real people who landed their dream jobs.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-primary">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Discover how ResuMeUp helped professionals achieve their career goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {reviews.filter(review => review.featured).map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-14 h-14 bg-gradient-to-br from-primary to-purple-500 text-white font-bold text-lg">
                          {review.avatar}
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-lg flex items-center gap-2">
                            {review.name}
                            {review.verified && (
                              <Badge className="px-2 py-1 text-xs bg-green-100 text-green-700 border-green-200">
                                Verified
                              </Badge>
                            )}
                          </h4>
                          <p className="text-muted-foreground">{review.role}</p>
                          <p className="text-sm text-primary font-medium">{review.company}</p>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-primary/30" />
                    </div>

                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-foreground/80 leading-relaxed text-lg">
                      "{review.review}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">More Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Every review represents a career transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.filter(review => !review.featured).map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="w-10 h-10 bg-gradient-to-br from-primary to-purple-500 text-white font-semibold">
                        {review.avatar}
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold flex items-center gap-2">
                          {review.name}
                          {review.verified && (
                            <Badge className="px-1.5 py-0.5 text-xs bg-green-100 text-green-700 border-green-200">
                              ✓
                            </Badge>
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                      </div>
                    </div>

                    <div className="flex mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-foreground/80 leading-relaxed">
                      "{review.review}"
                    </p>

                    <p className="text-xs text-muted-foreground mt-3 border-t pt-3">
                      {review.company}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join thousands of professionals who've transformed their careers with ResuMeUp
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-primary via-purple-500 to-blue-600 text-white font-semibold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Building Your Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
