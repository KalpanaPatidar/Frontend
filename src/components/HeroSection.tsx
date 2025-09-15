import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import DarkVeil from './ui/DarkVeil';
import CountUp from './CountUp.tsx'
export function HeroSection() {
  return (
    <>
      <div style={{ width: '100%', position: 'absolute' }} className="h-[110vh]">
        <DarkVeil />
      </div>
      <section id="home" className="relative w-full min-h-[70vh] md:min-h-[100vh] flex items-center gap-3 justify-center overflow-hidden">

  {/* Background Blurs */}
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute top-10 left-4 md:top-20 md:left-10 w-48 h-48 md:w-72 md:h-56 bg-white/10 rounded-full blur-3xl"
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
      className="absolute bottom-10 right-4 md:bottom-20 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl"
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

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-3xl flex flex-col gap-2 md:gap-4 items-center"
    >
      
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center mt-5 md:mt-0 space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white/90"
      >
        <Sparkles className="w-4 h-4" />
        <span className="text-sm font-medium">Powered by Advanced AI Technology</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-snug"
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
        className="text-base sm:text-lg text-white/90 max-w-xl mx-auto leading-relaxed mb-5 md:mb-0"
      >
        Leverage the power of AI to discover internship opportunities tailored to your skills,
        interests, and career goals under the PM Internship Scheme initiative.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex w-[90%] md:w-full md:flex-row gap-2 flex-col items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
      >
        <Button
          size="lg"
          className="bg-white text-primary hover:bg-white/70 transition-all duration-300 shadow-glow font-semibold text-lg px-6 sm:px-8 py-4 rounded-xl group"
        >
          Find My Internship
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button
          variant="ghost"
          size="lg"
          className="text-white border-white/30 hover:bg-white/40 transition-smooth font-semibold text-lg px-6 sm:px-8 py-4 rounded-xl"
        >
          Test Your Skills
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl mx-auto "
      >
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Users className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-2xl md:text-3xl font-bold text-white">
              <CountUp from={0} to={50000} separator="," duration={1} />+
            </span>
          </div>
          <p className="text-hero-gradient/80 text-sm">Active Students</p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-2xl sm:text-3xl font-bold text-white">
              <CountUp from={0} to={95} separator="," duration={1} />%
            </span>
          </div>
          <p className="text-hero-gradient/80 text-sm">Match Accuracy</p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Sparkles className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-2xl sm:text-3xl font-bold text-white">
              <CountUp from={0} to={2000} separator="," duration={1} />+
            </span>
          </div>
          <p className="text-hero-gradient/80 text-sm">Partner Companies</p>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

    </>
  );
}
