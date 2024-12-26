import React from "react";
import {
  PiEnvelope,
  PiFacebookLogo,
  PiGoogleDriveLogo,
  PiInstagramLogo,
  PiPhone,
  PiYoutubeLogo,
} from "react-icons/pi";
import FormSubscription from "../components/FormSubscription";
import { useSearchParams } from "next/navigation";

export const metadata = {
  title: "Novinky",
  description:
    "Dozvíte se kde a kdy hrajeme, co je nového na sítích, co nás baví a co pro vás chystáme",
};

export default function Page() {
  return (
    <section className="px-6 py-4">
      <div className="text-white space-y-16 text-center lg:text-left">
        <div className="space-y-3">
          <h2 className="text-2xl lg:text-3xl font-bold uppercase">
            Blažejův zpravodaj
          </h2>

          <FormSubscription />

          <h3 className="mt-8 text-1xl lg:text-2xl font-bold uppercase">
            Posíláme občasné shrnutí:
          </h3>
          <ul>
            <li>Kde budeme hrát</li>
            <li>Co se nového chystá</li>
            <li>Kde jsou nové nahrávky</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
