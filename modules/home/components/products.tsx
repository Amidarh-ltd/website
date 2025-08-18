import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProductsSection() {
  const templates = [
    {
      id: "scrum",
      type: "/trupper",
      title: "Trupper",
      description: "Exam Management Systemfor Schoolsat Every Level",
      image: "/scrum-template.svg",
    },
    {
      id: "bug-tracking",
      type: "##",
      title: "Amidarh Note",
      description: "Write and understand the world with amidarh note",
      image: "/bug-tracking-template.svg",
    },
    {
      id: "devops",
      type: "##",
      title: "Amidarh CBT",
      description: "Practice make perfect. use amidarh cbt to stay ahead of your peers",
      image: "/devops-template.svg",
    },
  ]

  return (
    <section className="w-full py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold">GET STARTED WITH OUR PRODUCTS</h2>
        <p className="text-center mb-12 tex-xl">Amidarh for all</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div key={template.id} className="rounded-2xl border border-gray-200 p-6 transition-all hover:shadow-md backdrop-blur-sm bg-white/50">
              <div className="h-40 mb-6 flex items-center justify-center">
                <TemplateIllustration id={template.id} />
              </div>

              <h3 className="text-xl font-bold mb-2">{template.title}</h3>
              <p className="text-gray-700 mb-6">{template.description}</p>

              <Link
                href={template.type}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Try it out <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">For teams of all sizes</h2>
          <p className="text-xl mb-6">Everyone from start-ups to large enterprises prefer Atlassian</p>
          <Link href="/customers" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            Explore all customers stories <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div> */}
      </div>
    </section>
  )
}

function TemplateIllustration({ id }: { id: string }) {
  switch (id) {
    case "scrum":
      return <ScrumIllustration />
    case "bug-tracking":
      return <BugTrackingIllustration />
    case "devops":
      return <DevOpsIllustration />
    default:
      return null
  }
}

function ScrumIllustration() {
  return (
    <div className="relative w-64 h-32">
      <div className="absolute top-0 left-0 w-56 h-28 bg-blue-500 rounded-md transform rotate-6"></div>
      <div className="absolute top-2 left-2 w-56 h-28 bg-green-500 rounded-md transform -rotate-3">
        <div className="absolute inset-2 bg-white rounded-sm p-2">
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
              <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
              <div className="ml-auto w-3 h-3 bg-purple-400 rounded-full"></div>
            </div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
                <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
                <div className="ml-auto w-10 h-2 bg-amber-400 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function BugTrackingIllustration() {
  return (
    <div className="relative w-64 h-32">
      <div className="absolute top-0 left-0 w-56 h-28 bg-blue-500 rounded-md"></div>
      <div className="absolute top-2 left-2 w-56 h-28 bg-green-500 rounded-md">
        <div className="absolute inset-2 bg-white rounded-sm p-2">
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div className="w-3 h-3 bg-amber-400 rounded-sm mr-2"></div>
                <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
                <div className="ml-auto w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -top-2 left-10 text-black text-xl">+</div>
      <div className="absolute -top-2 left-16 text-black text-xl">+</div>
      <div className="absolute top-4 left-4 text-black text-xl">+</div>
    </div>
  )
}

function DevOpsIllustration() {
  return (
    <div className="relative w-64 h-32">
      <div className="absolute top-0 right-0 w-56 h-28 bg-blue-500 rounded-md"></div>
      <div className="absolute top-2 right-2 w-56 h-28 bg-green-500 rounded-md">
        <div className="absolute inset-2 bg-white rounded-sm p-2">
          <div className="space-y-4">
            <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
            <div className="flex items-center">
              <div className="h-2 bg-amber-400 rounded-full w-1/3"></div>
              <div className="h-2 bg-blue-500 rounded-full w-1/3 mx-1"></div>
            </div>
            <div className="flex items-center">
              <div className="h-2 bg-amber-400 rounded-full w-1/2"></div>
              <div className="ml-1">✂️</div>
            </div>
            <div className="h-2 bg-amber-400 rounded-full w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

