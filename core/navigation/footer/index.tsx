import Link from "next/link";
import { getCurrentYear } from "@/lib/utils";
import { FLOW_URL, TRUPPER_PATH } from "@/lib/constants/site";
import { FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa6";

const footerLinks = {
  products: [
    { label: "Flow", href: FLOW_URL, external: true },
    { label: "Trupper", href: TRUPPER_PATH },
    { label: "Amidarh CBT", href: "#", disabled: true },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-brand text-brand-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              Amidarh
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-foreground/80">
              Human-centered education technology—AI-powered learning with Flow
              and modern exam management with Trupper.
            </p>
            <div className="mt-6 flex gap-4">
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
                  className="rounded-lg p-2 text-brand-foreground/80 transition-colors hover:bg-brand-foreground/10 hover:text-brand-foreground"
                >
                  <Icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Products
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand-foreground/80 transition-colors hover:text-brand-foreground"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-brand-foreground/80 transition-colors hover:text-brand-foreground"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-foreground/80 transition-colors hover:text-brand-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-foreground/15 pt-8 text-sm text-brand-foreground/70 sm:flex-row">
          <p>© {getCurrentYear()} Amidarh. All rights reserved.</p>
          <p className="text-xs">
            Designed with ❤️ by <a href="https://github.com/amidarh" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-brand-foreground">Amidarh</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
