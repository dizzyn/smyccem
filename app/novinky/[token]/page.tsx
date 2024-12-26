import React, { Suspense, use } from "react";
import Validator from "./Validator";

export const metadata = {
  title: "Novinky",
  description:
    "Dozvíte se kde a kdy hrajeme, co je nového na sítích, co nás baví a co pro vás chystáme",
};

interface Params {
  params: Promise<{ token: string }>;
}

export default function Page({ params }: Params) {
  const { token } = use(params);

  return (
    <section className="px-6 py-4">
      <div className="text-white space-y-16 text-center lg:text-left">
        <div className="space-y-3">
          <h2 className="text-2xl lg:text-3xl font-bold uppercase">
            Potvrzení odběru novinek
          </h2>
          <Suspense fallback="...">
            <Validator token={token} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
