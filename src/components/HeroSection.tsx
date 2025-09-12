import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import DarkVeil from './ui/DarkVeil';
import CountUp from './CountUp.tsx'
export function HeroSection() {
  return (
    <>
      <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
        <DarkVeil />
      </div>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 text-white/90"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Powered by Advanced AI Technology</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
            >
              Find Your Perfect
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                Internship Match
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Leverage the power of AI to discover internship opportunities tailored to your skills,
              interests, and career goals under the PM Internship Scheme initiative.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-glow font-semibold text-lg px-8 py-6 rounded-xl group"
              >
                Find My Internship
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10 transition-smooth font-semibold text-lg px-8 py-6 rounded-xl"
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-yellow-300 mr-2" />
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                                  <CountUp
                                    from={0}
                                    to={50000}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                  />+
                  </span>
                </div>
                <p className="text-hero-gradient/80 text-sm">Active Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-yellow-300 mr-2" />
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    <CountUp
                      from={0}
                      to={95}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />%
                  </span>
                </div>
                <p className="text-hero-gradient/80 text-sm">Match Accuracy</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5 text-yellow-300 mr-2" />
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    <CountUp
                      from={0}
                      to={2000}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />+
                  </span>
                </div>
                <p className="text-hero-gradient/80 text-sm">Partner Companies</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
    </>
  );
}
