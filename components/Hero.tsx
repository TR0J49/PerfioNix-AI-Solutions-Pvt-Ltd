'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030014]">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0520]/50 to-[#030014]" />
      </div>


      {/* Floating Orbs - Futuristic Purple/Cyan/Pink */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full filter blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/15 rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full filter blur-[80px] animate-pulse" style={{ animationDelay: '0.5s' }} />

      {/* Scan Lines */}
      <div className="absolute inset-0 scan-lines opacity-50" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full border border-purple-500/40 bg-purple-500/10 backdrop-blur-xl"
        >
          <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
          <span className="text-sm font-semibold text-purple-300 tracking-wider uppercase">Next-Gen AI Solutions</span>
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
        </motion.div>

        {/* Main Heading with Smooth Motion Effects */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight font-space"
        >
          {/* First Line */}
          <motion.span
            className="block"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Engineering Tomorrow with
          </motion.span>

          {/* Second Line - Intelligent AI Today */}
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="block mt-2 relative"
          >
            {/* Main gradient text */}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-gradient bg-[length:200%_auto]">
              Intelligent AI Today
            </span>

            {/* Animated underline */}
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-full origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            />

            {/* Subtle glow behind text */}
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 blur-2xl opacity-40 pointer-events-none">
              Intelligent AI Today
            </span>
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Intelligent AI consulting and solutions that empower businesses to
          <span className="text-purple-400"> optimize performance</span> and achieve
          <span className="text-pink-400"> sustainable growth</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/services"
            className="group relative px-8 py-4 rounded-2xl font-semibold overflow-hidden"
          >
            {/* AI Neural network glow */}
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-75 blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />

            {/* Scanning line effect */}
            <span className="absolute inset-0 rounded-2xl overflow-hidden">
              <span className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-scan-line" />
            </span>

            {/* Circuit board pattern background */}
            <span className="absolute inset-0 rounded-2xl bg-[#0f0a1f] border border-purple-500/50 group-hover:border-pink-400 transition-colors duration-300" />

            {/* Data stream particles */}
            <span className="absolute inset-0 rounded-2xl overflow-hidden">
              <span className="absolute top-0 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-data-flow opacity-60" />
              <span className="absolute top-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-data-flow-delayed opacity-60" />
              <span className="absolute top-0 left-3/4 w-1 h-1 bg-pink-400 rounded-full animate-data-flow-slow opacity-60" />
            </span>

            {/* Holographic shine */}
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            {/* Corner accents - AI chip style */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-pink-400 rounded-tl-lg" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-pink-400 rounded-tr-lg" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-pink-400 rounded-bl-lg" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-pink-400 rounded-br-lg" />

            {/* Button content */}
            <span className="relative flex items-center justify-center z-10">
              {/* AI Brain icon effect */}
              <span className="relative mr-3">
                <ArrowRight className="text-pink-400 animate-pulse" size={22} />
                <span className="absolute inset-0 text-pink-400 animate-ping opacity-30">
                  <ArrowRight size={22} />
                </span>
              </span>

              <span className="font-bold bg-gradient-to-r from-pink-300 via-white to-purple-300 bg-clip-text text-transparent group-hover:from-white group-hover:via-pink-300 group-hover:to-white transition-all duration-300 tracking-wide">
                Explore Our Services
              </span>

              {/* Animated sparkles */}
              <span className="relative ml-3">
                <Sparkles className="text-pink-400 group-hover:rotate-12 transition-transform duration-300" size={20} />
                <span className="absolute inset-0 -translate-x-1 opacity-50 text-pink-400/50">
                  <Sparkles size={20} />
                </span>
              </span>
            </span>

            {/* Status indicator - AI active */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500" />
            </span>
          </Link>

          <Link
            href="/products"
            className="group relative px-8 py-4 rounded-2xl font-semibold overflow-hidden"
          >
            {/* AI Neural network glow */}
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-75 blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />

            {/* Scanning line effect */}
            <span className="absolute inset-0 rounded-2xl overflow-hidden">
              <span className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line" />
            </span>

            {/* Circuit board pattern background */}
            <span className="absolute inset-0 rounded-2xl bg-[#0a0a1f] border border-cyan-500/50 group-hover:border-cyan-400 transition-colors duration-300" />

            {/* Data stream particles */}
            <span className="absolute inset-0 rounded-2xl overflow-hidden">
              <span className="absolute top-0 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-data-flow opacity-60" />
              <span className="absolute top-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-data-flow-delayed opacity-60" />
              <span className="absolute top-0 left-3/4 w-1 h-1 bg-cyan-400 rounded-full animate-data-flow-slow opacity-60" />
            </span>

            {/* Holographic shine */}
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            {/* Corner accents - AI chip style */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400 rounded-br-lg" />

            {/* Button content */}
            <span className="relative flex items-center justify-center z-10">
              {/* AI Brain icon effect */}
              <span className="relative mr-3">
                <Sparkles className="text-cyan-400 animate-pulse" size={22} />
                <span className="absolute inset-0 text-cyan-400 animate-ping opacity-30">
                  <Sparkles size={22} />
                </span>
              </span>

              <span className="font-bold bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent group-hover:from-white group-hover:via-cyan-300 group-hover:to-white transition-all duration-300 tracking-wide">
                Explore Our Products
              </span>

              {/* Animated arrow with trail */}
              <span className="relative ml-3">
                <ArrowRight className="text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                <span className="absolute inset-0 -translate-x-1 opacity-50 text-cyan-400/50">
                  <ArrowRight size={20} />
                </span>
              </span>
            </span>

            {/* Status indicator - AI active */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
            </span>
          </Link>
        </motion.div>

      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent" />

      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-purple-500/30 rounded-tl-3xl" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-pink-500/30 rounded-tr-3xl" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-cyan-500/30 rounded-bl-3xl" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-purple-500/30 rounded-br-3xl" />
    </section>
  )
}

export default Hero
