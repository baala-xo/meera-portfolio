import { Suspense } from "react"
import RedesignedHero from "@/components/redesigned-hero"
import AboutSection from "@/components/about-section"
import SkillsSectionWrapper from "@/components/skills-section-wrapper"
import RedesignedExperience from "@/components/redesigned-experience"
import RedesignedProjects from "@/components/redesigned-projects"
import CaseStudies from "@/components/case-studies"
import Education from "@/components/education"
import Publications from "@/components/publications"
import Testimonials from "@/components/testimonials"
import BlogPreview from "@/components/blog-preview"
import ContactForm from "@/components/contact-form"
import EnhancedFooter from "@/components/enhanced-footer"
import FloatingNav from "@/components/floating-nav"
import ScrollProgress from "@/components/scroll-progress"
import { FloatingThemeSwitcher } from "@/components/floating-theme-switcher"
import { ErrorBoundary } from "@/components/error-boundary"
import { SectionFallback } from "@/components/section-fallback"
import { Loader2 } from "lucide-react"

// Simple loading component
function LoadingSection({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
      <p className="text-muted-foreground">Loading {name} section...</p>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <ScrollProgress />
      

      <ErrorBoundary fallback={<SectionFallback title="Hero" />}>
        <Suspense fallback={<LoadingSection name="Hero" />}>
          <RedesignedHero />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<SectionFallback title="About" />}>
        <Suspense fallback={<LoadingSection name="About" />}>
          <AboutSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<SectionFallback title="Skills" />}>
        <SkillsSectionWrapper />
      </ErrorBoundary>

      

      <ErrorBoundary fallback={<SectionFallback title="Projects" />}>
        <Suspense fallback={<LoadingSection name="Projects" />}>
          <RedesignedProjects />
        </Suspense>
      </ErrorBoundary>

      
      <ErrorBoundary fallback={<SectionFallback title="Education" />}>
        <Suspense fallback={<LoadingSection name="Education" />}>
          <Education />
        </Suspense>
      </ErrorBoundary>

      
      
      <ErrorBoundary fallback={<SectionFallback title="Contact" />}>
        <Suspense fallback={<LoadingSection name="Contact" />}>
          <ContactForm />
        </Suspense>
      </ErrorBoundary>

      <EnhancedFooter />
    </main>
  )
}
