"use client";

import { Menu, Home, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { getCurrentYear } from "@/lib/utils";
import { FLOW_URL, TRUPPER_PATH } from "@/lib/constants/site";
import { InstitutionSignupButton } from "@/core/commons/institution-signup";
import { cn } from "@/lib/utils";

export function Sidebar({ isTrupper }: { isTrupper?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();

  const navigationItems = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      description: "Back to homepage",
    },
    {
      href: FLOW_URL,
      label: "Flow",
      icon: Sparkles,
      description: "AI-powered learning",
      external: true,
    },
    {
      href: TRUPPER_PATH,
      label: "Trupper",
      icon: GraduationCap,
      description: "Learning management",
      badge: "Live",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === TRUPPER_PATH && pathname === TRUPPER_PATH) return true;
    return false;
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="min-[900px]:hidden flex size-11 rounded-lg"
        >
          <Menu className="size-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px] border-l border-border-soft p-0">
        <div className="flex h-full flex-col bg-background">
          <div className="flex-1 space-y-1 px-4 py-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const active = !item.external && isActive(item.href);

              const content = (
                <>
                  <div
                    className={cn(
                      "rounded-md p-2 transition-colors",
                      active
                        ? "bg-ink text-background"
                        : "bg-surface text-ink-2",
                    )}
                  >
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "text-sm font-medium text-ink",
                          active && "text-accent",
                        )}
                      >
                        {item.label}
                      </span>
                      {item.badge ? (
                        <span className="rounded-pill bg-accent px-2 py-0.5 text-xs font-medium text-white">
                          {item.badge}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-0.5 text-xs text-ink-3">
                      {item.description}
                    </p>
                  </div>
                  <ArrowRight
                    className={cn(
                      "size-3.5",
                      active ? "text-accent" : "text-ink-3",
                    )}
                  />
                </>
              );

              const className = cn(
                "group flex min-h-[44px] items-center gap-3 rounded-lg border p-3 transition-colors",
                active
                  ? "border-accent/20 bg-accent-soft"
                  : "border-transparent hover:bg-surface",
              );

              return item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <Link key={item.href} href={item.href} className={className}>
                  {content}
                </Link>
              );
            })}
          </div>

          <div className="border-t border-border-soft bg-surface/60 p-4">
            {isTrupper ? (
              <InstitutionSignupButton className="w-full min-h-[44px]" />
            ) : (
              <>
                <Button
                  className="w-full min-h-[44px]"
                  onClick={() => window.open(FLOW_URL, "_blank")}
                >
                  Get started
                </Button>
                <Button
                  variant="outline"
                  className="mt-2 w-full min-h-[44px]"
                  onClick={() => router.push(TRUPPER_PATH)}
                >
                  For Institutions
                </Button>
              </>
            )}
            <p className="mt-4 text-center text-xs text-ink-3">
              © {getCurrentYear()} Amidarh
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
