import type { Metadata } from "next"
import AboutClient from "./AboutClient"

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Natasha M Mubaiwa - Full Stack Developer, Graphic Designer, Digital Marketer, and Scratch Instructor with 5+ years of experience.",
}

export default function AboutPage() {
  return <AboutClient />
}
