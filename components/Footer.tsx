"use client"

import { useTheme } from "@/app/context/theme-context"

export default function Footer() {
  const { isDark, isLoading } = useTheme()

  if (isLoading) {
    return (
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">© 2024 Natasha M Mubaiwa. Built with Next.js and lots of ☕</p>
        </div>
      </footer>
    )
  }

  return (
    <footer className={`py-8 ${isDark ? "border-t border-gray-800" : "border-t border-gray-200"}`}>
      <div className="container mx-auto px-6 text-center">
        <p className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>
          © 2025 Natasha M Mubaiwa. Built with Next.js and lots of ☕
        </p>
      </div>
    </footer>
  )
}
