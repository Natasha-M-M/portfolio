"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type ThemeContextType = {
  isDark: boolean
  toggleTheme: () => void
  isLoading: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      // Check localStorage first
      const stored = localStorage.getItem("theme")
      if (stored) {
        setIsDark(stored === "dark")
      } else {
        // Default to system preference if no stored preference
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        setIsDark(systemPrefersDark)
      }
    } catch (error) {
      // Fallback if localStorage is not available
      setIsDark(false)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem("theme", isDark ? "dark" : "light")
      } catch (error) {
        // Handle localStorage errors silently
        console.warn("Could not save theme preference:", error)
      }

      // Apply theme to document
      if (isDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [isDark, isLoading])

  const toggleTheme = () => {
    if (!isLoading) {
      setIsDark((prev) => !prev)
    }
  }

  return <ThemeContext.Provider value={{ isDark, toggleTheme, isLoading }}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
