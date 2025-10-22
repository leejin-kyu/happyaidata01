'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: '서비스', href: '#services' },
    { label: '프로젝트 사례', href: '#projects' },
    { label: '차별점', href: '#difference' },
    { label: '교육/강의', href: '#education' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl md:text-3xl font-bold">
              <span className="gradient-text">해피AI</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3PgNY-n-AQ1BKdNnDRqOxd3NOcpY4Uy9ADRMV-X6c_rdscaRcSj0meSls4n89Hpb1HuK4yynWd"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold"
            >
              무료 상담 문의
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3PgNY-n-AQ1BKdNnDRqOxd3NOcpY4Uy9ADRMV-X6c_rdscaRcSj0meSls4n89Hpb1HuK4yynWd"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full text-center font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              무료 상담 문의
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
