import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-jet-black py-3 md:py-5">
      <Container>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            aria-label="We Buy Broken Jaguars — home"
            className="flex shrink-0 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plate-yellow"
          >
            <Image
              src="/logo.webp"
              alt="We Buy Broken Jaguars"
              width={1000}
              height={500}
              sizes="(max-width: 768px) 112px, 160px"
              className="h-14 w-auto sm:h-16 md:h-20"
            />
          </Link>

          <HeaderMenu />
        </div>
      </Container>
    </header>
  );
}
