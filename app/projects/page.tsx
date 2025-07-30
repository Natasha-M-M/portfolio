import type { Metadata } from "next"
import ProjectsClient from "./ProjectsClient"

export const metadata: Metadata = {
  title: "My Projects",
  description:
    "Explore my diverse portfolio spanning graphic design, digital marketing, software development, and educational programming.",
}

export default function ProjectsPage() {
  return <ProjectsClient />
}
