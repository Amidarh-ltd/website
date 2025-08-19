"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CheckCircle, Clock } from "lucide-react"
import { useWaitlist } from "@/modules/trupper/services"

export function Waitlist({ size }: { size?: "sm" | "md" | "lg" }) {
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { addToWaitlist, isLoading, error: waitlistError, success } = useWaitlist()
  const [error, setError] = useState<string | null>(null)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await addToWaitlist({ email, organization })
    if(success){
      setIsSubmitted(true)
      setError(null)
    } else {
      setError(waitlistError || "An error occurred")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("bg-primary hover:bg-[#24216A] text-white px-8 py-6 text-lg rounded-3xl", size === "sm" && "text-sm", size === "md" && "text-base", size === "lg" && "text-lg")}>
          Join Waitlist
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="relative">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />
          
          <div className="relative z-10">
            <DialogHeader className="text-center pb-6 pt-8 px-8">
              <DialogTitle className="text-2xl font-bold text-gray-900">
                Join the Trupper Waitlist
              </DialogTitle>
              {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
              <DialogDescription className="text-gray-600 text-base">
                Be among the first to experience the future of exam management
              </DialogDescription>
            </DialogHeader>

            <div className="px-8 pb-6">
              <div className="grid grid-cols-1 gap-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Early access to beta features</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Priority support and onboarding</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Exclusive pricing for early adopters</span>
                </div>
              </div>
            </div>

            {/* Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="px-8 pb-8">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@organization.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Name
                    </label>
                    <Input
                      id="organization"
                      type="text"
                      placeholder="Your Organization Name"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-[#24216A] text-white py-3 text-lg rounded-2xl"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Joining...
                      </div>
                    ) : (
                      "Join Waitlist"
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              /* Success State */
              <div className="px-8 pb-8 text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  You're on the list!
                </h3>
                <p className="text-gray-600 mb-4">
                  We'll notify you as soon as Trupper is ready for your institution.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-blue-700 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Expected launch: Q2 2024</span>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-4 border-t">
              <div className="flex items-center justify-center text-sm text-gray-500">
                {/* <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Join 500+ institutions</span>
                </div> */}
                <span>🔒 Secure & Private</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}