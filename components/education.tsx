import type React from "react"
import { BookOpen, GraduationCap, Trophy, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Education() {
  return (
    <section id="education" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

      <Card className="bg-gradient-to-r from-indigo-950 to-purple-950 border-none m-2">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            <CardTitle>Master of Science in Information Technology</CardTitle>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-muted-foreground">Hindusthan College of arts & science</div>
            <div>2023 - 2025</div>
          </div>
          <div className="text-muted-foreground">Coimbatore,India</div>
          <div className="text-muted-foreground">GPA: 7.8</div>
          
        </CardHeader>
        </Card>
        
      <Card className="bg-gradient-to-r from-indigo-950 to-purple-950 border-none m-2">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            <CardTitle>Bachelor of Science in Computer Science</CardTitle>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="text-muted-foreground">SDNB VAISHNAV college for women</div>
            <div>2020 - 2023</div>
          </div>
          <div className="text-muted-foreground">Chennai,India</div>
          <div className="text-muted-foreground">GPA: 7.4</div>
          
        </CardHeader>
        </Card>
    </section>
  )
}

interface CourseItemProps {
  name: string
  grade: string
}

function CourseItem({ name, grade }: CourseItemProps) {
  return (
    <div className="flex justify-between items-center">
      <div>{name}</div>
      <div className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
        {grade}
      </div>
    </div>
  )
}

interface AchievementItemProps {
  icon: React.ReactNode
  title: string
  description: string
}

function AchievementItem({ icon, title, description }: AchievementItemProps) {
  return (
    <div className="bg-black/20 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h4 className="font-medium">{title}</h4>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

interface SkillProgressItemProps {
  name: string
  value: number
}

function SkillProgressItem({ name, value }: SkillProgressItemProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <div>{name}</div>
        <div>{value}%</div>
      </div>
      <Progress value={value} className="h-2" />
    </div>
  )
}
