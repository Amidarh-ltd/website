import { ArrowRight } from "lucide-react"
import DocIcon from "@/components/icons/doc-icon"
import WikiIcon from "@/components/icons/wiki-icon"
import ProjectIcon from "@/components/icons/project-icon"
import NotionAiIcon from "@/components/icons/notion-ai-icon"
import CalendarIcon from "@/components/icons/calendar-icon"
import GoalIcon from "@/components/icons/goal-icon"
import SiteIcon from "@/components/icons/site-icon"
import TemplateIcon from "@/components/icons/template-icon"
import { Sparkle } from "lucide-react"

// Glassmorphism utility classes for mobile
const glassClasses =
  "bg-white/30 backdrop-blur-md border border-white/30 shadow-lg";

export default function Solution() {
  return (
    <main className="max-w-[1400px] mx-auto px-4 lg:py-40 py-20 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">
        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-16">
          Everything you need
          <br className="hidden lg:flex" />
          {" "} to get the best
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className={`flex flex-col items-start border lg:border-0 border-gray-300 p-4 rounded-md transition-all
            sm:bg-transparent sm:backdrop-blur-none sm:shadow-none
            ${glassClasses} lg:bg-transparent lg:backdrop-blur-none lg:shadow-none`}>
            <div className="h-16 w-16 mb-4 flex items-center">
              <DocIcon />
            </div>
            <h3 className="text-xl font-semibold flex items-center gap-1">
              Note <ArrowRight className="w-4 h-4" />
            </h3>
            <p className="text-gray-600 mt-1">Build any page, communicate any idea.</p>
          </div>

          <div className={`flex flex-col items-start border lg:border-0 border-gray-300 p-4 rounded-md transition-all
            sm:bg-transparent sm:backdrop-blur-none sm:shadow-none
            ${glassClasses} lg:bg-transparent lg:backdrop-blur-none lg:shadow-none`}>
            <div className="h-16 w-16 mb-4 flex items-center">
              <WikiIcon />
            </div>
            <h3 className="text-xl font-semibold flex items-center gap-1">
              Trupper <ArrowRight className="w-4 h-4" />
            </h3>
            <p className="text-gray-600 mt-1">One home base for all your knowledge.</p>
          </div>

          <div className={`flex flex-col items-start border lg:border-0 border-gray-300 p-4 rounded-md transition-all
            sm:bg-transparent sm:backdrop-blur-none sm:shadow-none
            ${glassClasses} lg:bg-transparent lg:backdrop-blur-none lg:shadow-none`}>
            <div className="h-16 w-16 mb-4 flex items-center">
              <ProjectIcon />
            </div>
            <h3 className="text-xl font-semibold flex items-center gap-1">
              CBT exam <ArrowRight className="w-4 h-4" />
            </h3>
            <p className="text-gray-600 mt-1">Manage any project from beginning to end.</p>
          </div>

          <div className={`flex flex-col items-start border lg:border-0 border-gray-300 p-4 rounded-md transition-all
            sm:bg-transparent sm:backdrop-blur-none sm:shadow-none
            ${glassClasses} lg:bg-transparent lg:backdrop-blur-none lg:shadow-none`}>
            <div className="h-16 w-16 mb-4 flex items-center">
              <NotionAiIcon />
            </div>
            <h3 className="text-xl font-semibold flex items-center gap-1">
              Compass AI <ArrowRight className="w-4 h-4" />
            </h3>
            <p className="text-gray-600 mt-1">Finds what you need. Does what you need.</p>
          </div>

          <div className={`flex flex-col items-start border lg:border-0 border-gray-300 p-4 rounded-md transition-all
            sm:bg-transparent sm:backdrop-blur-none sm:shadow-none
            ${glassClasses} lg:bg-transparent lg:backdrop-blur-none lg:shadow-none`}>
            <div className="h-16 w-16 mb-4 flex items-center">
              <Sparkle className="size-16" />
            </div>
            <h3 className="text-xl font-semibold flex items-center gap-1">
              AI Examiner <ArrowRight className="w-4 h-4" />
            </h3>
            <p className="text-gray-600 mt-1">See all your commitments in one place.</p>
          </div>

          <div className={`flex flex-col items-start border lg:border-0 border-gray-300 p-4 rounded-md transition-all
            sm:bg-transparent sm:backdrop-blur-none sm:shadow-none
            ${glassClasses} lg:bg-transparent lg:backdrop-blur-none lg:shadow-none`}>
            <div className="h-16 w-16 mb-4 flex items-center">
              <GoalIcon />
            </div>
            <h3 className="text-xl font-semibold flex items-center gap-1">
              LMS <ArrowRight className="w-4 h-4" />
            </h3>
            <p className="text-gray-600 mt-1">Track progress toward what's most important.</p>
          </div>

          <div className={`flex flex-col items-start border lg:border-0 border-gray-300 p-4 rounded-md transition-all
            sm:bg-transparent sm:backdrop-blur-none sm:shadow-none
            ${glassClasses} lg:bg-transparent lg:backdrop-blur-none lg:shadow-none`}>
            <div className="h-16 w-16 mb-4 flex items-center">
              <SiteIcon />
            </div>
            <h3 className="text-xl font-semibold flex items-center gap-1">
              Sites <ArrowRight className="w-4 h-4" />
            </h3>
            <p className="text-gray-600 mt-1">Make any page a website in minutes.</p>
          </div>

          <div className={`flex flex-col items-start border lg:border-0 border-gray-300 p-4 rounded-md transition-all
            sm:bg-transparent sm:backdrop-blur-none sm:shadow-none
            ${glassClasses} lg:bg-transparent lg:backdrop-blur-none lg:shadow-none`}>
            <div className="h-16 w-16 mb-4 flex items-center">
              <TemplateIcon />
            </div>
            <h3 className="text-xl font-semibold flex items-center gap-1">
              Templates <ArrowRight className="w-4 h-4" />
            </h3>
            <p className="text-gray-600 mt-1">Get started with one of 30,000+ templates.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
