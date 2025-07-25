"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useState, useEffect, createContext, useContext } from "react"
import Link from "next/link"
import AboutClient from "./AboutClient"

const ThemeContext = createContext<{
  isDark: boolean
  toggleTheme: () => void
}>({
  isDark: true,
  toggleTheme: () => {},
})

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "contact", label: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-black/95 backdrop-blur-md border-b border-yellow-500/20"
            : "bg-white/95 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-2xl font-bold cursor-pointer ${isDark ? "text-yellow-400" : "text-gray-900"}`}
            >
              Natasha
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <motion.div
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    item.id === "about"
                      ? isDark
                        ? "text-yellow-400"
                        : "text-gray-900"
                      : isDark
                        ? "text-gray-300 hover:text-yellow-400"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {item.id === "about" && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${isDark ? "bg-yellow-400" : "bg-gray-900"}`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDark
                ? "bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div initial={false} animate={{ rotate: isDark ? 0 : 180 }} transition={{ duration: 0.3 }}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default function AboutPageClient() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const themeClasses = isDark ? "bg-black" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <Navigation />
        <AboutClient />
      </ThemeContext.Provider>
    </div>
  )
}
