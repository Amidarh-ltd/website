"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";
import { useStore } from "@/lib/utils/zustand/store";

const faqs = [
  {
    question: "Who can use Trupper?",
    answer:
      "Trupper works for schools and universities of any size, online tutors running live classes, and companies training their staff — anyone who needs to manage courses, learners, and exams.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most accounts are fully set up within one to two weeks. Our team works directly with you to configure courses, cohorts, and admin accounts.",
  },
  {
    question: "Can we migrate our existing data?",
    answer:
      "Yes. We support data migration from spreadsheets and most existing school or training management systems as part of onboarding.",
  },
  {
    question: "Does Trupper support computer-based testing?",
    answer:
      "Yes. Trupper supports CBT exam formats with timed sessions, question banks, and anti-cheat controls.",
  },
  {
    question: "What support do you offer?",
    answer:
      "Every account gets a dedicated onboarding contact plus ongoing email and chat support for admins and instructors.",
  },
];

export default function AccessFaq() {
  const setInstitutionSignup = useStore((state) => state.setInstitutionSignup);

  return (
    <section className="w-full bg-surface px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-semibold text-ink">
            Built for schools, tutors, and teams
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-2">
            Trupper is currently in private beta. We&apos;re onboarding new
            accounts with a tailored setup process.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto mt-10 max-w-xl rounded-xl border border-border bg-white p-10 text-center"
        >
          <h3 className="font-display text-2xl font-semibold text-ink">
            Get early access
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
            Tell us about your school, classes, or team and we&apos;ll set up
            a tailored onboarding session.
          </p>
          <Button
            variant="trupper"
            size="lg"
            className="mt-6"
            onClick={() => setInstitutionSignup(true)}
          >
            Request access →
          </Button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto mt-20 max-w-2xl"
        >
          <h3 className="text-center font-display text-2xl font-semibold text-ink">
            Frequently asked questions
          </h3>
          <Accordion className="mt-8">
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
