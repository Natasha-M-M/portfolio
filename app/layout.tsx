import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Natasha M Mubaiwa - Full Stack Developer & Designer",
    template: "%s | Natasha M Mubaiwa",
  },
  description:
    "Full Stack Developer, Graphic Designer, Digital Marketer, and Scratch Instructor based in Harare, Zimbabwe. Creating digital experiences that blend beautiful design with powerful functionality.",
  keywords: [
    "Full Stack Developer",
    "Graphic Designer",
    "Digital Marketing",
    "Scratch Programming",
    "React",
    "Next.js",
    "Zimbabwe",
  ],
  authors: [{ name: "Natasha M Mubaiwa" }],
  creator: "Natasha M Mubaiwa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://natasha-portfolio.vercel.app",
    title: "Natasha M Mubaiwa - Full Stack Developer & Designer",
    description:
      "Full Stack Developer, Graphic Designer, Digital Marketer, and Scratch Instructor based in Harare, Zimbabwe.",
    siteName: "Natasha M Mubaiwa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natasha M Mubaiwa - Full Stack Developer & Designer",
    description:
      "Full Stack Developer, Graphic Designer, Digital Marketer, and Scratch Instructor based in Harare, Zimbabwe.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
