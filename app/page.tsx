"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Lottie from "lottie-react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useTheme } from "@/hooks/useTheme"

// Flying papers animation with golden colors
const flyingPapersAnimation = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 180,
  w: 400,
  h: 400,
  nm: "Flying Papers Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Paper 1",
      sr: 1,
      ks: {
        o: { a: 0, k: 85 },
        r: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [15] },
            { t: 180, s: [-10] },
          ],
        },
        p: {
          a: 1,
          k: [
            { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [150, 300, 0] },
            { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 90, s: [250, 150, 0] },
            { t: 180, s: [180, 100, 0] },
          ],
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [60, 80] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 5 },
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0.84, 0, 0.8] }, // Golden color
              o: { a: 0, k: 100 },
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 0.84, 0, 1] },
              o: { a: 0, k: 60 },
              w: { a: 0, k: 2 },
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Paper 2",
      sr: 1,
      ks: {
        o: { a: 0, k: 75 },
        r: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [10] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [-20] },
            { t: 180, s: [25] },
          ],
        },
        p: {
          a: 1,
          k: [
            { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [280, 200, 0] },
            { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 90, s: [120, 250, 0] },
            { t: 180, s: [320, 180, 0] },
          ],
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [80, 80, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [50, 70] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 3 },
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0.9, 0.3, 0.7] }, // Lighter golden color
              o: { a: 0, k: 100 },
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 0.84, 0, 1] },
              o: { a: 0, k: 50 },
              w: { a: 0, k: 1.5 },
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Paper 3",
      sr: 1,
      ks: {
        o: { a: 0, k: 90 },
        r: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [-5] },
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [30] },
            { t: 180, s: [-15] },
          ],
        },
        p: {
          a: 1,
          k: [
            { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 0, s: [200, 120, 0] },
            { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 90, s: [180, 280, 0] },
            { t: 180, s: [220, 140, 0] },
          ],
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [90, 90, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [45, 60] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 4 },
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0.8, 0.1, 0.9] }, // Rich golden color
              o: { a: 0, k: 100 },
            },
            {
              ty: "st",
              c: { a: 0, k: [1, 0.84, 0, 1] },
              o: { a: 0, k: 70 },
              w: { a: 0, k: 1 },
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 180,
      st: 0,
    },
  ],
}

export default function HomePage() {
  const { isDark, toggleTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const themeClasses = isDark ? "bg-black" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div
            className={`absolute top-20 left-20 w-72 h-72 ${isDark ? "bg-yellow-400/10" : "bg-gray-200/50"} rounded-full blur-3xl`}
          />
          <div
            className={`absolute bottom-20 right-20 w-96 h-96 ${isDark ? "bg-yellow-400/5" : "bg-gray-300/30"} rounded-full blur-3xl`}
          />

          {/* Decorative curved lines */}
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20"
            viewBox="0 0 800 600"
          >
            <path
              d="M100 300 Q400 100 700 300"
              stroke={isDark ? "#FFD700" : "#D1D5DB"}
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M100 400 Q400 200 700 400"
              stroke={isDark ? "#FFD700" : "#D1D5DB"}
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </svg>
        </motion.div>

        <div className="container mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Lottie animationData={flyingPapersAnimation} className="w-40 h-40 mx-auto mb-8" loop={true} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className={`text-6xl md:text-8xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Hello I'm
            </h1>
            <h2 className={`text-4xl md:text-6xl font-bold ${isDark ? "text-yellow-400" : "text-gray-800"} mb-6`}>
              Natasha M Mubaiwa
            </h2>
            <div className={`text-2xl md:text-3xl ${isDark ? "text-yellow-400" : "text-gray-700"} h-16`}>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Graphic Designer",
                  2000,
                  "Digital Marketer",
                  2000,
                  "Scratch Instructor",
                  2000,
                  "Creative Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"} mb-8 max-w-2xl mx-auto`}
          >
            I'm a digital marketer & social media consultant based in Harare Zimbabwe. Crafting digital experiences that
            blend beautiful design with powerful functionality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/resume">
              <Button
                size="lg"
                className={`${isDark ? "bg-yellow-400 hover:bg-yellow-500 text-black" : "bg-gray-900 hover:bg-gray-800 text-white"} px-8 font-semibold`}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className={`${isDark ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400/10" : "border-gray-900 text-gray-900 hover:bg-gray-100"} bg-transparent`}
              >
                Hire Me
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <Button
              variant="ghost"
              size="icon"
              className={`${isDark ? "text-gray-400 hover:text-yellow-400" : "text-gray-500 hover:text-gray-900"}`}
              onClick={() => window.open("https://github.com/Natasha-M-M", "_blank")}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`${isDark ? "text-gray-400 hover:text-yellow-400" : "text-gray-500 hover:text-gray-900"}`}
              onClick={() => window.open("https://www.linkedin.com/in/natasha-mubaiwa-420b10347", "_blank")}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`${isDark ? "text-gray-400 hover:text-yellow-400" : "text-gray-500 hover:text-gray-900"}`}
              onClick={() => window.open("mailto:natamunamubaiwa@gmail.com", "_blank")}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer isDark={isDark} />
    </div>
  )
}
