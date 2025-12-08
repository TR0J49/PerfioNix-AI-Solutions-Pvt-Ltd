'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Sparkles, Rocket } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#0a0520]/90 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative w-12 h-12 mr-3 rounded-xl overflow-hidden border-2 border-purple-500/50 group-hover:border-purple-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30">
                <Image
                  src="/PerfioNix logo.png"
                  alt="Perfionix AI Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white font-space tracking-tight">Perfionix AI</span>
                <span className="text-xs text-purple-400 font-medium">Next-Gen Solutions</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/services', label: 'Services' },
              { href: '/industries', label: 'Industries' },
              { href: '/collaboration', label: 'Collaboration' },
              { href: '/team', label: 'Our Team' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors group"
              >
                <span className="relative z-10 flex items-center gap-1">
                  {item.label}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}

            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 rounded-xl font-semibold text-white bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-xl"
            >
              <span className="flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                Contact Us
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-xl bg-white/5 border border-purple-500/30 hover:border-purple-400 hover:bg-white/10 transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-[#0a0520]/95 backdrop-blur-xl rounded-2xl mt-2 border border-purple-500/20">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/industries', label: 'Industries' },
                { href: '/collaboration', label: 'Collaboration' },
                { href: '/team', label: 'Our Team' },
                { href: '/contact', label: 'Contact Us' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-xl transition-all border border-transparent hover:border-purple-500/30"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
