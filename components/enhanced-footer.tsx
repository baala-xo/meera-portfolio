"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Github, Linkedin, Mail, Twitter, Send, ArrowUp, MapPin, Phone, Calendar, CheckCircle } from "lucide-react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { ThemePreview } from "@/components/theme-preview"

// Form validation schema
const subscribeSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export default function EnhancedFooter() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Initialize form
  const form = useForm<z.infer<typeof subscribeSchema>>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  })

  // Handle form submission
  function onSubmit(values: z.infer<typeof subscribeSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()

      toast({
        title: "Subscribed!",
        description: "You've been added to the newsletter.",
        action: (
          <div className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-green-500" />
          </div>
        ),
      })
    }, 1000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-background to-background/80 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="font-bold text-xl mb-4">Meera Arthi Sri</div>
              <p className="text-muted-foreground mb-6">
              Creative UI/UX Designer passionate about crafting intuitive and visually engaging digital experiences.
              </p>

              <div className="flex gap-3">
                
                <SocialButton
                  icon={<Linkedin className="h-5 w-5" />}
                  url="https://www.linkedin.com/in/meera-arthi-sri-49a8b0276"
                  label="LinkedIn"
                />
                <SocialButton
                  icon={<Mail className="h-5 w-5" />}
                  url="mailto:meeraarthisri4@gmail.com"
                  label="Email"
                />
              </div>
            </motion.div>
          </div>

        

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>meeraarthisri4@gmail.com</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>(+91) 6382376240 </span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Coimbatore, India</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Available for projects</span>
                </li>
              </ul>

             
            </motion.div>
          </div>

          
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Meera. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

interface SocialButtonProps {
  icon: React.ReactNode
  url: string
  label: string
}

function SocialButton({ icon, url, label }: SocialButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      asChild
      className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
    >
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
        {icon}
      </a>
    </Button>
  )
}

interface FooterLinkProps {
  href: string
  label: string
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <li>
      <a
        href={href}
        className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-block"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        {label}
      </a>
    </li>
  )
}
