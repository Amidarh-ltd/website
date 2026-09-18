"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly will I get a response?",
    answer:
      "We typically respond within 24 hours on business days. For urgent issues, reach out via WhatsApp for faster support.",
  },
  {
    question: "Can I get a live demo of Trupper?",
    answer:
      "Absolutely. Book a 30-minute demo call through our Calendly link above, and we'll walk you through everything Trupper can do for your institution.",
  },
  {
    question: "I'm having a technical issue. Where should I report it?",
    answer:
      "Select 'Bug Report' or 'Product Support' in the contact form above and describe the issue in detail. Include screenshots if possible — it helps us resolve things faster.",
  },
  {
    question: "Do you offer partnerships or integrations?",
    answer:
      "Yes, we're open to partnerships with schools, edtech companies, and content providers. Select 'Partnership' in the form and tell us about your organization.",
  },
  {
    question: "Is there a free plan available?",
    answer:
      "Flow offers free access to core learning features. Trupper has a free tier for small institutions, with paid plans for larger deployments. Visit our pricing page for details.",
  },
];

export function ContactFaq() {
  return (
    <section className="w-full bg-surface px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-[clamp(28px,4vw,40px)] font-bold text-foreground">
            Common questions
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-10"
        >
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUp}>
                <AccordionItem
                  value={`faq-${i}`}
                  className="rounded-xl border border-border-soft bg-card px-6"
                >
                  <AccordionTrigger className="text-left text-[15px] font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
