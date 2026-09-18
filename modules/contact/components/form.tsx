"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const topics = [
  "General Inquiry",
  "Product Support",
  "Partnership",
  "Book a Demo",
  "Bug Report",
  "Other",
] as const;

type FormStatus = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    // Build mailto link as a simple no-backend approach
    const subject = encodeURIComponent(
      `[${selectedTopic || "General Inquiry"}] Message from ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${selectedTopic || "General Inquiry"}\n\n${message}`
    );

    window.location.href = `mailto:contact@amidarh.com?subject=${subject}&body=${body}`;

    // Show success state after a brief delay
    setTimeout(() => {
      setStatus("sent");
      form.reset();
      setSelectedTopic("");
      setTimeout(() => setStatus("idle"), 4000);
    }, 1000);
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
    >
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border-soft bg-card p-8 shadow-soft sm:p-10"
      >
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Send us a message
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Fill out the form below and we&apos;ll get back to you within 24
          hours.
        </p>

        {/* Topic pills */}
        <div className="mt-8">
          <Label className="text-sm font-medium text-foreground">Topic</Label>
          <div className="mt-3 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setSelectedTopic(topic)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                  selectedTopic === topic
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border-soft bg-background text-muted-foreground hover:border-border hover:text-foreground"
                )}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Name & Email row */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="h-12 rounded-xl bg-background px-4"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="h-12 rounded-xl bg-background px-4"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-5 space-y-2">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us how we can help..."
            className={cn(
              "flex w-full rounded-xl border border-input bg-background px-4 py-3 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "resize-none"
            )}
          />
        </div>

        {/* Submit */}
        <div className="mt-8">
          <Button
            type="submit"
            variant="trupper"
            size="lg"
            disabled={status === "sending" || status === "sent"}
            className="w-full sm:w-auto"
          >
            {status === "sending" && (
              <>
                <Loader2 className="size-4 animate-spin" />
                Sending...
              </>
            )}
            {status === "sent" && (
              <>
                <CheckCircle2 className="size-4" />
                Message sent
              </>
            )}
            {(status === "idle" || status === "error") && (
              <>
                Send message
                <Send className="size-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
