'use client';

import { usePathname } from 'next/navigation';
import Concerts from './concerts';
import classNames from 'classnames';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div
      className={classNames(
        'grid w-full islate z-10 overflow-hidden',
        pathname === '/' && 'grid-rows-[auto_48px] pb-12'
      )}
    >
      <div className="overflow-y-scroll py-16">{children}</div>
      {pathname === '/' && <Concerts />}
    </div>
  );
}
