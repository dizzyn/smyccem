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
        <div className="space-y-3">
          {/* <img src="/zpravodaj.svg" /> */}
          <FormSubscription />
        </div>
      </div>
    </section>
  );
}
