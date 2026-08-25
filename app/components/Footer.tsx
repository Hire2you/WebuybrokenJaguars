import Image from "next/image";
import { FOOTER_LINKS } from "./navLinks";

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
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
            Quick links
          </h2>
          <ul className="mt-4 space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Phone [placeholder number]</li>
            <li>Email [placeholder email]</li>
            <li>Hours [placeholder]</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
            Coverage
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            DVLA registered. Buying Jaguars across mainland UK.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs leading-relaxed text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© [year] We Buy Broken Jaguars. All rights reserved.</p>
          <p>
            We Buy Broken Jaguars is a trading name of [Company Ltd].
            [Placeholder company reg and address].
          </p>
        </div>
      </div>
    </footer>
  );
}
