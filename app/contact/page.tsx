import type { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Natasha M Mubaiwa for your next project. Available for freelance work, collaborations, and consultations.",
}

export default function ContactPage() {
  return <ContactClient />
}
