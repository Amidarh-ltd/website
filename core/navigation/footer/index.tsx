import Link from "next/link";
import { getCurrentYear } from "@/lib/utils";
import { TRUPPER_PATH } from "@/lib/constants/site";
import { FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa6";

const footerLinks = {
  products: [
    { label: "Trupper LMS", href: TRUPPER_PATH },
    { label: "Note", href: "#" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Docs", href: "#" },
    { label: "System Status", href: "/trupper/status" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "NDPR Compliance", href: "/privacy" },
  ],
};

export const Footer = () => {
  return (
    <footer className="w-full px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top row — social + status */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Follow Amidarh on
            </span>
            <div className="flex gap-2">
              {[
                { Icon: FaTwitter, href: "#", label: "Twitter" },
                { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
                { Icon: FaYoutube, href: "#", label: "YouTube" },
                { Icon: FaWhatsapp, href: "#", label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-8 items-center justify-center rounded-md bg-surface text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
                >
                  <Icon className="size-3.5" />
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/trupper/status"
            className="inline-flex items-center gap-2 rounded-full border border-green-200 px-4 py-1.5 text-sm text-green-700 transition-colors hover:bg-green-50"
          >
            <span className="size-2 rounded-full bg-green-500" />
            All systems operational
          </Link>
        </div>

        <div className="border-t border-border-soft" />

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold capitalize text-foreground">
                {category}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border-soft" />

        {/* Copyright */}
        <p className="py-8 text-sm text-muted-foreground">
          Copyright {getCurrentYear()} Amidarh Technologies. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
