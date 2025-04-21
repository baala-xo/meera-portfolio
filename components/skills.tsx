"use client"

import { useState, useEffect, useRef } from "react"
import {
  Search,
  Laptop,
  Code,
  Cpu,
  Database,
  Cloud,
  BookOpen,
  PenToolIcon as Tool,
  Heart,
  Microscope,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type SkillLevel = "All" | "Expert" | "Advanced" | "Intermediate"

// Skill data
const skillCategories = [
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Machine Learning & AI",
    skills: [
      { name: "Computer Vision", level: "Advanced", color: "blue", years: 3 },
      { name: "Reinforcement Learning", level: "Advanced", color: "blue", years: 3 },
      { name: "MLOps", level: "Intermediate", color: "blue", years: 1.5 },
      { name: "Deep Learning", level: "Expert", color: "green", years: 5 },
      { name: "NLP", level: "Expert", color: "green", years: 4.5 },
      { name: "Voice Cloning", level: "Advanced", color: "blue", years: 2.5 },
      { name: "Generative AI", level: "Advanced", color: "green", years: 3 },
    ],
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Programming & Development",
    skills: [
      { name: "Python", level: "Expert", color: "blue", years: 6 },
      { name: "C++", level: "Advanced", color: "blue", years: 4 },
      { name: "JavaScript/TypeScript", level: "Expert", color: "blue", years: 5 },
      { name: "SQL", level: "Advanced", color: "blue", years: 4 },
      { name: "R", level: "Intermediate", color: "blue", years: 2 },
      { name: "MATLAB", level: "Intermediate", color: "yellow", years: 2 },
      { name: "Julia", level: "Intermediate", color: "yellow", years: 1.5 },
    ],
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "AI Frameworks & Tools",
    skills: [
      { name: "PyTorch", level: "Expert", color: "green", years: 5 },
      { name: "TensorFlow", level: "Expert", color: "green", years: 5 },
      { name: "Scikit-learn", level: "Expert", color: "green", years: 6 },
      { name: "Hugging Face", level: "Advanced", color: "green", years: 3 },
      { name: "CUDA", level: "Advanced", color: "blue", years: 3 },
      { name: "TensorRT", level: "Intermediate", color: "blue", years: 2 },
      { name: "MLflow", level: "Advanced", color: "blue", years: 3 },
    ],
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Science & Analytics",
    skills: [
      { name: "Data Mining", level: "Advanced", color: "blue", years: 4 },
      { name: "Business Intelligence", level: "Intermediate", color: "blue", years: 2 },
      { name: "Big Data Processing", level: "Advanced", color: "blue", years: 3 },
      { name: "Pandas", level: "Expert", color: "blue", years: 5 },
      { name: "Tableau", level: "Intermediate", color: "blue", years: 2 },
      { name: "Data Visualization", level: "Advanced", color: "green", years: 4 },
      { name: "Predictive Modeling", level: "Expert", color: "green", years: 5 },
    ],
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud & Infrastructure",
    skills: [
      { name: "GCP", level: "Advanced", color: "blue", years: 3 },
      { name: "Kubernetes", level: "Advanced", color: "blue", years: 3 },
      { name: "CI/CD", level: "Intermediate", color: "blue", years: 2 },
      { name: "Microservices", level: "Intermediate", color: "blue", years: 2 },
      { name: "DevOps", level: "Intermediate", color: 'blue", years:  color: "blue', years: 2 },
      { name: "DevOps", level: "Intermediate", color: "blue", years: 2 },
      { name: "AWS", level: "Advanced", color: "blue", years: 4 },
      { name: "Docker", level: "Expert", color: "blue", years: 4 },
    ],
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Research & Analysis",
    skills: [
      { name: "Grant Writing", level: "Advanced", color: "blue", years: 3 },
      { name: "Peer Review", level: "Advanced", color: "blue", years: 4 },
      { name: "Research Methods", level: "Expert", color: "green", years: 5 },
      { name: "Experimental Design", level: "Advanced", color: "green", years: 4 },
      { name: "Scientific Writing", level: "Expert", color: "green", years: 5 },
    ],
  },
  {
    icon: <Tool className="h-6 w-6" />,
    title: "Tools & Technologies",
    skills: [
      { name: "SolidWorks", level: "Intermediate", color: "blue", years: 2 },
      { name: "AutoCAD", level: "Intermediate", color: "blue", years: 2 },
      { name: "Arduino", level: "Intermediate", color: "blue", years: 3 },
      { name: "Git/GitHub", level: "Expert", color: "green", years: 5 },
      { name: "Linux/Unix", level: "Advanced", color: "green", years: 4 },
      { name: "Raspberry Pi", level: "Intermediate", color: "green", years: 3 },
    ],
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Soft Skills",
    skills: [
      { name: "Technical Writing", level: "Expert", color: "green", years: 6 },
      { name: "Public Speaking", level: "Advanced", color: "green", years: 4 },
      { name: "Project Management", level: "Advanced", color: "green", years: 5 },
      { name: "Team Leadership", level: "Expert", color: "green", years: 5 },
      { name: "Mentoring", level: "Expert", color: "green", years: 4 },
      { name: "Problem Solving", level: "Expert", color: "green", years: 6 },
      { name: "Critical Thinking", level: "Expert", color: "green", years: 6 },
    ],
  },
  {
    icon: <Microscope className="h-6 w-6" />,
    title: "Physics & Mathematics",
    skills: [
      { name: "Complex Analysis", level: "Advanced", color: "blue", years: 4 },
      { name: "Group Theory", level: "Advanced", color: "blue", years: 3 },
      { name: "Quantum Mechanics", level: "Advanced", color: "blue", years: 4 },
      { name: "Statistical Mechanics", level: "Advanced", color: "blue", years: 4 },
      { name: "Mathematical Physics", level: "Advanced", color: "blue", years: 4 },
      { name: "Differential Equations", level: "Expert", color: "green", years: 5 },
      { name: "Linear Algebra", level: "Expert", color: "green", years: 5 },
    ],
  },
]

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel>("All")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  // Handle keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K or Cmd+K to focus search
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section id="skills" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Technical Skills</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A comprehensive overview of my technical expertise across various domains, from machine learning and AI to
          software development and research.
        </p>
      </motion.div>



    </section>
  )
}
