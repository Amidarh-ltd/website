"use client";

import Link from "next/link";
import { HeaderClient } from "./components.client";
import { Sidebar } from "./sidebar";
import { Button } from "@/components/ui/button";
import {
  InstitutionSignup,
  InstitutionSignupButton,
} from "@/core/commons/institution-signup";
import { Logo } from "@/core/commons/ui";
import { FLOW_URL, TRUPPER_PATH } from "@/lib/constants/site";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header({ isTrupper }: { isTrupper?: boolean }) {
  return (
    <HeaderClient>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-display text-lg font-bold text-ink">
            Amidarh
          </span>
        </Link>

        <div className="hidden min-[900px]:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-ink-2 transition-colors hover:text-ink"
          >
            Home
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-ink-2 hover:text-ink data-[state=open]:text-ink">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[360px] gap-2 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href={FLOW_URL}
                          className="block rounded-lg p-4 transition-colors hover:bg-flow-soft"
                        >
                          <p className="font-display font-semibold text-flow">
                            Flow
                          </p>
                          <p className="mt-1 text-sm text-ink-2">
                            AI-powered learning with courses, flashcards,
                            and quizzes.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href={TRUPPER_PATH}
                          className="block rounded-lg p-4 transition-colors hover:bg-accent-soft"
                        >
                          <p className="font-display font-semibold text-accent">
                            Trupper
                          </p>
                          <p className="mt-1 text-sm text-ink-2">
                            Courses, live classes, and exams for schools,
                            tutors, and companies.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href={TRUPPER_PATH}
            className="text-sm font-medium text-ink-2 transition-colors hover:text-ink"
          >
            For Institutions
          </Link>

          <Link
            href="/blog"
            className="text-sm font-medium text-ink-2 transition-colors hover:text-ink"
          >
            Blog
          </Link>
        </div>

        <div className="hidden min-[900px]:flex items-center gap-3">
          {isTrupper ? (
            <InstitutionSignupButton size="sm" />
          ) : (
            <Button
              size="sm"
              className="px-5"
              onClick={() => window.open(FLOW_URL, "_blank")}
            >
              Visit Flow
            </Button>
          )}
        </div>

        <Sidebar isTrupper={isTrupper} />
      </nav>
      <InstitutionSignup />
    </HeaderClient>
  );
}
