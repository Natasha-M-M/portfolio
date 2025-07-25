import type { Metadata } from "next"
import ResumePageClient from "./ResumePageClient"

export const metadata: Metadata = {
  title: "My Resume",
  description:
    "Download Natasha M Mubaiwa's professional resume - Full Stack Developer, Graphic Designer, Digital Marketer, and Scratch Instructor.",
}

export default function ResumePage() {
  return <ResumePageClient />
}
