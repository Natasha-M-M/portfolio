"use client"

import AboutClient from "./AboutClient"
import { useTheme } from "../context/theme-context"

export default function AboutPageClient() {
  const { isDark } = useTheme()
  const themeClasses = isDark ? "bg-black" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      <AboutClient />
    </div>
  )
}
