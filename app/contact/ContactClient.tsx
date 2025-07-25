"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Send, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import { useState, useTransition } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { useTheme } from "@/hooks/useTheme"
import { sendContactEmail } from "./actions"

export default function ContactClient() {
  const { isDark, toggleTheme } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setResult(null)

    startTransition(async () => {
      const formDataObj = new FormData()
      formDataObj.append("name", formData.name)
      formDataObj.append("email", formData.email)
      formDataObj.append("subject", formData.subject)
      formDataObj.append("message", formData.message)

      const response = await sendContactEmail(formDataObj)
      setResult(response)

      if (response.success) {
        setFormData({ name: "", email: "", subject: "", message: "" })
      }
    })
  }

  const themeClasses = isDark ? "bg-black" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="py-20 pt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-6`}>
              Let's Work Together
            </h1>
            <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"} mb-8 max-w-2xl mx-auto`}>
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className={`${isDark ? "bg-gray-900/50 border-gray-800" : "bg-white border-gray-200"}`}>
                <CardHeader>
                  <CardTitle className={`${isDark ? "text-white" : "text-gray-900"}`}>Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Success/Error Messages */}
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                        result.success
                          ? isDark
                            ? "bg-green-900/20 border border-green-700 text-green-400"
                            : "bg-green-50 border border-green-200 text-green-700"
                          : isDark
                            ? "bg-red-900/20 border border-red-700 text-red-400"
                            : "bg-red-50 border border-red-200 text-red-700"
                      }`}
                    >
                      {result.success ? (
                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      )}
                      <span className="text-sm">{result.success ? result.message : result.error}</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                        >
                          Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          disabled={isPending}
                          className={`${isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300"}`}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                        >
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isPending}
                          className={`${isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300"}`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        Subject
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        disabled={isPending}
                        className={`${isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300"}`}
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isPending}
                        rows={6}
                        className={`${isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300"}`}
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isPending}
                      className={`w-full ${isDark ? "bg-yellow-400 hover:bg-yellow-500 text-black" : "bg-gray-900 hover:bg-gray-800 text-white"} ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {isPending ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-current mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <Card className={`${isDark ? "bg-gray-900/50 border-gray-800" : "bg-white border-gray-200"}`}>
                <CardHeader>
                  <CardTitle className={`${isDark ? "text-white" : "text-gray-900"}`}>Get in touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className={`h-5 w-5 ${isDark ? "text-yellow-400" : "text-gray-600"}`} />
                    <span className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>natamunamubaiwa@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className={`h-5 w-5 ${isDark ? "text-yellow-400" : "text-gray-600"}`} />
                    <span className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>Harare, Zimbabwe</span>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className={`${isDark ? "bg-gray-900/50 border-gray-800" : "bg-white border-gray-200"}`}>
                <CardHeader>
                  <CardTitle className={`${isDark ? "text-white" : "text-gray-900"}`}>Follow me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`${isDark ? "text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"}`}
                      onClick={() => window.open("https://github.com/Natasha-M-M", "_blank")}
                    >
                      <Github className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`${isDark ? "text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"}`}
                      onClick={() => window.open("https://www.linkedin.com/in/natasha-mubaiwa-420b10347", "_blank")}
                    >
                      <Linkedin className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`${isDark ? "text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"}`}
                      onClick={() => window.open("mailto:natamunamubaiwa@gmail.com", "_blank")}
                    >
                      <Mail className="h-6 w-6" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Button */}
              <Button
                size="lg"
                className={`w-full ${isDark ? "bg-yellow-400 hover:bg-yellow-500 text-black" : "bg-gray-900 hover:bg-gray-800 text-white"}`}
                onClick={() => window.open("mailto:natamunamubaiwa@gmail.com", "_blank")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Quick Email
              </Button>

              {/* Alternative Contact Methods */}
              <Card className={`${isDark ? "bg-gray-900/50 border-gray-800" : "bg-white border-gray-200"}`}>
                <CardHeader>
                  <CardTitle className={`${isDark ? "text-white" : "text-gray-900"}`}>Alternative Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"} mb-4`}>
                    If the form above doesn't work, you can also reach me directly:
                  </p>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`w-full justify-start ${isDark ? "border-gray-700 text-gray-300 hover:bg-gray-800" : "border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                      onClick={() =>
                        window.open(
                          "mailto:natamunamubaiwa@gmail.com?subject=Portfolio Contact&body=Hi Natasha,%0D%0A%0D%0AI'm interested in discussing a project with you.%0D%0A%0D%0ABest regards,",
                          "_blank",
                        )
                      }
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Send Direct Email
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`w-full justify-start ${isDark ? "border-gray-700 text-gray-300 hover:bg-gray-800" : "border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                      onClick={() => window.open("https://www.linkedin.com/in/natasha-mubaiwa-420b10347", "_blank")}
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      Message on LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer isDark={isDark} />
    </div>
  )
}
