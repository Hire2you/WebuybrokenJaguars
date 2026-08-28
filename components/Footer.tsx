import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS } from "./navLinks";
import {
  SITE_EMAIL,
  SITE_OPENING_HOURS,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from "./siteContact";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-28 border-t border-brand-green bg-jet-black">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/logo.webp"
            alt="We Buy Broken Jaguars"
            width={1000}
            height={500}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
            The UK&apos;s specialist buyer of broken, damaged and non-running
            Jaguars.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#3dba7a]">
            Quick links
          </h2>
          <ul className="mt-4 space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="motion-link-underline text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#3dba7a]">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className="motion-link-underline transition-colors hover:text-white"
              >
                {SITE_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="motion-link-underline transition-colors hover:text-white"
              >
                {SITE_EMAIL}
              </a>
            </li>
            <li>{SITE_OPENING_HOURS}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#3dba7a]">
            Coverage
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Buying Jaguars across mainland UK.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs leading-relaxed text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2025 We Buy Broken Jaguars. All rights reserved.</p>
          <p>
            We Buy Broken Jaguars is a trading name of [Company Ltd].
            [Placeholder company reg and address].
          </p>
        </div>
      </div>
    </footer>
  );
}
