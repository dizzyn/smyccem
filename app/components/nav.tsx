"use client";
import { Link } from "next-view-transitions";
import React, { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import { PiFacebookLogo, PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";

const navItems = [
  {
    label: "Hudba",
    slug: "hudba",
  },
  {
    label: "Koncerty",
    slug: "koncerty",
  },
  {
    label: "O projektu",
    slug: "o-projektu",
  },
  {
    label: "Kontakt",
    slug: "kontakt",
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
      className="w-10 shrink-0 h-10 flex items-center justify-center hover:bg-white hover:text-black text-white transition-all"
    >
      {children}
    </Link>
  );
};

const Item = ({
  label,
  slug,
  closeMenu,
}: {
  label: string;
  slug: string;
  closeMenu: () => void;
}) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={`/${slug}`}
        onClick={closeMenu}
        className="group flex items-center justify-center lg:block lg:pr-8 text-white uppercase font-bold text-3xl lg:text-4xl xl:text-5xl whitespace-nowrap "
      >
        <span
          className={classNames(
            "hidden lg:group-hover:w-20 xl:group-hover:w-32 lg:group-hover:-ml-16 xl:group-hover:-ml-20 duration-500 transition-all w-0 lg:h-[26px] xl:h-[35px] bg-white lg:inline-flex items-center justify-center mr-0 group-hover:mr-4 opacity-0 group-hover:opacity-100",
            pathname.indexOf(slug) > -1 &&
              "lg:w-20 xl:w-32 w-12 lg:-ml-16 xl:-ml-20 mr-4 opacity-100"
          )}
        />
        {label}
      </Link>
    </li>
  );
};

const NavItems = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <ul className="space-y-5 lg:space-y-3 xl:space-y-5">
      {navItems.map((item) => (
        <Item
          key={item.slug}
          label={item.label}
          slug={item.slug}
          closeMenu={closeMenu}
        />
      ))}
    </ul>
  );
};

function SocialLinks() {
  return (
    <>
      <SocialMediaLink href="https://www.instagram.com/smyccem/">
        <PiInstagramLogo className="w-7 h-7" />
      </SocialMediaLink>
      <SocialMediaLink href="https://m.facebook.com/smyccem">
        <PiFacebookLogo className="w-7 h-7" />
      </SocialMediaLink>
      <SocialMediaLink href="http://youtube.com/@smyccem">
        <PiYoutubeLogo className="w-7 h-7" />
      </SocialMediaLink>
    </>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathName = usePathname();

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

  return (
    <>
      <header
        className={classNames(
          "p-6 lg:h-full print:hidden h-auto border-b-2 lg:border-none border-dashed border-white/20 lg:pl-12 lg:bg-transparent transition-all lg:backgrdop-blur-none xl:pl-16 lg:py-16 z-20 flex lg:flex-col sticky top-0 items-center justify-between lg:justify-between lg:items-start",
          isScrolled &&
            "bg-black/80 backdrop-blur-sm border-black/80 border-solid lg:backdrop-blur-[0]"
        )}
      >
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="group flex items-center justify-center lg:pr-8"
        >
          <span
            className={classNames(
              "hidden lg:group-hover:w-20 xl:group-hover:w-32 lg:group-hover:-ml-16 xl:group-hover:-ml-20 duration-500 transition-all w-0 lg:h-16 xl:h-16 bg-white lg:inline-flex items-center justify-center mr-0 group-hover:mr-4 opacity-0 group-hover:opacity-100"
            )}
          />
          <span className="inline-flex flex-col uppercase text-white font-bold whitespace-nowrap">
            <span className="text-sm lg:text-base xl:text-lg">Trhni si</span>
            <span className="text-2xl lg:text-3xl xl:text-4xl">Smyčcem</span>
          </span>
        </Link>
        <div
          className={classNames(
            "hidden bg-transparent items-start justify-start lg:block relative"
          )}
        >
          <div className="flex mb-6 gap-2">
            <SocialLinks />
          </div>
          <NavItems closeMenu={() => setIsMenuOpen(false)} />
        </div>
        {pathName != "/" && (
          <button
            className="lg:hidden z-20 bg-white py-2 px-3 font-bold cursor-pointer text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Zavřít" : "Menu"}
          </button>
        )}
      </header>
      <div
        className={classNames(
          "items-center lg:hidden justify-center",
          isMenuOpen || pathName == "/"
            ? "z-10 flex flex-col gap-4 bg-black/20 absolute backdrop-blur-md left-0 right-0 bottom-0 top-0 "
            : "hidden"
        )}
      >
        <NavItems closeMenu={() => setIsMenuOpen(false)} />
        <div className="flex gap-2">
          <SocialLinks />
        </div>
      </div>
    </>
  );
}
