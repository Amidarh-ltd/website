"use client"

import { Logo } from "@/core/commons/ui";
import { Card } from "@/components/ui/card";
import { GridPatterns } from "@/core/commons/ui/svg";
import { Notebook, BookCheck } from "lucide-react";
import { WelcomeCard } from "../components/card";

export const WelcomeLayouts = () => {
  return (
    <div
        className="px-20 py-10"
    >
      <GridPatterns />
      <Logo />
      <div className="mt-6">
        <h1 className="text-3xl font-bold">Hello Wisdom</h1>
        <p>Your journey to success begins here.</p>
      </div>
      <div className="mt-6 flex gap-4">
        <WelcomeCard
            Icon={Notebook}
            title="Amidarh Note"
            description="Notes help you capture ideas, organize your thoughts, and keep track of important information. Start creating notes to boost your productivity and never miss a great idea!"
        />
          <WelcomeCard
            Icon={BookCheck}
            title="Amidarh CBT"
            description="Notes help you capture ideas, organize your thoughts, and keep track of important information. Start creating notes to boost your productivity and never miss a great idea!"
        />
      </div>
    </div>
  );
};
