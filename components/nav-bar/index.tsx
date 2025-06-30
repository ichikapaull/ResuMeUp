"use client";
import React, { useState } from "react";
import { Menu, Moon, Sun, Sparkles, Zap, X } from "lucide-react";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/features", label: "Features", icon: <Sparkles className="w-4 h-4" /> },
    { href: "/how-it-works", label: "How it Works", icon: null },
    { href: "/reviews", label: "Reviews", icon: null },
    { href: "/pricing", label: "Pricing", icon: null }
  ];

  return (
    <motion.div 
      className="w-full sticky top-0 z-[9999]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Main Navigation */}
      <div className="w-full bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg">
        <div className="w-full mx-auto max-w-7xl p-4 px-6 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/">
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
            <div className="relative">
              <motion.div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-purple-500 to-blue-600 flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="w-5 h-5 text-white" />
              </motion.div>
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <div>
              <h5 className="font-black text-xl bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">
                ResuMeUp
              </h5>
              <p className="text-xs text-muted-foreground -mt-1">ATS Optimized</p>
            </div>
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link 
                  href={item.href}
                  className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium group relative"
                >
                  {item.icon}
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="relative overflow-hidden"
              >
                <motion.div
                  initial={false}
                  animate={{ 
                    rotate: theme === "dark" ? 180 : 0,
                    scale: theme === "dark" ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <Sun className="h-4 w-4" />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{ 
                    rotate: theme === "dark" ? 0 : 180,
                    scale: theme === "dark" ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <Moon className="h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>

            {/* Auth Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden sm:flex items-center gap-3"
            >
              <LoginLink>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                    Sign In
                  </Button>
                </motion.div>
              </LoginLink>
              
              <RegisterLink>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Button className="relative overflow-hidden bg-gradient-to-r from-primary via-purple-500 to-blue-600 hover:shadow-lg transition-all duration-300">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-primary opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 font-semibold">Get Started Free</span>
                  </Button>
                </motion.div>
              </RegisterLink>
            </motion.div>

            {/* Mobile Menu */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden"
            >
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hover:bg-background/50"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl z-50"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 space-y-4">
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Link 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-primary/10"
                >
                  {item.icon}
                  {item.label}
                </Link>
              </motion.div>
            ))}
            
            <div className="pt-4 border-t border-border/50 space-y-3">
              <LoginLink>
                <Button variant="ghost" className="w-full justify-start text-foreground/80 hover:text-foreground">
                  Sign In
                </Button>
              </LoginLink>
              
              <RegisterLink>
                <Button className="w-full bg-gradient-to-r from-primary via-purple-500 to-blue-600 hover:shadow-lg transition-all duration-300">
                  Get Started Free
                </Button>
              </RegisterLink>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default NavBar;
