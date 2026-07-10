"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  BookOpen,
  Layers,
  Sparkles,
  TrendingUp,
  Video,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductBadge } from "@/core/design-system/tag";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { FLOW_URL } from "@/lib/constants/site";
import { useStore } from "@/lib/utils/zustand/store";
import { images } from "@/lib/site-image";

const flowFeatures = [
  {
    icon: Sparkles,
    title: "Generate any course",
    description:
      "Turn any topic into a structured course with AI in seconds.",
  },
  {
    icon: Layers,
    title: "Flashcards & quizzes",
    description: "Active recall tools that reinforce what you've learned.",
  },
  {
    icon: TrendingUp,
    title: "Track mastery",
    description: "See exactly where you're strong and what needs more work.",
  },
];

const trupperFeatures = [
  {
    icon: BookOpen,
    title: "Courses & resources",
    description:
      "Build course catalogs with lessons, books, and study materials.",
  },
  {
    icon: Video,
    title: "Live classes",
    description: "Host live sessions and virtual classrooms for your learners.",
  },
  {
    icon: BarChart,
    title: "Trainee management",
    description:
      "Track students or staff trainees and their progress across courses.",
  },
];

function FeatureRow({
  icon: Icon,
  title,
  description,
  accent,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  accent: "flow" | "trupper";
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl bg-card/60 border border-border-soft p-4">
      <div
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${
          accent === "flow" ? "bg-flow-soft text-flow" : "bg-accent-soft text-accent"
        }`}
      >
        <Icon className="size-5" />
      </div>
      <div>
        <h3 className="font-display text-[15px] font-600 text-foreground">{title}</h3>
        <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  const setInstitutionSignup = useStore((state) => state.setInstitutionSignup);

  return (
    <>
      {/* Flow Section */}
      <section id="flow" className="w-full px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <ProductBadge product="flow" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-5 font-display text-[clamp(28px,4vw,40px)] font-700 leading-tight text-foreground"
              >
                Learning that adapts to you
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-[17px]"
              >
                Flow turns any topic into a structured course with AI, then helps
                you retain it with flashcards and quizzes. Track your mastery as
                you go, so you always know what to study next.
              </motion.p>

              <motion.div variants={staggerContainer} className="mt-8 space-y-3">
                {flowFeatures.map((feature) => (
                  <motion.div key={feature.title} variants={fadeUp}>
                    <FeatureRow accent="flow" {...feature} />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8">
                <Button
                  variant="flow"
                  size="lg"
                  onClick={() => window.open(FLOW_URL, "_blank")}
                >
                  Try Flow free <ArrowRight className="size-4" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-2xl shadow-lift"
            >
              <img
                src={images.flow}
                alt="Individual learning on laptop"
                className="h-full w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trupper Section */}
      <section id="trupper" className="w-full px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1 overflow-hidden rounded-2xl shadow-lift"
            >
              <img
                src={images.trupper}
                alt="Classroom and institution"
                className="h-full w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="order-1 lg:order-2"
            >
              <motion.div variants={fadeUp}>
                <ProductBadge product="trupper" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-5 font-display text-[clamp(28px,4vw,40px)] font-700 leading-tight text-foreground"
              >
                A learning platform for every kind of educator
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-[17px]"
              >
                Schools and universities, online tutors running live classes, and
                companies training staff all use Trupper for courses, content,
                exams, and analytics — in one platform.
              </motion.p>

              <motion.div variants={staggerContainer} className="mt-8 space-y-3">
                {trupperFeatures.map((feature) => (
                  <motion.div key={feature.title} variants={fadeUp}>
                    <FeatureRow accent="trupper" {...feature} />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8">
                <Button
                  variant="trupper"
                  size="lg"
                  onClick={() => setInstitutionSignup(true)}
                >
                  Request access <ArrowRight className="size-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
