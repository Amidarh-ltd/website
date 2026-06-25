import Link from "next/link";
import { getCurrentYear } from "@/lib/utils";
import { FLOW_URL, TRUPPER_PATH } from "@/lib/constants/site";
import { FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa6";

const footerLinks = {
  products: [
    { label: "Flow", href: FLOW_URL, external: true },
    { label: "Trupper", href: TRUPPER_PATH },
    { label: "Note", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-2xl font-bold text-white">
              Amidarh
            </Link>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">
              Learn smarter. Run institutions better.
            </p>
            <div className="mt-6 flex gap-2">
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
                  className="flex size-9 items-center justify-center rounded-md text-white/55 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/40">
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
                      className="text-sm text-white/55 transition-colors hover:text-white/90"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-white/90"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-1 lg:grid-cols-1">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/40">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-white/90"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/40">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-white/90"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/35">
          <p>© {getCurrentYear()} Amidarh Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
