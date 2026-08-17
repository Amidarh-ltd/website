"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeUp } from "@/lib/motion";

const faqs = [
  {
    question: "What is Trupper?",
    answer:
      "Trupper is a white-label learning management platform that lets schools, online tutors, and companies create branded learning experiences with courses, live classes, exams, payments, and analytics.",
  },
  {
    question: "Can I customize my platform?",
    answer:
      "Yes. Trupper gives you full white-label control — your logo, colors, domain, and branding. Your students see your brand, not ours.",
  },
  {
    question: "Is Trupper free to use?",
    answer:
      "Trupper offers a free plan to get started. You can upgrade as your institution grows. Visit the pricing page for full details.",
  },
  {
    question: "How much does Trupper cost?",
    answer:
      "Trupper offers multiple plans to suit different institution sizes. Visit the Trupper pricing page for full details, or book a demo for a personalized walkthrough.",
  },
  {
    question: "How do I get started?",
    answer:
      "Request access and our team will help set up your institution. You can be live in minutes.",
  },
];

export default function Faq() {
  return (
    <section className="w-full px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-20"
        >
          {/* Left heading */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-[clamp(28px,4vw,40px)] font-bold leading-tight text-foreground">
              Common questions
            </h2>
          </div>

          {/* Right accordion */}
          <Accordion className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
