"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
  openValue: string | null;
  setOpenValue: (value: string | null) => void;
} | null>(null);

function Accordion({
  children,
  className,
  defaultValue,
}: {
  children: React.ReactNode;
  className?: string;
  defaultValue?: string;
}) {
  const [openValue, setOpenValue] = React.useState<string | null>(
    defaultValue ?? null,
  );

  return (
    <AccordionContext.Provider value={{ openValue, setOpenValue }}>
      <div data-slot="accordion" className={className}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

const AccordionItemContext = React.createContext<string>("");

function AccordionItem({
  value,
  className,
  children,
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div
        data-slot="accordion-item"
        className={cn("border-b border-border-soft last:border-b-0", className)}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

function AccordionTrigger({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ctx = React.useContext(AccordionContext);
  const value = React.useContext(AccordionItemContext);
  if (!ctx) return null;
  const isOpen = ctx.openValue === value;

  return (
    <button
      type="button"
      data-slot="accordion-trigger"
      aria-expanded={isOpen}
      onClick={() => ctx.setOpenValue(isOpen ? null : value)}
      className={cn(
        "flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-medium text-ink transition-colors outline-none hover:text-accent focus-visible:ring-2 focus-visible:ring-ring/50",
        className,
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "size-4 shrink-0 text-ink-3 transition-transform duration-200",
          isOpen && "rotate-180",
        )}
      />
    </button>
  );
}

function AccordionContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ctx = React.useContext(AccordionContext);
  const value = React.useContext(AccordionItemContext);
  if (!ctx) return null;
  const isOpen = ctx.openValue === value;

  return (
    <div
      data-slot="accordion-content"
      className="overflow-hidden transition-[grid-template-rows] duration-200 ease-out"
      style={{
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
      }}
    >
      <div className="overflow-hidden">
        <div className={cn("pb-5 text-[15px] leading-relaxed text-ink-2", className)}>
          {children}
        </div>
      </div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
