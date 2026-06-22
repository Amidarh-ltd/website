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
      "Amidarh is the company behind Flow and Trupper — two separate educational technology products built for different audiences.",
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
    question: "Who is Trupper for?",
    answer:
      "Trupper is built for schools and universities, online tutors running live classes, and companies training their staff — anyone who needs courses, content, exams, and analytics in one place.",
  },
  {
    question: "How do I get started?",
    answer:
      "For Flow, just open the app and start learning. For Trupper, request access and our team will help set up your institution.",
  },
];

export default function Faq() {
  return (
    <section className="w-full bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2 className="text-center font-display text-[clamp(28px,4vw,40px)] font-semibold text-ink">
            Frequently asked questions
          </h2>
          <Accordion className="mt-10">
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
