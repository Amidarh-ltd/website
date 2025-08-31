"use client";

import { Logo } from "@/core/commons/ui";
import { Card } from "@/components/ui/card";
import { GridPatterns } from "@/core/commons/ui/svg";
import { Notebook, BookCheck } from "lucide-react";
import { WelcomeCard } from "../components/card";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/core/hooks/logout";
import { useStore } from "@/lib/utils/zustand/store";
import Link from "next/link";

export const WelcomeLayouts = () => {
  const { isLoading, logout } = useLogout();
  const user = useStore((state) => state.user);
  const token = useStore((state) => state.token);
  return (
    <div className="px-4 py-6 sm:px-8 md:px-16 lg:px-20 lg:py-10">
      <GridPatterns />
      <div className="flex flex-row items-center justify-between w-full">
        <Logo />
        <Button onClick={() => logout()}>
          {isLoading ? "Loading...." : "Logout"}
        </Button>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Hello {user?.firstName}
        </h1>
        <p className="text-base sm:text-lg">
          Your journey to success begins here.
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-4 md:flex-row">
        <Link
          href={process.env.NEXT_PUBLIC_NOTES_API_URL + "/my_note?a=" + token}
          className="outline-0 underline-offset-0"
        >
          <WelcomeCard
            Icon={Notebook}
            title="Amidarh Note"
            description="Notes help you capture ideas, organize your thoughts, and keep track of important information. Start creating notes to boost your productivity and never miss a great idea!"
          />
        </Link>
        <WelcomeCard
          Icon={BookCheck}
          title="Amidarh CBT"
          description="Notes help you capture ideas, organize your thoughts, and keep track of important information. Start creating notes to boost your productivity and never miss a great idea!"
        />
      </div>
    </div>
  );
};
