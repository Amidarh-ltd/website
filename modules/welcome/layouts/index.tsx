"use client";

import { Logo } from "@/core/commons/ui";
import { MarketingImage } from "@/components/ui/marketing-image";
import { Notebook, LogOut } from "lucide-react";
import { WelcomeCard } from "../components/card";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/core/hooks/logout";
import { useStore } from "@/lib/utils/zustand/store";
import Link from "next/link";
import { UNSPLASH_IMAGES } from "@/lib/constants/site";

export const WelcomeLayouts = () => {
  const { isLoading, logout } = useLogout();
  const user = useStore((state) => state.user);
  const token = useStore((state) => state.token);

  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative hidden lg:block">
          <MarketingImage
            src={UNSPLASH_IMAGES.auth.src}
            alt={UNSPLASH_IMAGES.auth.alt}
            containerClassName="min-h-screen rounded-none"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-brand/70" />
          <div className="absolute inset-0 flex flex-col justify-end p-12 text-brand-foreground">
            <p className="text-sm font-semibold uppercase tracking-wider opacity-80">
              Amidarh
            </p>
            <h1 className="mt-2 text-3xl font-bold">
              Your journey to success begins here.
            </h1>
          </div>
        </div>

        <div className="flex flex-col px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
          <div className="flex items-center justify-between">
            <Logo />
            <Button variant="outline" size="sm" onClick={() => logout()}>
              <LogOut className="size-4" />
              {isLoading ? "Loading..." : "Logout"}
            </Button>
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Hello, {user?.firstName}
            </h2>
            <p className="mt-2 text-muted-foreground">
              Choose a product to continue your learning journey.
            </p>
          </div>

          <div className="mt-8 grid flex-1 gap-4 sm:max-w-sm">
            <Link
              href={
                process.env.NEXT_PUBLIC_NOTES_API_URL + "/my_note?a=" + token
              }
              className="outline-none"
            >
              <WelcomeCard
                Icon={Notebook}
                title="Amidarh Note"
                description="Capture ideas, organize thoughts, and keep track of what matters."
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
