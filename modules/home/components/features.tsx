import { Mail, Send } from "lucide-react"
import { Quote } from "lucide-react"

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Amidarh Features <br className="hidden sm:inline" />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
            <div className="flex lg:flex-row gap-6 flex-col">
                <div className="relative overflow-hidden rounded-lg bg-gray-900 text-white w-full lg:max-w-[40%]">
                    <div className="relative z-10 p-8 flex flex-col h-full">
                    {/* <div className="text-4xl font-serif mb-4">"</div> */}
                    <Quote className="rotate-180"/>
                    <p className="text-xl md:text-5xl font-bold mb-6">
                        Amidarh is the power house for education and learning
                    </p>
                    <div className="mt-auto">
                        <h4 className="font-bold">Wisdom woke</h4>
                        <p className="text-sm text-gray-300">Team lead at alt university</p>
                    </div>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                {/* Stats Card 1 */}
                <div className="rounded-lg bg-indigo-900 text-white p-8 flex flex-col w-full">
                    <div className="flex items-center justify-between">
                    <div>
                        <span className="text-6xl md:text-7xl lg:text-8xl font-bold">85</span>
                        <span className="text-5xl md:text-6xl font-bold">%</span>
                    </div>
                    <div className="bg-indigo-800 p-3 rounded-lg">
                        <Mail className="w-8 h-8 text-white" />
                    </div>
                    </div>
                    <div className="mt-auto">
                    <h3 className="text-xl md:text-2xl font-bold mt-4">Reduction in Time Spent on School management</h3>
                    </div>
                </div>
            </div>
          {/* Testimonial Card 1 */}

          {/* Stats Card 2 */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="rounded-lg bg-teal-800 text-white p-8 flex flex-col w-full">
                <div className="flex items-center justify-between">
                <div>
                    <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-yellow-100">2B</span>
                    <span className="text-5xl md:text-6xl font-bold text-yellow-100">+</span>
                </div>
                <div className="mt-auto">
                    <Send className="w-8 h-8 text-yellow-100 transform rotate-45" />
                </div>
                </div>
                <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-bold mt-4">Messages Sent to Families</h3>
                </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="relative overflow-hidden rounded-lg bg-gray-900 text-white w-full lg:max-w-[40%]">
                <div className="relative z-10 p-8 flex flex-col h-full">
                <Quote className="rotate-180"/>
                <p className="text-xl md:text-3xl font-medium mb-6">
                    Amidarh has transformed the way we communicate with our students and their families. The platform is intuitive, reliable, and has made our school operations much more efficient.
                </p>
                <div className="mt-auto">
                    <h4 className="font-bold">Wisdom woke</h4>
                    <p className="text-sm text-gray-300">Superintendent, Pass Christian Public Schools</p>
                </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

