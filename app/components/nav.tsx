"use client";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { PiFacebookLogo, PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";

const navItems = [
  {
    label: "O kapele",
    slug: "o-kapele",
    href: "/#o-kapele",
  },
  {
    label: "Hudba & Texty",
    slug: "hudba",
    href: "/#hudba",
  },
  {
    label: "Video",
    slug: "hudba",
    href: "/#video",
  },
  {
    label: "Koncerty",
    slug: "koncerty",
    href: "/#koncerty",
  },
  {
    label: "Kontakt",
    slug: "kontakt",
    href: "/#kontakt",
  },
];

const SocialMediaLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="h-10 w-10 shrink-0 flex items-center justify-center text-stone-100 transition-all hover:bg-accent hover:text-black"
    >
      {children}
    </Link>
  );
};

const Item = ({
  label,
  slug,
  href,
  closeMenu,
}: {
  label: string;
  slug: string;
  href?: string;
  closeMenu: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname.indexOf(slug) > -1;
  return (
    <li>
      <Link
        href={href ?? `/${slug}`}
        onClick={closeMenu}
        className={classNames(
          "group relative inline-block font-display text-4xl lg:text-6xl whitespace-nowrap",
          isActive ? "text-accent" : "text-stone-100"
        )}
      >
        {label}
        <span
          className={classNames(
            "absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 bg-accent transition-all duration-300",
            isActive ? "w-full" : "w-0 group-hover:w-full"
          )}
        />
      </Link>
    </li>
  );
};

const NavItems = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <ul className="flex flex-col items-center gap-6 lg:gap-8">
      {navItems.map((item) => (
        <Item
          key={item.label}
          label={item.label}
          slug={item.slug}
          href={item.href}
          closeMenu={closeMenu}
        />
      ))}
    </ul>
  );
};

function SocialLinks() {
  const cls = "w-6 h-6";
  return (
    <>
      <SocialMediaLink href="https://www.instagram.com/smyccem/">
        <PiInstagramLogo className={cls} />
      </SocialMediaLink>
      <SocialMediaLink href="https://m.facebook.com/smyccem">
        <PiFacebookLogo className={cls} />
      </SocialMediaLink>
      <SocialMediaLink href="http://youtube.com/@smyccem">
        <PiYoutubeLogo className={cls} />
      </SocialMediaLink>
    </>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const wrapper = document.getElementById("wrapper");

    const handleScroll = () => {
      setIsScrolled((wrapper?.scrollTop && wrapper.scrollTop > 0) || false);
    };

    if (wrapper) {
      wrapper.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={classNames(
          "print:hidden fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 lg:px-10 lg:py-6 transition-colors duration-300",
          isScrolled && !isMenuOpen && "bg-black/80 backdrop-blur-sm"
        )}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="whitespace-nowrap font-display leading-none text-lg lg:text-xl"
        >
          <span className="italic text-accent-soft">Trhni si</span>{" "}
          <span className="font-medium text-stone-100">smyčcem</span>
        </Link>

        <div className="z-40 flex items-center gap-2">
          <div className="hidden gap-1 sm:flex">
            <SocialLinks />
          </div>
          <button
            className="flex h-10 cursor-pointer items-center border border-stone-100/40 px-4 text-[11px] uppercase tracking-[0.25em] text-stone-100 transition-all hover:border-accent hover:bg-accent hover:text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Zavřít" : "Menu"}
          </button>
        </div>
      </header>

      <div
        className={classNames(
          "fixed inset-0 z-20 flex flex-col items-center justify-center gap-10 bg-black/85 backdrop-blur-md transition-opacity duration-300 print:hidden",
          isMenuOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <NavItems closeMenu={closeMenu} />
        <div className="flex gap-2 sm:hidden">
          <SocialLinks />
        </div>
      </div>
    </>
  );
}
