import {
  Menu,
  X,
  Home,
  Building2,
  Users,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const pathname = usePathname();

  const navigationItems = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      description: "Back to homepage",
    },
    {
      href: "/trupper",
      label: "Trupper",
      icon: GraduationCap,
      description: "Exam Management System",
      badge: "New",
    },
    // {
    //   href: "##",
    //   label: "About Us",
    //   icon: Users,
    //   description: "Learn about our mission"
    // },
    // {
    //   href: "##",
    //   label: "Products",
    //   icon: Building2,
    //   description: "Explore our solutions"
    // }
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/trupper" && pathname === "/trupper") return true;
    return false;
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="min-[800px]:hidden max-[800px]:flex h-10 w-10 rounded-2xl hover:bg-gray-100 transition-colors"
        >
          <Menu className="text-gray-700" size={25} />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[300px] p-0 bg-white border-l border-gray-200"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          {/* <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-semibold text-gray-900">Amidarh</span>
            </div>
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="h-4 w-4 text-gray-600" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetClose>
          </div> */}

          {/* Navigation */}
          <div className="flex-1 mt-10 px-4 py-4">
            <div className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center gap-3 p-3 rounded-xl transition-colors ${
                      active
                        ? "bg-primary/10 border border-primary/20"
                        : "hover:bg-gray-50 border border-transparent"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        active
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-medium text-sm transition-colors ${
                            active ? "text-primary" : "text-gray-900"
                          }`}
                        >
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-primary text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {item.description}
                      </p>
                    </div>

                    <ArrowRight
                      className={`h-3 w-3 transition-colors ${
                        active
                          ? "text-primary"
                          : "text-gray-400 group-hover:text-gray-600"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="space-y-2">
              <Button className="w-full bg-primary hover:bg-[#24216A] text-white rounded-xl py-2.5 font-medium transition-colors">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-200 hover:border-gray-300 text-gray-700 rounded-xl py-2.5 font-medium transition-colors"
              >
                Sign In
              </Button>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                © 2025 Amidarh. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
