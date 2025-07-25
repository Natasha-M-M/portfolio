"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useTheme } from "@/hooks/useTheme"
import { useState } from "react"

export default function ResumePageClient() {
  const { isDark, toggleTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(true)

  const themeClasses = isDark ? "bg-black" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"

  // Canva link to the CV
  const canvaLink =
    "https://www.canva.com/design/DAGt-Ra4mjA/DmVHNIuglVmTkv91On6IMQ/edit?utm_content=DAGt-Ra4mjA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"

  // Function to handle CV download
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a")
    link.href = "/images/natasha-cv.png" // Path to your CV image
    link.download = "Natasha_Mubaiwa_CV.jpeg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      {/* Resume Section */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-6`}>
              My Resume
            </h1>
            <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto mb-8`}>
              Download my professional resume to learn more about my skills, experience, and qualifications.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                onClick={handleDownload}
                size="lg"
                className={`${isDark ? "bg-yellow-400 hover:bg-yellow-500 text-black" : "bg-gray-900 hover:bg-gray-800 text-white"}`}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>

              <Button
                onClick={() => window.open(canvaLink, "_blank")}
                size="lg"
                variant="outline"
                className={`${isDark ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400/10" : "border-gray-900 text-gray-900 hover:bg-gray-100"}`}
              >
                <Eye className="mr-2 h-5 w-5" />
                View on Canva
              </Button>
            </div>
          </motion.div>

          {/* CV Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className={`rounded-lg overflow-hidden shadow-xl ${isDark ? "shadow-yellow-400/10" : "shadow-gray-300/50"} mb-8`}
            >
              {isLoading && (
                <div
                  className={`w-full h-[800px] flex items-center justify-center ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
                >
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
                </div>
              )}
              <Image
                src="/images/natasha-cv.png"
                alt="Natasha Mubaiwa's Resume"
                width={800}
                height={1100}
                className="w-full object-contain"
                onLoad={() => setIsLoading(false)}
                style={{ display: isLoading ? "none" : "block" }}
                priority
              />
            </div>

            <div className="text-center mt-8">
              <Button
                onClick={handleDownload}
                size="lg"
                className={`${isDark ? "bg-yellow-400 hover:bg-yellow-500 text-black" : "bg-gray-900 hover:bg-gray-800 text-white"}`}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer isDark={isDark} />
    </div>
  )
}
