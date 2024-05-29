import { ReactNode } from "react";

function HeadingMobile({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-4xl uppercase pb-4 font-bold lg:hidden">{children}</h2>
  );
}

export default HeadingMobile;
