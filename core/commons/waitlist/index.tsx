"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Clock, Star } from "lucide-react"

export function Waitlist() {
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
      setOrganization("")
    }, 3000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-[#24216A] text-white px-8 py-6 text-lg rounded-3xl">
          Join Waitlist
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="relative">
          {/* Background Pattern */}
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
            {/* Header */}
            <DialogHeader className="text-center pb-6 pt-8 px-8">
              <DialogTitle className="text-2xl font-bold text-gray-900">
                Join the Trupper Waitlist
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-base">
                Be among the first to experience the future of exam management
              </DialogDescription>
            </DialogHeader>

            {/* Benefits */}
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
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-[#24216A] text-white py-3 text-lg rounded-2xl"
                  >
                    {isSubmitting ? (
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