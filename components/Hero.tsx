'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'

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

        {/* Main Heading with Glow */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight font-space"
        >
          Engineering Tomorrow with
          <span className="block mt-2 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
              Intelligent AI Today
            </span>
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 blur-2xl opacity-50">
              Intelligent AI Today
            </span>
          </span>
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
            className="group px-8 py-4 rounded-2xl font-semibold bg-white/5 border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-xl"
          >
            <span className="flex items-center text-white">
              <ArrowRight className="mr-2 text-cyan-400 group-hover:translate-x-1 transition-transform" size={20} />
              Explore Our Services
            </span>
          </Link>

          <Link
            href="/products"
            className="group px-8 py-4 rounded-2xl font-semibold bg-white/5 border border-purple-500/30 hover:border-purple-400/60 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-xl"
          >
            <span className="flex items-center text-white">
              <Sparkles className="mr-2 text-purple-400" size={20} />
              Explore Our Products
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
