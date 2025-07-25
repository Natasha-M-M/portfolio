import type { Metadata } from "next"
import ProjectsClientPage from "./ProjectsClientPage"

export const metadata: Metadata = {
  title: "My Projects",
  description:
    "Explore my diverse portfolio spanning graphic design, digital marketing, software development, and educational programming.",
}

export default function ProjectsPage() {
  return <ProjectsClientPage />
}
