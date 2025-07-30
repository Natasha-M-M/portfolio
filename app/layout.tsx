import type React from "react"
import "./globals.css"
import { ThemeProvider } from "./context/theme-context"
import Navigation from "@/components/Navigation"

export const metadata = {
  title: "Natasha M Mubaiwa - Portfolio",
  description: "Full Stack Developer, Graphic Designer, Digital Marketer, and Scratch Instructor",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
