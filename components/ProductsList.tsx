'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  MessageSquare,
  FileSearch,
  BarChart3,
  CheckSquare,
  StickyNote,
  Bell,
  Shield,
  Zap,
  ArrowRight,
  Cpu,
  Layers,
  Lock,
  Rocket,
  Star,
  ChevronRight,
  Play,
  Globe,
  Search,
  Database,
  BookOpen,
  Users,
  Clock,
  Sparkles,
  Code,
  Building2,
  Headphones,
  GraduationCap,
  Server,
  Mic,
  Brain,
  Languages,
  Settings,
  RefreshCw,
  ShieldCheck,
  User,
  Briefcase,
  Video,
  Heart,
  Sun,
  Wind,
  Cloud,
  LineChart,
  AlertTriangle,
  History,
  Factory,
  TrendingUp,
  Gauge
} from 'lucide-react'

const ProductsList = () => {
  const axioFeatures = [
    {
      icon: MessageSquare,
      title: 'Smart AI Chat',
      description: 'Conversational AI with web search, code support & real-time streaming',
      gradient: 'from-blue-500 to-indigo-500',
      glow: 'blue'
    },
    {
      icon: FileSearch,
      title: 'DocIQ',
      description: 'Chat with PDF, DOCX, TXT using RAG-powered intelligence',
      gradient: 'from-indigo-500 to-violet-500',
      glow: 'indigo'
    },
    {
      icon: BarChart3,
      title: 'VizIQ',
      description: 'No-code analytics with auto-generated dashboards & KPIs',
      gradient: 'from-violet-500 to-blue-500',
      glow: 'violet'
    },
    {
      icon: CheckSquare,
      title: 'Smart Tasks',
      description: 'AI-powered task management with priority automation',
      gradient: 'from-blue-600 to-indigo-500',
      glow: 'blue'
    },
    {
      icon: StickyNote,
      title: 'Quick Notes',
      description: 'Capture & organize ideas with intelligent search',
      gradient: 'from-indigo-500 to-blue-500',
      glow: 'indigo'
    },
    {
      icon: Bell,
      title: 'Reminders',
      description: 'Smart deadline tracking with contextual alerts',
      gradient: 'from-violet-500 to-indigo-500',
      glow: 'violet'
    }
  ]

  const stats = [
    { value: '6+', label: 'AI Modules', icon: Layers },
    { value: '100%', label: 'Private', icon: Lock },
    { value: '10x', label: 'Faster', icon: Zap },
    { value: '24/7', label: 'Available', icon: Cpu }
  ]

  // DocNavigator AI Data
  const docNavigatorFeatures = [
    {
      icon: Globe,
      title: 'Universal Crawler',
      description: 'Automatically crawl and index any documentation website - GitBook, ReadTheDocs, Docusaurus, Swagger & more',
      gradient: 'from-emerald-500 to-cyan-500',
      glow: 'emerald'
    },
    {
      icon: Database,
      title: 'Smart Embeddings',
      description: 'Convert documentation into AI-ready vector embeddings for lightning-fast semantic search',
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'cyan'
    },
    {
      icon: Search,
      title: 'Natural Language Query',
      description: 'Ask questions in plain English and get accurate answers with direct source links',
      gradient: 'from-blue-500 to-emerald-500',
      glow: 'blue'
    },
    {
      icon: Layers,
      title: 'Multi-Domain Support',
      description: 'Create separate knowledge bases for different projects, clients, or documentation sets',
      gradient: 'from-emerald-500 to-teal-500',
      glow: 'emerald'
    },
    {
      icon: Server,
      title: 'Background Processing',
      description: 'Async crawling and embedding tasks keep your system fast and responsive',
      gradient: 'from-teal-500 to-cyan-500',
      glow: 'teal'
    },
    {
      icon: Sparkles,
      title: 'RAG-Powered Answers',
      description: 'Retrieval-Augmented Generation delivers precise, contextual responses every time',
      gradient: 'from-cyan-500 to-emerald-500',
      glow: 'cyan'
    }
  ]

  const docNavigatorStats = [
    { value: 'Any', label: 'Doc Platform', icon: Globe },
    { value: '10x', label: 'Faster Research', icon: Zap },
    { value: '100%', label: 'Automated', icon: Cpu },
    { value: '∞', label: 'Knowledge Bases', icon: Database }
  ]

  const targetAudience = [
    { icon: Code, title: 'Developers', description: 'Quick answers from API docs & SDK references' },
    { icon: Building2, title: 'Tech Companies', description: 'AI-powered search for customer docs' },
    { icon: Server, title: 'DevOps Teams', description: 'Query infrastructure & config guides' },
    { icon: Headphones, title: 'Support Teams', description: 'Faster customer query resolution' },
    { icon: Users, title: 'Product Teams', description: 'Analyze docs & improve onboarding' },
    { icon: GraduationCap, title: 'Students', description: 'Learn frameworks by asking questions' }
  ]

  // Friday AI Voice Assistant Data
  const fridayFeatures = [
    {
      icon: Mic,
      title: 'Real-Time Voice Processing',
      description: 'Instant responses with ultra-low audio latency for seamless conversations',
      gradient: 'from-orange-500 to-red-500',
      glow: 'orange'
    },
    {
      icon: Brain,
      title: 'Context-Aware Intelligence',
      description: 'Remembers previous messages and maintains natural conversation flow',
      gradient: 'from-red-500 to-pink-500',
      glow: 'red'
    },
    {
      icon: Languages,
      title: 'Multilingual Support',
      description: 'Fluent in Hindi, English, and regional languages with deep cultural and linguistic understanding',
      gradient: 'from-pink-500 to-orange-500',
      glow: 'pink'
    },
    {
      icon: Settings,
      title: 'Customizable Personality',
      description: 'Modify tone, character, humor, and behavior with personalized prompt profiles',
      gradient: 'from-orange-500 to-yellow-500',
      glow: 'orange'
    },
    {
      icon: RefreshCw,
      title: 'Reliable Fallback System',
      description: 'Works seamlessly even when APIs fail by switching to local storage modes',
      gradient: 'from-yellow-500 to-orange-500',
      glow: 'yellow'
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Private',
      description: 'Optional and configurable data storage ensuring complete user privacy and trust',
      gradient: 'from-red-500 to-orange-500',
      glow: 'red'
    }
  ]

  const fridayStats = [
    { value: '10+', label: 'Languages', icon: Languages },
    { value: '<1s', label: 'Response Time', icon: Zap },
    { value: '100%', label: 'Context Aware', icon: Brain },
    { value: '24/7', label: 'Always Ready', icon: Mic }
  ]

  const fridayUsers = [
    { icon: User, title: 'Multilingual Users', description: 'Converse in your preferred language' },
    { icon: GraduationCap, title: 'Students', description: 'Learning & study assistance' },
    { icon: Briefcase, title: 'Professionals', description: 'Productivity & task management' },
    { icon: Code, title: 'Developers', description: 'Voice-enabled app integration' },
    { icon: Video, title: 'Content Creators', description: 'Scripts & creative assistance' },
    { icon: Headphones, title: 'Support Teams', description: 'Customer service automation' }
  ]

  // RenewForecast Data
  const renewForecastFeatures = [
    {
      icon: Cloud,
      title: 'Real-Time Weather Integration',
      description: 'Live weather data including temperature, sunlight intensity, and wind speed for accurate predictions',
      gradient: 'from-green-500 to-teal-500',
      glow: 'green'
    },
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Machine learning models trained on historical plant data, weather patterns, and external forecasts',
      gradient: 'from-teal-500 to-cyan-500',
      glow: 'teal'
    },
    {
      icon: LineChart,
      title: 'Interactive Dashboard',
      description: 'Real-time forecasts, hourly charts, daily predictions, and historical performance graphs',
      gradient: 'from-cyan-500 to-green-500',
      glow: 'cyan'
    },
    {
      icon: AlertTriangle,
      title: 'Threshold Monitoring',
      description: 'Set minimum output expectations and receive instant alerts when forecasts drop below targets',
      gradient: 'from-green-500 to-lime-500',
      glow: 'green'
    },
    {
      icon: Clock,
      title: 'Hourly & Daily Forecasts',
      description: 'Short-term planning with hourly data and long-term insights with daily energy predictions',
      gradient: 'from-lime-500 to-teal-500',
      glow: 'lime'
    },
    {
      icon: History,
      title: 'Historical Analysis',
      description: 'Track performance over time, identify best-performing days, and analyze seasonal variations',
      gradient: 'from-teal-500 to-green-500',
      glow: 'teal'
    }
  ]

  const renewForecastStats = [
    { value: '99%', label: 'Accuracy', icon: Gauge },
    { value: '24/7', label: 'Monitoring', icon: Clock },
    { value: 'Real-Time', label: 'Weather Data', icon: Cloud },
    { value: 'AI', label: 'Powered', icon: Brain }
  ]

  const renewForecastUsers = [
    { icon: Sun, title: 'Solar Plant Owners', description: 'Monitor & optimize solar generation' },
    { icon: Wind, title: 'Wind Farm Operators', description: 'Predict wind power hour-by-hour' },
    { icon: Zap, title: 'Energy Companies', description: 'Plan distribution & prevent outages' },
    { icon: Factory, title: 'Industrial Plants', description: 'Optimize energy usage & costs' },
    { icon: Building2, title: 'Smart Cities', description: 'Manage city-level energy flow' },
    { icon: TrendingUp, title: 'Energy Traders', description: 'Forecast for efficient trading' }
  ]

  return (
    <section className="relative bg-[#030014] overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full filter blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full filter blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* AXIO AI - Hero Product Section */}
        <div className="py-20">
          {/* Product Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/30 backdrop-blur-xl">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-semibold">Flagship Product</span>
              <div className="px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-bold">
                NEW
              </div>
            </div>
          </motion.div>

          {/* Main Product Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Outer Glow */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 rounded-[32px] opacity-60 blur-xl" />
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 rounded-[32px]" />

            {/* Card Content */}
            <div className="relative bg-[#0a0a1a]/95 backdrop-blur-xl rounded-[30px] p-8 md:p-12 lg:p-16">

              {/* Top Section - Logo & Title */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
                <div className="flex items-center gap-6">
                  {/* Animated Logo Container */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', duration: 1 }}
                    className="relative"
                  >
                    <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-50 blur-xl animate-pulse" />
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/5 backdrop-blur-xl border border-blue-500/20 p-3 overflow-hidden">
                      <Image
                        src="/axio-ai-logo.png"
                        alt="AXIO AI"
                        width={128}
                        height={128}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>

                  <div>
                    <h2 className="text-4xl md:text-6xl font-bold font-space mb-2">
                      <span className="text-white">AXIO</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"> AI</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl">All-in-One Productivity Intelligence</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="http://192.168.29.62:5000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 hover:from-blue-500 hover:via-indigo-400 hover:to-violet-400 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg shadow-blue-500/25"
                  >
                    <Rocket className="w-5 h-5" />
                    Try Now
                  </a>
                  <Link
                    href="/contact"
                    className="group px-8 py-4 rounded-2xl font-semibold bg-white/5 border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-xl"
                  >
                    <span className="flex items-center text-white">
                      <MessageSquare className="mr-2 w-5 h-5" />
                      Contact Us
                    </span>
                  </Link>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                      <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-blue-500/10 hover:border-blue-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-white font-space">{stat.value}</div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mb-12"
              >
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  AXIO AI unifies <span className="text-blue-400 font-semibold">AI chat</span>,
                  <span className="text-indigo-400 font-semibold"> document intelligence</span>,
                  <span className="text-violet-400 font-semibold"> data visualization</span>, and
                  <span className="text-blue-400 font-semibold"> task management</span> into one powerful platform.
                  Built on cutting-edge LLM and RAG technology for maximum productivity.
                </p>
              </motion.div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {axioFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative"
                    >
                      {/* Hover Glow */}
                      <div className={`absolute -inset-[1px] bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

                      <div className="relative h-full p-6 rounded-2xl bg-[#0a0a1a]/50 border border-blue-500/10 group-hover:border-transparent group-hover:bg-[#0a0a1a]/80 transition-all duration-300">
                        {/* Icon */}
                        <div className={`w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px]`}>
                          <div className="w-full h-full rounded-xl bg-[#0a0a1a] flex items-center justify-center group-hover:bg-[#0a0a1a]/80 transition-colors">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <h4 className="text-xl font-bold text-white mb-2 font-space group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Arrow */}
                        <div className="mt-4 flex items-center text-gray-500 group-hover:text-blue-400 transition-colors">
                          <span className="text-sm font-medium">Learn more</span>
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Security Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10" />
            <div className="absolute inset-[1px] bg-[#0a0a1a]/90 rounded-3xl" />

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-blue-500/30 rounded-2xl blur-xl animate-pulse" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-space mb-1">Privacy-First Architecture</h3>
                    <p className="text-gray-400">All data processed locally. Zero cloud dependency. Complete control.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold text-sm flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    End-to-End Encrypted
                  </span>
                  <span className="px-5 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-semibold text-sm flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    No Data Collection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* DocNavigator AI - Second Product Section */}
        <div className="py-20 border-t border-emerald-500/10">
          {/* Product Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 backdrop-blur-xl">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-semibold">Documentation Intelligence</span>
              <div className="px-2 py-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-bold">
                NEW
              </div>
            </div>
          </motion.div>

          {/* Main Product Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Outer Glow */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 rounded-[32px] opacity-60 blur-xl" />
            <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 rounded-[32px]" />

            {/* Card Content */}
            <div className="relative bg-[#0a0520]/95 backdrop-blur-xl rounded-[30px] p-8 md:p-12 lg:p-16">

              {/* Top Section - Logo & Title */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
                <div className="flex items-center gap-6">
                  {/* Animated Logo Container */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', duration: 1 }}
                    className="relative"
                  >
                    <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl opacity-50 blur-xl animate-pulse" />
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/5 backdrop-blur-xl border border-emerald-500/20 p-3 overflow-hidden">
                      <Image
                        src="/DocNavigator.png"
                        alt="DocNavigator AI"
                        width={128}
                        height={128}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>

                  <div>
                    <h2 className="text-4xl md:text-6xl font-bold font-space mb-2">
                      <span className="text-white">Doc</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Navigator</span>
                      <span className="text-white"> AI</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl">Turn Any Documentation Into a Smart AI Knowledge Base</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://docsassistant.perfionixai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 hover:from-emerald-400 hover:via-cyan-400 hover:to-teal-400 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg shadow-emerald-500/25"
                  >
                    <Rocket className="w-5 h-5" />
                    Try Now
                  </a>
                  <Link
                    href="/contact"
                    className="group px-8 py-4 rounded-2xl font-semibold bg-white/5 border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-xl"
                  >
                    <span className="flex items-center text-white">
                      <MessageSquare className="mr-2 w-5 h-5" />
                      Contact Us
                    </span>
                  </Link>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {docNavigatorStats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                      <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-white font-space">{stat.value}</div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mb-12"
              >
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  DocNavigator AI is a powerful <span className="text-emerald-400 font-semibold">Documentation Crawler & RAG System</span> that
                  transforms any documentation website into an <span className="text-cyan-400 font-semibold">intelligent knowledge base</span>.
                  Ask questions in natural language and get <span className="text-teal-400 font-semibold">instant, accurate answers</span> with source links.
                </p>
              </motion.div>

              {/* How It Works */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-white mb-6 font-space">How It Works</h3>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center mb-2">
                        <Globe className="w-8 h-8 text-emerald-400" />
                      </div>
                      <span className="text-white font-semibold">Crawl</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-600 hidden md:block" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center mb-2">
                        <FileSearch className="w-8 h-8 text-cyan-400" />
                      </div>
                      <span className="text-white font-semibold">Extract</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-600 hidden md:block" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 border border-teal-500/30 flex items-center justify-center mb-2">
                        <Database className="w-8 h-8 text-teal-400" />
                      </div>
                      <span className="text-white font-semibold">Embed</span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-600 hidden md:block" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center mb-2">
                        <Search className="w-8 h-8 text-emerald-400" />
                      </div>
                      <span className="text-white font-semibold">Query</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {docNavigatorFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative"
                    >
                      {/* Hover Glow */}
                      <div className={`absolute -inset-[1px] bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

                      <div className="relative h-full p-6 rounded-2xl bg-[#120a30]/50 border border-emerald-500/10 group-hover:border-transparent group-hover:bg-[#120a30]/80 transition-all duration-300">
                        {/* Icon */}
                        <div className={`w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px]`}>
                          <div className="w-full h-full rounded-xl bg-[#0a0520] flex items-center justify-center group-hover:bg-[#120a30] transition-colors">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <h4 className="text-xl font-bold text-white mb-2 font-space group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Arrow */}
                        <div className="mt-4 flex items-center text-gray-500 group-hover:text-emerald-400 transition-colors">
                          <span className="text-sm font-medium">Learn more</span>
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Target Audience Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h3 className="text-2xl font-bold text-white mb-6 font-space text-center">Built For</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {targetAudience.map((audience, index) => {
                    const Icon = audience.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group p-4 rounded-2xl bg-white/5 border border-emerald-500/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all text-center"
                      >
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h4 className="text-white font-semibold text-sm mb-1">{audience.title}</h4>
                        <p className="text-gray-500 text-xs">{audience.description}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Supported Platforms Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-teal-500/10" />
            <div className="absolute inset-[1px] bg-[#0a0520]/90 rounded-3xl" />

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-emerald-500/30 rounded-2xl blur-xl animate-pulse" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-space mb-1">Works With Any Documentation</h3>
                    <p className="text-gray-400">GitBook • ReadTheDocs • Docusaurus • Swagger • Custom HTML & More</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Save Hours Daily
                  </span>
                  <span className="px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    AI-Powered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Friday AI - Voice Assistant Section */}
        <div className="py-20 border-t border-orange-500/10">
          {/* Product Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 backdrop-blur-xl">
              <Mic className="w-5 h-5 text-orange-400" />
              <span className="text-white font-semibold">AI Voice Assistant</span>
              <div className="px-2 py-0.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold">
                NEW
              </div>
            </div>
          </motion.div>

          {/* Main Product Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Outer Glow */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-[32px] opacity-60 blur-xl" />
            <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-[32px]" />

            {/* Card Content */}
            <div className="relative bg-[#0a0520]/95 backdrop-blur-xl rounded-[30px] p-8 md:p-12 lg:p-16">

              {/* Top Section - Logo & Title */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
                <div className="flex items-center gap-6">
                  {/* Animated Logo Container */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', duration: 1 }}
                    className="relative"
                  >
                    <div className="absolute -inset-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl opacity-50 blur-xl animate-pulse" />
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-500/20 flex items-center justify-center">
                      <Mic className="w-12 h-12 md:w-16 md:h-16 text-orange-400" />
                    </div>
                  </motion.div>

                  <div>
                    <h2 className="text-4xl md:text-6xl font-bold font-space mb-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Friday</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl">Your Intelligent Hindi Voice Companion</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://voicebot.perfionixai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-400 hover:via-red-400 hover:to-pink-400 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg shadow-orange-500/25"
                  >
                    <Rocket className="w-5 h-5" />
                    Try Friday
                  </a>
                  <Link
                    href="/contact"
                    className="group px-8 py-4 rounded-2xl font-semibold bg-white/5 border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-xl"
                  >
                    <span className="flex items-center text-white">
                      <MessageSquare className="mr-2 w-5 h-5" />
                      Contact Us
                    </span>
                  </Link>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {fridayStats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                      <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-orange-500/10 hover:border-orange-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-white font-space">{stat.value}</div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mb-12"
              >
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Friday is an advanced <span className="text-orange-400 font-semibold">AI voice assistant</span> designed to bring the futuristic essence of JARVIS to life. With <span className="text-red-400 font-semibold">multilingual support</span> including Hindi, English, and regional languages, Friday delivers cutting-edge speech recognition and <span className="text-pink-400 font-semibold">natural language intelligence</span> for lifelike, emotionally aware conversations that feel natural and human.
                </p>
              </motion.div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {fridayFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative"
                    >
                      {/* Hover Glow */}
                      <div className={`absolute -inset-[1px] bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

                      <div className="relative h-full p-6 rounded-2xl bg-[#120a30]/50 border border-orange-500/10 group-hover:border-transparent group-hover:bg-[#120a30]/80 transition-all duration-300">
                        {/* Icon */}
                        <div className={`w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px]`}>
                          <div className="w-full h-full rounded-xl bg-[#0a0520] flex items-center justify-center group-hover:bg-[#120a30] transition-colors">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <h4 className="text-xl font-bold text-white mb-2 font-space group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Arrow */}
                        <div className="mt-4 flex items-center text-gray-500 group-hover:text-orange-400 transition-colors">
                          <span className="text-sm font-medium">Learn more</span>
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Target Users Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h3 className="text-2xl font-bold text-white mb-6 font-space text-center">Who Can Use Friday?</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {fridayUsers.map((user, index) => {
                    const Icon = user.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group p-4 rounded-2xl bg-white/5 border border-orange-500/10 hover:border-orange-500/30 hover:bg-white/10 transition-all text-center"
                      >
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-orange-400" />
                        </div>
                        <h4 className="text-white font-semibold text-sm mb-1">{user.title}</h4>
                        <p className="text-gray-500 text-xs">{user.description}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Friday Hindi Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10" />
            <div className="absolute inset-[1px] bg-[#0a0520]/90 rounded-3xl" />

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-orange-500/30 rounded-2xl blur-xl animate-pulse" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                      <Languages className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-space mb-1">Built for Everyone, Everywhere</h3>
                    <p className="text-gray-400">Experience AI conversations in Hindi, English, and 10+ languages with cultural understanding</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold text-sm flex items-center gap-2">
                    <Languages className="w-4 h-4" />
                    Multilingual
                  </span>
                  <span className="px-5 py-2.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-semibold text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    JARVIS-Inspired
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RenewForecast - Renewable Energy Forecasting Section */}
        <div className="py-20 border-t border-green-500/10">
          {/* Product Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/30 backdrop-blur-xl">
              <Sun className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">Renewable Energy AI</span>
              <div className="px-2 py-0.5 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-bold">
                NEW
              </div>
            </div>
          </motion.div>

          {/* Main Product Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Outer Glow */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 rounded-[32px] opacity-60 blur-xl" />
            <div className="absolute -inset-[1px] bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 rounded-[32px]" />

            {/* Card Content */}
            <div className="relative bg-[#0a0520]/95 backdrop-blur-xl rounded-[30px] p-8 md:p-12 lg:p-16">

              {/* Top Section - Logo & Title */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
                <div className="flex items-center gap-6">
                  {/* Animated Logo Container */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', duration: 1 }}
                    className="relative"
                  >
                    <div className="absolute -inset-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl opacity-50 blur-xl animate-pulse" />
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-xl border border-green-500/20 flex items-center justify-center">
                      <Sun className="w-12 h-12 md:w-16 md:h-16 text-green-400" />
                    </div>
                  </motion.div>

                  <div>
                    <h2 className="text-4xl md:text-6xl font-bold font-space mb-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">RenewForecast</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl">AI-Powered Renewable Energy Prediction</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="http://renewforecast.perfionixai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 hover:from-green-400 hover:via-teal-400 hover:to-cyan-400 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg shadow-green-500/25"
                  >
                    <Rocket className="w-5 h-5" />
                    Try RenewForecast
                  </a>
                  <Link
                    href="/contact"
                    className="group px-8 py-4 rounded-2xl font-semibold bg-white/5 border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-xl"
                  >
                    <span className="flex items-center text-white">
                      <MessageSquare className="mr-2 w-5 h-5" />
                      Contact Us
                    </span>
                  </Link>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {renewForecastStats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                      <div className="relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-green-500/10 hover:border-green-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <div className="text-2xl md:text-3xl font-bold text-white font-space">{stat.value}</div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mb-12"
              >
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  RenewForecast is an <span className="text-green-400 font-semibold">AI-based forecasting system</span> designed for solar and wind power plants. Predict, monitor, and optimize <span className="text-teal-400 font-semibold">renewable energy generation</span> using advanced machine learning combined with <span className="text-cyan-400 font-semibold">real-time weather data</span> for maximum efficiency and planning accuracy.
                </p>
              </motion.div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {renewForecastFeatures.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative"
                    >
                      {/* Hover Glow */}
                      <div className={`absolute -inset-[1px] bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

                      <div className="relative h-full p-6 rounded-2xl bg-[#120a30]/50 border border-green-500/10 group-hover:border-transparent group-hover:bg-[#120a30]/80 transition-all duration-300">
                        {/* Icon */}
                        <div className={`w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px]`}>
                          <div className="w-full h-full rounded-xl bg-[#0a0520] flex items-center justify-center group-hover:bg-[#120a30] transition-colors">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <h4 className="text-xl font-bold text-white mb-2 font-space group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Arrow */}
                        <div className="mt-4 flex items-center text-gray-500 group-hover:text-green-400 transition-colors">
                          <span className="text-sm font-medium">Learn more</span>
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Target Users Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h3 className="text-2xl font-bold text-white mb-6 font-space text-center">Built For</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {renewForecastUsers.map((user, index) => {
                    const Icon = user.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group p-4 rounded-2xl bg-white/5 border border-green-500/10 hover:border-green-500/30 hover:bg-white/10 transition-all text-center"
                      >
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-green-400" />
                        </div>
                        <h4 className="text-white font-semibold text-sm mb-1">{user.title}</h4>
                        <p className="text-gray-500 text-xs">{user.description}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* RenewForecast Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-teal-500/10 to-cyan-500/10" />
            <div className="absolute inset-[1px] bg-[#0a0520]/90 rounded-3xl" />

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-green-500/30 rounded-2xl blur-xl animate-pulse" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-space mb-1">Powering Sustainable Future</h3>
                    <p className="text-gray-400">Optimize solar & wind energy with AI-driven forecasting and real-time monitoring</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-semibold text-sm flex items-center gap-2">
                    <Sun className="w-4 h-4" />
                    Solar Ready
                  </span>
                  <span className="px-5 py-2.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 font-semibold text-sm flex items-center gap-2">
                    <Wind className="w-4 h-4" />
                    Wind Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <div className="relative text-center">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full filter blur-[100px]" />

            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', duration: 0.8 }}
                className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30"
              >
                <Layers className="w-10 h-10 text-purple-400" />
              </motion.div>

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-space">
                More <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Products</span> Coming
              </h3>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                We're building the next generation of AI tools. Partner with us to bring your ideas to life.
              </p>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsList
