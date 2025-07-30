"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Play } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Footer from "@/components/Footer"
import { useTheme } from "@/app/context/theme-context"

export default function ProjectsClient() {
  const { isDark, toggleTheme } = useTheme()
  const [activeCategory, setActiveCategory] = useState("all")

  const themeClasses = isDark ? "bg-black" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"

  const projectCategories = [
    { id: "all", label: "All Projects" },
    { id: "software-development", label: "Software Development" },
    { id: "graphic-design", label: "Graphic Design" },
    { id: "digital-marketing", label: "Digital Marketing" },
    { id: "scratch", label: "Scratch Programming" },
  ]

  const projects = [
    // Graphic Design Projects
    {
      id: 1,
      title: "LiliRose Lounge - Nail Salon Flyer",
      description:
        "Promotional flyer design for LiliRose Lounge nail salon featuring their nail services including manicure, acrylic, and gel treatments. The design uses a striking black background with vibrant pink accents and showcases professional nail art examples.",
      category: "graphic-design",
      tech: ["Canva", "Flyer Design", "Beauty Marketing", "Brand Promotion"],
      image: "/images/lilirose-nails-flyer.jpeg",
      fallbackImage: "/images/lilirose-nails-flyer.jpeg",
      canvaLink:
        "https://www.canva.com/design/DAGkyJ0Ld0k/5W204566cO73QpSRsMOuZA/edit?utm_content=DAGkyJ0Ld0k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      id: 2,
      title: "Photography Service Flyer",
      description:
        "Professional photography service promotional flyer for Trevour Picturers, featuring elegant black and white portrait photography with bold typography and contact information for Zimbabwe-based photography sessions.",
      category: "graphic-design",
      tech: ["Adobe Photoshop", "Canva", "Typography", "Layout Design"],
      image: "/images/trevour-picturers-flyer.jpg",
      fallbackImage: "/images/trevour-picturers-flyer.jpg",
      canvaLink:
        "https://www.canva.com/design/DAGj79gH5ic/N-IKcDKXYSiL41e_Q0Pjcw/edit?utm_content=DAGj79gH5ic&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      id: 3,
      title: "Tasha's Eggs - Product Flyer",
      description:
        "Professional product marketing flyer for Tasha's Eggs business, featuring warm brown branding, product imagery, and clear call-to-action for egg sales with contact information and ordering details.",
      category: "graphic-design",
      tech: ["Canva", "Product Photography", "Brand Design", "Marketing"],
      image: "/images/tashas-eggs-flyer.jpg",
      fallbackImage: "/images/tashas-eggs-flyer.jpg",
      canvaLink:
        "https://www.canva.com/design/DAGkVGUlkxc/x4Lldm5Mrgd5_d4ZXcZjLw/edit?utm_content=DAGkVGUlkxc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    // Digital Marketing Projects
    {
      id: 4,
      title: "NK Jewels Brand Identity & Logo Design",
      description:
        "Professional brand identity design for NK Jewels featuring a minimalist logo with elegant jewelry display bust and the tagline 'Gifts of Grace and Glamour'. Created clean, sophisticated branding that reflects the luxury jewelry brand's values and aesthetic appeal.",
      category: "digital-marketing",
      tech: ["Logo Design", "Brand Identity", "Typography", "Minimalist Design"],
      image: "/images/nk-jewels-logo.jpeg",
      fallbackImage: "/images/nk-jewels-logo.jpeg",
      case_study: "#",
      results: "#",
      instagramLink: "https://www.instagram.com/nkjewels_zw/",
    },
    {
      id: 5,
      title: "NK Jewels Digital Marketing Campaign",
      description:
        "Comprehensive digital marketing campaign for NK Jewels featuring luxury jewelry promotion, gift-themed visuals, and strategic brand positioning. Created engaging promotional materials that enhanced brand visibility and drove customer engagement through targeted marketing efforts.",
      category: "digital-marketing",
      tech: ["Digital Marketing", "Brand Strategy", "Visual Design", "Campaign Management"],
      image: "/images/nk-jewels-campaign-updated.png",
      fallbackImage: "/images/nk-jewels-campaign-updated.png",
      canvaLink:
        "https://www.canva.com/design/DAGmSdakg_A/Nf9pdDW3kY-qGwxKrJjZAg/edit?utm_content=DAGmSdakg_A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      case_study: "#",
      results: "#",
    },
    {
      id: 6,
      title: "NK Jewels Social Media Campaign",
      description:
        "Social media marketing campaign for NK Jewels showcasing luxury jewelry pieces with elegant styling and professional photography. Created engaging content that highlights the brand's premium quality and sophisticated aesthetic for social media platforms.",
      category: "digital-marketing",
      tech: ["Social Media Marketing", "Content Creation", "Photography", "Brand Strategy"],
      image: "/images/nkjewels-social-campaign.jpg",
      fallbackImage: "/images/nkjewels-social-campaign.jpg",
      case_study: "#",
      results: "#",
      instagramLink: "https://www.instagram.com/nkjewels_zw/",
    },
    // Software Development Projects
    {
      id: 8,
      title: "My Moon - Women's Health App",
      description:
        "A comprehensive women's health and wellness mobile application featuring period tracking, mood monitoring, and personalized health insights with an intuitive and caring user interface.",
      category: "software-development",
      tech: ["React Native", "Node.js", "MongoDB", "Health APIs"],
      image: "/images/my-moon-app.jpg",
      fallbackImage: "/images/my-moon-app.jpg",
      github: "#",
      live: "#",
    },
    {
      id: 9,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.",
      category: "software-development",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      image: "/placeholder.svg?height=600&width=400&text=E-Commerce+Platform",
      fallbackImage: "/placeholder.svg?height=600&width=400&text=E-Commerce+Platform",
      github: "#",
      live: "#",
    },
    // Scratch Programming Projects
    {
      id: 10,
      title: "Interactive Scratch Programming",
      description:
        "Teaching young students interactive programming concepts through Scratch. This hands-on approach helps children learn coding fundamentals while creating engaging stories and games in a supportive learning environment. Students develop logical thinking and problem-solving skills through visual programming.",
      category: "scratch",
      tech: ["Scratch 3.0", "Game Design", "Educational Content", "Interactive Media"],
      image: "/images/scratch-teaching.jpg",
      fallbackImage: "/images/scratch-teaching.jpg",
      scratchLink: "https://scratch.mit.edu/projects/1098088088/",
      linkedinLink:
        "https://www.linkedin.com/posts/natasha-mubaiwa-420b10347_funwithcode-scratchkids-happycoders-activity-7343552151371104256-5QO-?utm_source=social_share_send&utm_medium=android_app",
      videoLink: "https://youtu.be/dQw4w9WgXcQ",
    },
    {
      id: 11,
      title: "Scratch Programming Projects",
      description:
        "Collection of educational Scratch programming projects designed to teach children coding fundamentals through interactive games and animations. Features the official Scratch logo and represents various educational programming initiatives.",
      category: "scratch",
      tech: ["Scratch 3.0", "Educational Games", "Animation", "Interactive Learning"],
      image: "/images/scratch-logo.png",
      fallbackImage: "/images/scratch-logo.png",
      scratchLink: "https://scratch.mit.edu/projects/1098088088/",
      linkedinLink:
        "https://www.linkedin.com/posts/natasha-mubaiwa-420b10347_funwithcode-scratchkids-happycoders-activity-7343552151371104256-5QO-?utm_source=social_share_send&utm_medium=android_app",
      videoLink: "#",
    },
  ]

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const handleProjectClick = (project: any) => {
    if (project.linkedinLink && project.category === "scratch" && (project.id === 10 || project.id === 11)) {
      window.open(project.linkedinLink, "_blank")
    } else if (project.videoLink && project.videoLink !== "#") {
      window.open(project.videoLink, "_blank")
    }
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      {/* Navigation removed */}

      {/* Projects Section */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-6`}>
              My Work Portfolio
            </h1>
            <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto mb-8`}>
              Explore my diverse portfolio spanning graphic design, digital marketing, software development, and
              educational programming.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {projectCategories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`${
                    activeCategory === category.id
                      ? isDark
                        ? "bg-yellow-400 text-black hover:bg-yellow-500"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                      : isDark
                        ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
                        : "border-gray-900 text-gray-900 hover:bg-gray-100"
                  } transition-all duration-300`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group h-full"
              >
                <Card
                  className={`${isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"} overflow-hidden hover:border-yellow-400/50 transition-all duration-300 h-full flex flex-col`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      project.category === "digital-marketing"
                        ? "h-[400px]"
                        : project.category === "scratch"
                          ? "h-[500px]"
                          : "h-[600px]"
                    } bg-gradient-to-br from-gray-50/5 via-transparent to-gray-50/5 cursor-pointer flex items-center justify-center`}
                    onClick={() => handleProjectClick(project)}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={
                        project.category === "digital-marketing" ? 400 : project.category === "scratch" ? 500 : 600
                      }
                      className={`w-full h-full ${
                        project.category === "digital-marketing" || project.category === "scratch"
                          ? "object-contain"
                          : "object-cover"
                      } group-hover:scale-105 transition-transform duration-300`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = project.fallbackImage
                      }}
                      priority={index < 6} // Prioritize loading first 6 images
                    />
                    <div
                      className={`absolute inset-0 ${
                        isDark
                          ? "bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/20"
                          : "bg-gradient-to-t from-white/60 via-transparent to-white/20"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* Play button overlay for video projects */}
                    {project.videoLink && project.videoLink !== "#" && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-yellow-400 rounded-full p-4 shadow-lg">
                          <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                        </div>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${
                          project.category === "graphic-design"
                            ? "bg-purple-500/90 text-white"
                            : project.category === "digital-marketing"
                              ? "bg-green-500/90 text-white"
                              : project.category === "software-development"
                                ? "bg-blue-500/90 text-white"
                                : "bg-orange-500/90 text-white"
                        }`}
                      >
                        {project.category === "graphic-design" && "Design"}
                        {project.category === "digital-marketing" && "Marketing"}
                        {project.category === "software-development" && "Development"}
                        {project.category === "scratch" && "Scratch"}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>
                      {project.title}
                    </h3>
                    <p className={`${isDark ? "text-gray-300" : "text-gray-600"} mb-4 text-sm flex-1`}>
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`${isDark ? "bg-yellow-400/20 text-yellow-400" : "bg-gray-100 text-gray-700"} text-xs`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 mt-auto">
                      {/* Software Development Buttons */}
                      {project.category === "software-development" && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            className={`${isDark ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400/10" : "border-gray-900 text-gray-900 hover:bg-gray-100"} bg-transparent flex-1`}
                            onClick={() => project.github && window.open(project.github, "_blank")}
                          >
                            <Github className="mr-1 h-3 w-3" />
                            Code
                          </Button>
                          <Button
                            size="sm"
                            className={`${isDark ? "bg-yellow-400 hover:bg-yellow-500 text-black" : "bg-gray-900 hover:bg-gray-800 text-white"} flex-1`}
                            onClick={() => project.live && window.open(project.live, "_blank")}
                          >
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Live
                          </Button>
                        </>
                      )}

                      {/* Graphic Design Buttons */}
                      {project.category === "graphic-design" && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            className={`${isDark ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400/10" : "border-gray-900 text-gray-900 hover:bg-gray-100"} bg-transparent flex-1`}
                            onClick={() => project.canvaLink && window.open(project.canvaLink, "_blank")}
                          >
                            View on Canva
                          </Button>
                          <Button
                            size="sm"
                            className={`${isDark ? "bg-yellow-400 hover:bg-yellow-500 text-black" : "bg-gray-900 hover:bg-gray-800 text-white"} flex-1`}
                          >
                            Portfolio
                          </Button>
                        </>
                      )}

                      {/* Digital Marketing Buttons */}
                      {project.category === "digital-marketing" && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            className={`${isDark ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400/10" : "border-gray-900 text-gray-900 hover:bg-gray-100"} bg-transparent flex-1`}
                            onClick={() =>
                              (project.canvaLink || project.instagramLink) &&
                              window.open(project.canvaLink || project.instagramLink, "_blank")
                            }
                          >
                            {project.canvaLink ? "View on Canva" : "View Campaign"}
                          </Button>
                          <Button
                            size="sm"
                            className={`${isDark ? "bg-yellow-400 hover:bg-yellow-500 text-black" : "bg-gray-900 hover:bg-gray-800 text-white"} flex-1`}
                            onClick={() => project.results && window.open(project.results, "_blank")}
                          >
                            Results
                          </Button>
                        </>
                      )}

                      {/* Scratch Programming Buttons */}
                      {project.category === "scratch" && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            className={`${isDark ? "border-yellow-400 text-yellow-400 hover:bg-yellow-400/10" : "border-gray-900 text-gray-900 hover:bg-gray-100"} bg-transparent flex-1`}
                            onClick={() => project.scratchLink && window.open(project.scratchLink, "_blank")}
                          >
                            View Project
                          </Button>
                          <Button
                            size="sm"
                            className={`${isDark ? "bg-yellow-400 hover:bg-yellow-500 text-black" : "bg-gray-900 hover:bg-gray-800 text-white"} flex-1`}
                            onClick={() => project.linkedinLink && window.open(project.linkedinLink, "_blank")}
                          >
                            Watch Video
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer isDark={isDark} />
    </div>
  )
}
