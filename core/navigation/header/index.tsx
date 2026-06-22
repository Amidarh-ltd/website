"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  return (
    <HeaderClient>
      <nav className="relative z-20 flex items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Logo />

        <div className="hidden min-[900px]:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[360px] gap-2 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href={FLOW_URL}
                          className="block rounded-xl p-4 transition-colors hover:bg-muted"
                        >
                          <p className="font-semibold text-foreground">Flow</p>
                          <p className="mt-1 text-sm text-muted-foreground">
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
                          className="block rounded-xl p-4 transition-colors hover:bg-muted"
                        >
                          <p className="font-semibold text-foreground">
                            Trupper
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            Learning management for schools and institutions—with exams built in.
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
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            For Institutions
          </Link>
        </div>

        <div className="hidden min-[900px]:flex items-center gap-3">
          {isTrupper ? (
            <InstitutionSignupButton size="lg" />
          ) : (
            <>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push(TRUPPER_PATH)}
              >
                For Institutions
              </Button>
              <Button size="lg" onClick={() => window.open(FLOW_URL, "_blank")}>
                Start with Flow
              </Button>
            </>
          )}
        </div>

        <Sidebar isTrupper={isTrupper} />
      </nav>
      <InstitutionSignup />
    </HeaderClient>
  );
}
