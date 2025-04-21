"use client"
import { SectionContainer, SectionHeader } from "@/components/ui/section-container"
import { ScrollReveal, StaggeredContainer, StaggerItem } from "@/components/ui/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Award, Briefcase, GraduationCap, Heart, ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <SectionContainer id="about" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />

      <SectionHeader
        title="About Me"
        subtitle="Get to know more about my background."
      />

      
          <StaggeredContainer>
            <StaggerItem>
              <h3 className="text-2xl font-bold mb-4">UI/UX Designer</h3>
            </StaggerItem>

            <StaggerItem>
              <p className="text-muted-foreground mb-6">
              I am Meera Arthi Sri, a passionate UI/UX Designer with a strong foundation in web development and a creative eye for detail. I hold a Bachelor’s degree in Computer Science and am currently pursuing my Master’s in Information Technology at Hindusthan College of Arts & Science. My experience includes an enriching internship at Clarozon Technologies, where I deepened my skills in UI/UX design by developing a coffee application project.

Equipped with technical proficiency in tools such as Figma, Photoshop, and Canva, as well as foundational programming knowledge in Java and Python, I strive to create user-centric designs that blend functionality with aesthetic appeal. Beyond academics, I am a state-level Table Tennis player, a proactive leader, and someone who finds joy in sports and gardening.

I am committed to continuous learning and growth, aiming to design digital experiences that are intuitive, meaningful, and impactful.</p>
            </StaggerItem>

            <StaggerItem>
              <p className="text-muted-foreground mb-6">
              I strive to create user-centric designs that blend functionality with aesthetic appeal. Beyond academics, I am a state-level Table Tennis player, a proactive leader, and someone who finds joy in sports and gardening.

I am committed to continuous learning and growth, aiming to design digital experiences that are intuitive, meaningful, and impactful.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="px-3 py-1.5 bg-blue-500/20 text-blue-500 border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                  <Briefcase className="h-3.5 w-3.5 mr-1" />
                  Intuitive
                </Badge>
                <Badge className="px-3 py-1.5 bg-green-500/20 text-green-500 border-green-500/30 hover:bg-green-500/30 transition-colors">
                  <Heart className="h-3.5 w-3.5 mr-1" />
                  Impactfull
                </Badge>
              </div>
            </StaggerItem>

            <StaggerItem>
 
  
<Button className="gap-2 group shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >         <a
              href="/Resume.pdf"
              target="_blank"
              download="Meera's Resume"
              rel="noopener noreferrer"
            >
              Resume
            </a>
              </Button>
              <Button variant="outline" className="ml-3 gap-2 group" asChild>
                <a
                  href="https://www.linkedin.com/in/meera-arthi-sri-49a8b0276"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View LinkedIn</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </StaggerItem>
          </StaggeredContainer>
        
    </SectionContainer>
  )
}
