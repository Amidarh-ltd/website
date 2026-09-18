"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function Mission() {
  return (
    <section className="w-full px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaborating on education technology"
                className="h-full w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -right-4 rounded-xl border border-border-soft bg-card p-5 shadow-lift sm:-right-8"
            >
              <p className="font-display text-2xl font-bold text-accent">
                Our Mission
              </p>
              <p className="mt-1 text-sm text-muted-foreground max-w-[200px]">
                Democratize quality education through technology.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Why we exist
            </p>
            <h2 className="mt-3 font-display text-[clamp(28px,4vw,40px)] font-bold text-foreground">
              Education should never be limited by geography or resources.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Amidarh Technologies was born from a simple observation: millions
                of learners and educators across Africa lack access to the tools
                they need to thrive. Traditional learning management systems are
                expensive, complex, and built for markets that don&apos;t reflect
                the realities of emerging economies.
              </p>
              <p>
                We set out to change that. Our products — Flow and Trupper — are
                designed from the ground up to be accessible, affordable, and
                powerful enough to serve individual learners, independent tutors,
                schools, and large institutions alike.
              </p>
              <p>
                Whether you&apos;re a student generating a personalized course
                with AI or a university managing thousands of enrollments, Amidarh
                gives you the infrastructure to succeed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
