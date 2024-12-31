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
import classNames from "classnames";
import Image from "next/image";

export const metadata = {
  title: "Novinky",
  description:
    "Dozvíte se kde a kdy hrajeme, co je nového na sítích, co nás baví a co pro vás chystáme",
};

export default function Page() {
  return (
    <section className="px-6 py-4">
      <div className="text-white space-y-16 text-center lg:text-left">
        <div className="space-y-3 w-[400px] max-w-full">
          <img src="/zpravodaj.svg" />
          <FormSubscription />

          <h3 className="mt-8 text-lg lg:text-1xl font-bold uppercase">
            Posíláme zhruba jednou do měsíce
          </h3>
          <ul className="list-disc list-inside">
            <li>Kde budeme hrát</li>
            <li>Co se nového chystá</li>
            <li>Nějaké ty drby a zajímavosti</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
