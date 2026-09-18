"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const channels = [
  {
    icon: Mail,
    title: "Email us",
    description: "For general inquiries and support.",
    action: "contact@amidarh.com",
    href: "mailto:contact@amidarh.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with us for quick questions.",
    action: "Send a message",
    href: "https://wa.me/message/KBMMZQPMHPWWM1",
  },
  {
    icon: Calendar,
    title: "Book a demo",
    description: "See Trupper in action with a live walkthrough.",
    action: "Schedule a call",
    href: "https://calendly.com/amidarh01/30min",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Lagos, Nigeria",
    action: "We serve users globally",
    href: null,
  },
  {
    icon: Clock,
    title: "Business hours",
    description: "Monday - Friday",
    action: "9:00 AM - 6:00 PM WAT",
    href: null,
  },
];

export function ContactChannels() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className="flex flex-col gap-4 lg:pt-0"
    >
      <motion.div variants={fadeUp}>
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Other ways to reach us
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Pick the channel that works best for you.
        </p>
      </motion.div>

      <div className="mt-2 flex flex-col gap-3">
        {channels.map((channel) => {
          const Wrapper = channel.href ? "a" : "div";
          const linkProps = channel.href
            ? {
                href: channel.href,
                target: channel.href.startsWith("http") ? "_blank" : undefined,
                rel: channel.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined,
              }
            : {};

          return (
            <motion.div key={channel.title} variants={fadeUp}>
              <Wrapper
                {...linkProps}
                className={`flex items-start gap-4 rounded-xl border border-border-soft bg-card p-5 transition-all duration-300 ${
                  channel.href
                    ? "group hover:border-accent/30 hover:shadow-lift cursor-pointer"
                    : ""
                }`}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <channel.icon className="size-[18px]" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    {channel.title}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {channel.description}
                  </p>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {channel.action}
                  </p>
                </div>
              </Wrapper>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
