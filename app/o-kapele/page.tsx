import HeadingMobile from "app/components/typography";
import React from "react";
import { PiGoogleDriveLogo } from "react-icons/pi";

export const metadata = {
  title: "O projektu",
  description: "O projektu Smyčcem",
};

export default function Page() {
  const clsLine =
    "flex items-center gap-2 text-lg lg:text-2xl justify-center lg:justify-start [&>svg]:text-2xl";

  return (
    <section className="px-6 py-4">
      <HeadingMobile>O projektu</HeadingMobile>
      <div className="text-xl lg:text-2xl font-medium max-w-xl text-white space-y-8 leading-9">
        <h1 className="text-4xl">Trhni si smyčcem</h1>
        <p>
          Hrajeme pro různé příležitosti, spíše k poslechu než k tanci. Jsme
          hudební skupina s vlastní tvorbou.
        </p>
        <p>
          Kapela vznikla v roce 2022 a postupně se rozrostla až na 8 členů,
          vystupujeme v různých sestavách i s hosty. Máme klasické nástroje a
          naše písně spadají do mnoha žánrů.
        </p>
        <p>
          Poetika čerpáme z rozervaného Českého severu a magické reality
          pražských Nuslí. Inspirují nás sociální a literární témata, hrajeme
          pro radost i na protest.
        </p>
        <p>
          Máme blízko k divadlu, poezii, vyprávění, architektuře, lidem
          duchovním i světským.
        </p>
        <p>
          Pokud to prostory umožňují, dokážeme hrát zcela akusticky. Zvládne ale
          také velká podia pod širým nebem kompletně ozvučeni. Hrajeme na ulici,
          v kostelích, kavárnách a barech.
        </p>
      </div>
    </section>
  );
}
