import React from "react";
import { PiGoogleDriveLogo } from "react-icons/pi";
import PhotoGallery from "app/components/photoGallery";

export default function About() {
  return (
    <section
      id="o-kapele"
      className="scroll-mt-8 px-6 py-16 lg:scroll-mt-4 lg:px-24 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-2xl">
          <h2 className="mt-3 font-display text-4xl leading-[0.95] text-stone-50 lg:text-6xl">
            <span className="italic text-accent-soft">O</span>{" "}
            <span className="font-medium">kapele</span>
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-8 text-stone-100/90 lg:text-xl lg:leading-9">
            <p>
              Hrajeme pro různé příležitosti, spíše k poslechu než tanci. Jsme
              hudební skupina s vlastní tvorbou.
            </p>
            <p>
              Kapela vznikla v roce 2022 a postupně se rozrostla až na 8
              členů, vystupujeme v různých sestavách i s hosty. Máme klasické
              nástroje a naše písně spadají do mnoha žánrů.
            </p>
            <p>
              Poetiku čerpáme z rozervaného Českého severu a magické reality
              pražských Nuslí. Inspirují nás sociální a literární témata,
              hrajeme pro radost i na protest.
            </p>
            <p>
              Máme blízko k divadlu, poezii, vyprávění, architektuře, lidem
              duchovním i světským.
            </p>
            <p>
              Pokud to prostory umožňují, dokážeme hrát zcela akusticky.
              Zvládne ale také velká podia pod širým nebem kompletně
              ozvučeni. Hrajeme na ulici, v galeriích, divadlech, kavárnách a
              barech.
            </p>
          </div>

          <a
            href="https://drive.google.com/drive/folders/1tMKG5XhCWe-H-izHxzDAe-r-WiDSWXwK"
            target="_blank"
            className="mt-10 inline-flex h-10 items-center gap-2 border border-stone-100/40 px-4 text-[11px] uppercase tracking-[0.25em] text-stone-100 transition-all hover:border-accent hover:bg-accent hover:text-black"
          >
            <PiGoogleDriveLogo className="text-base" />
            Press kit, fotografie, anotace
          </a>
        </div>

        <PhotoGallery />
      </div>
    </section>
  );
}
