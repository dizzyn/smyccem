import HeadingMobile from "app/components/typography";
import React from "react";

export const metadata = {
  title: "O projektu",
  description: "O projektu Smyčcem",
};

export default function Page() {
  return (
    <section className="px-6 py-4">
      <HeadingMobile>O projektu</HeadingMobile>
      <div className="text-xl lg:text-2xl font-medium max-w-xl text-white space-y-8 leading-9">
        <p>
          Trhni si smyčcem je hudební skupina s vlastní tvorbou. Hrajeme pro
          různé příležitosti, spíše k poslechu než k tanci.
        </p>
        <p>
          Kapela vznikla v roce 2022 jako sextet, vystupujeme v různých
          sestavách i s hosty. Máme klasické nástroje a naše písně spadají pod
          mnoho žánrů.
        </p>
        <p>
          Poetika čerpáme z rozervaného Českého severu a magické reality
          pražských Nuslí. Inspirují nás sociální a literární témata, hrajeme
          pro radost i na protest.
        </p>
        <p>
          Naše hudba se nejlépe hodí k různým kulturním příležitostem, máme
          blízko k divadlu, poezii, vyprávění, architektuře, komunitám a lidem
          duchovním i světským.
        </p>
        <p>
          Pokud to prostory umožňují, dokážeme hrát bez ozvučení. Zvládne ale
          také velká podia pod širým nebem.
        </p>
      </div>
    </section>
  );
}
