'use client';
import { Link } from 'next-view-transitions';
import React from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const Item = ({ label, slug }: { label: string; slug: string }) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={'/' + slug}
        className="group block pr-8 text-white uppercase font-bold text-5xl "
      >
        <span
          className={classNames(
            'group-hover:w-32 group-hover:-ml-20 duration-500 transition-all w-0 h-[35px] bg-white inline-flex items-center justify-center mr-0 group-hover:mr-4 opacity-0 group-hover:opacity-100',
            pathname.indexOf(slug) > -1 && 'w-32 -ml-20 mr-4 opacity-100'
          )}
        />
        {label}
      </Link>
    </li>
  );
};
export default function Navbar() {
  return (
    <div className="flex md:flex-col justify-between isolate z-10 pl-16 py-16 sticky top-0">
      <div className="uppercase inline-block text-2xl tracking-wide relative text-white font-bold">
        <Link href="/">Smyčcem</Link>
      </div>
      <div className="hidden md:block">
        <ul className="space-y-5">
          <Item label="Hudba" slug="hudba" />
          <Item label="O projektu" slug="o-projektu" />
          <Item label="Kontakt" slug="kontakt" />
        </ul>
      </div>
    </div>
  );
}
