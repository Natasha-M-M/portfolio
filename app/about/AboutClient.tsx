"use client"

import { motion } from "framer-motion"
import Lottie from "lottie-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Smartphone, Users, Award, Calendar, MapPin, Mail } from "lucide-react"
import Image from "next/image"
import Footer from "@/components/Footer"
import { useTheme } from "@/app/context/theme-context"

const skillsAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 90,
  w: 200,
  h: 200,
  nm: "Skills Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Gear",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
            { t: 90, s: [180] },
          ],
        },
        p: { a: 0, k: [100, 100, 0] },
        s: { a: 0, k: [80, 80, 100] },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [60, 60] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 8 },
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0.84, 0, 1] },
              o: { a: 0, k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
  ],
}

export default function AboutClient() {
  const { isDark } = useTheme()

  const themeClasses = isDark ? "bg-black" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"

  const skills = [
    { name: "Frontend Development", icon: Code, level: 95, description: "React, Next.js, TailwindCSS" },
    { name: "Graphic Design", icon: Palette, level: 88, description: "Figma, Canva" },
    { name: "Digital Marketer", icon: Smartphone, level: 82, description: "Social media Platforms" },
    { name: "Scratch Programming", icon: Code, level: 90, description: "Educational Programming" },
  ]

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Uncommon.org",
      period: "2025 - Present",
      description: "Developing web applications and mobile solutions for various clients across different industries.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Supabase"],
    },
    {
      title: "Digital Marketing Specialist",
      company: "Various Clients eg NK jewels",
      period: "2025 - Present",
      description: "Managing social media campaigns and creating engaging content for brands and businesses.",
      technologies: ["Instagram Marketing", "Content Creation", "Analytics", "Brand Strategy"],
    },
    {
      title: "Graphic Designer",
      company: "TREVOURPhotography",
      period: "2025 - Present",
      description: "Creating visual designs for marketing materials, branding, and digital content.",
      technologies: ["Figma", "Canva", "Typography", "Brand Design"],
    },
    {
      title: "Scratch Programming Instructor",
      company: "Educational Programs",
      period: "2025 - Present",
      description: "Teaching young students programming fundamentals through interactive Scratch projects.",
      technologies: ["Scratch 3.0", "Educational Content", "Game Design", "Interactive Media"],
    },
  ]

  const personalInfo = [
    { icon: MapPin, label: "Location", value: "Harare, Zimbabwe" },
    { icon: Mail, label: "Email", value: "natamunamubaiwa@gmail.com" },
    { icon: Calendar, label: "Experience", value: "7+months" },
    { icon: Users, label: "Projects Completed", value: "10+" },
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-8">
              <Image
                src="/images/natasha-business-portrait.jpg"
                alt="Natasha M Mubaiwa - Professional Developer & Designer"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6 border-4 border-yellow-400 object-cover"
              />
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-6`}>
              About Me
            </h1>
            <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto mb-8`}>
              I am a creative and detail-oriented web developer with a strong passion for solving problems through
              clean, user-focused design and code. With hands-on experience in tools like Next.js, Tailwind CSS, and
              modern frontend frameworks, I enjoy building websites and web apps that are both functional and beautiful.
              I'm constantly learning and exploring new technologies to stay current and continuously improve my skills.
              Whether working independently or in a team, I value clarity, innovation, and impact.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <info.icon className={`h-6 w-6 ${isDark ? "text-yellow-400" : "text-gray-700"} mx-auto mb-2`} />
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"} mb-1`}>{info.label}</p>
                  <p className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{info.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-20 ${isDark ? "bg-gray-900/50" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-6`}>
              My Skills
            </h2>
            <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}>
              Here are the key skills and technologies I work with to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  className={`${isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"} hover:border-yellow-400/50 transition-all duration-300 h-full`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <Lottie animationData={skillsAnimation} className="w-16 h-16 mx-auto" loop={true} />
                    </div>
                    <skill.icon className={`h-8 w-8 ${isDark ? "text-yellow-400" : "text-gray-700"} mx-auto mb-4`} />
                    <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>
                      {skill.name}
                    </h3>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"} mb-4`}>{skill.description}</p>
                    <div className={`w-full ${isDark ? "bg-gray-700" : "bg-gray-200"} rounded-full h-2 mb-2`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`${isDark ? "bg-yellow-400" : "bg-gray-900"} h-2 rounded-full`}
                      />
                    </div>
                    <span className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>{skill.level}%</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-6`}>
              Experience
            </h2>
            <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}>
              My professional journey and the roles that have shaped my expertise.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="mb-8"
              >
                <Card
                  className={`${isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"} hover:border-yellow-400/50 transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-1`}>
                          {exp.title}
                        </h3>
                        <p className={`text-lg ${isDark ? "text-yellow-400" : "text-gray-700"} mb-2`}>{exp.company}</p>
                      </div>
                      <Badge
                        className={`${isDark ? "bg-yellow-400/20 text-yellow-400" : "bg-gray-100 text-gray-700"} w-fit`}
                      >
                        {exp.period}
                      </Badge>
                    </div>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"} mb-4`}>{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"} text-xs`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className={`py-20 ${isDark ? "bg-gray-900/50" : "bg-gray-50"}`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-6`}>
              Beyond Work
            </h2>
            <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"} mb-8`}>
              When I'm not coding or designing, I enjoy exploring new technologies, teaching programming to young minds,
              and contributing to the local tech community in Zimbabwe. I believe in the power of technology to
              transform lives and am passionate about making programming accessible to everyone.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className={`${isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"}`}>
                <CardContent className="p-6 text-center">
                  <Award className={`h-12 w-12 ${isDark ? "text-yellow-400" : "text-gray-700"} mx-auto mb-4`} />
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>
                    Continuous Learning
                  </h3>
                  <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm`}>
                    Always staying updated with the latest technologies and best practices in development and design.
                  </p>
                </CardContent>
              </Card>
              <Card className={`${isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"}`}>
                <CardContent className="p-6 text-center">
                  <Users className={`h-12 w-12 ${isDark ? "text-yellow-400" : "text-gray-700"} mx-auto mb-4`} />
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>
                    Community Impact
                  </h3>
                  <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm`}>
                    Teaching programming to children and contributing to the growth of the tech community in Zimbabwe.
                  </p>
                </CardContent>
              </Card>
              <Card className={`${isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"}`}>
                <CardContent className="p-6 text-center">
                  <Code className={`h-12 w-12 ${isDark ? "text-yellow-400" : "text-gray-700"} mx-auto mb-4`} />
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>
                    Innovation
                  </h3>
                  <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm`}>
                    Exploring new ways to solve problems and create meaningful digital experiences for users.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
