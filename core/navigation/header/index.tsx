"use client";

import Link from "next/link";
import { HeaderClient } from "./components.client";
import { Sidebar } from "./sidebar";
import { Button } from "@/components/ui/button";
import { InstitutionSignup } from "@/core/commons/institution-signup";
import { Logo } from "@/core/commons/ui";
import { TRUPPER_PATH } from "@/lib/constants/site";

export function Header() {
  return (
    <HeaderClient>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-display text-lg font-bold text-ink">
            Amidarh
          </span>
        </Link>

        {/* Center nav */}
        <div className="hidden min-[900px]:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-ink-2 transition-colors hover:text-ink"
          >
            Home
          </Link>

          <Link
            href={TRUPPER_PATH}
            className="text-sm font-medium text-ink-2 transition-colors hover:text-ink"
          >
            Trupper
          </Link>

          <Link
            href={`${TRUPPER_PATH}#pricing`}
            className="text-sm font-medium text-ink-2 transition-colors hover:text-ink"
          >
            Pricing
          </Link>

          <Link
            href="/blog"
            className="text-sm font-medium text-ink-2 transition-colors hover:text-ink"
          >
            Blog
          </Link>
        </div>

        {/* Right actions */}
        <div className="hidden min-[900px]:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://calendly.com/amidarh01/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a demo
            </a>
          </Button>
        </div>

        <Sidebar />
      </nav>
      <InstitutionSignup />
    </HeaderClient>
  );
}
