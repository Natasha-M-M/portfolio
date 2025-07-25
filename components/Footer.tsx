"use client"

interface FooterProps {
  isDark: boolean
}

export default function Footer({ isDark }: FooterProps) {
  return (
    <footer className={`py-8 ${isDark ? "border-t border-gray-800" : "border-t border-gray-200"}`}>
      <div className="container mx-auto px-6 text-center">
        <p className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>
          © 2024 Natasha M Mubaiwa. Built with Next.js and lots of ☕
        </p>
      </div>
    </footer>
  )
}
