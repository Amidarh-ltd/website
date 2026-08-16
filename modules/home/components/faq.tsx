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
    question: "What is Amidarh?",
    answer:
      "Amidarh is the parent company behind Flow and Trupper — two independent products focused on learning and institution management.",
  },
  {
    question: "Are Flow and Trupper connected?",
    answer:
      "No. Flow and Trupper are independent products with separate accounts and data. Flow is for individual learners, Trupper is for schools, tutors, and companies.",
  },
  {
    question: "Is Flow free to use?",
    answer:
      "Yes, Flow is free to start. You can generate courses, flashcards, and quizzes without an institutional account.",
  },
  {
    question: "How much does Trupper cost?",
    answer:
      "Trupper offers multiple plans to suit different institution sizes. Visit the Trupper pricing page for full details, or book a demo for a personalized walkthrough.",
  },
  {
    question: "How do I get started?",
    answer:
      "For Flow, just open the app and start learning. For Trupper, request access and our team will help set up your institution.",
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
