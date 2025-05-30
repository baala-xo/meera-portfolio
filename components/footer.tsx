import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-xl">Meera Arthi Sri</div>
            <div className="text-muted-foreground">UI UX Designer</div>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a></Button>

            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:meeraarthisri4@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Meera. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
