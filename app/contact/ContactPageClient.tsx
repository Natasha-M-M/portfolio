"use client"
import { useTheme } from "../context/theme-context"
import ContactClient from "./ContactClient"

export default function ContactPageClient() {
  const { isDark } = useTheme()
  const themeClasses = isDark ? "bg-black" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      <ContactClient />
    </div>
  )
}
