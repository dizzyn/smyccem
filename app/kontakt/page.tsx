import React from "react";
import {
  PiEnvelope,
  PiFacebookLogo,
  PiGoogleDriveLogo,
  PiInstagramLogo,
  PiPhone,
  PiYoutubeLogo,
} from "react-icons/pi";

export const metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte nás ohledně koncertů, spolupráce nebo jiných dotazů.",
};

export default function Page() {
  return (
    <section className="px-6 py-4">
      <div className="text-white space-y-16 text-center lg:text-left">
        <div className="space-y-3">
          <h2 className="text-2xl lg:text-3xl font-bold uppercase">
            Kde nás najdete
          </h2>
          <p className="flex items-center gap-2 text-lg lg:text-2xl justify-center lg:justify-start">
            <span>
              <PiYoutubeLogo className="w-6 h-6" />
            </span>
            <a
              href="http://youtube.com/@smyccem"
              className="hover:underline decoration-dotted underline-offset-4"
            >
              Youtube
            </a>
          </p>
          <p className="flex items-center gap-2 text-lg lg:text-2xl justify-center lg:justify-start">
            <span>
              <PiFacebookLogo className="w-6 h-6" />
            </span>
            <a
              href="http://facebook.com/smyccem"
              className="hover:underline decoration-dotted underline-offset-4"
            >
              Facebook
            </a>
          </p>
          <p className="flex items-center gap-2 text-lg lg:text-2xl justify-center lg:justify-start">
            <span>
              <PiInstagramLogo className="w-6 h-6" />
            </span>
            <a
              href="http://instagram.com/smyccem"
              className="hover:underline decoration-dotted underline-offset-4"
            >
              Instagram
            </a>
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl lg:text-3xl font-bold uppercase">
            Booking &ndash; Alžběta Randusová
          </h2>
          <p className="flex items-center gap-2 text-lg lg:text-2xl justify-center lg:justify-start">
            <span>
              <PiEnvelope className="w-6 h-6" />
            </span>
            <a
              href="mailto:alzbeta.randusova@gmail.com"
              className="hover:underline decoration-dotted underline-offset-4"
            >
              alzbeta.randusova@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2 text-lg lg:text-2xl justify-center lg:justify-start">
            <span>
              <PiPhone className="w-6 h-6" />
            </span>
            <a
              href="tel:+420734465679"
              className="hover:underline decoration-dotted underline-offset-4"
            >
              +420 734 465 679
            </a>
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl lg:text-3xl font-bold uppercase">
            Pro pořadatele
          </h2>
          <p className="flex items-center gap-2 text-lg lg:text-2xl justify-center lg:justify-start">
            <span>
              <PiGoogleDriveLogo className="w-6 h-6" />
            </span>
            <a
              href="https://drive.google.com/drive/folders/1tMKG5XhCWe-H-izHxzDAe-r-WiDSWXwK"
              className="hover:underline decoration-dotted underline-offset-4"
            >
              Press kit
            </a>
          </p>
          <p className="flex items-center gap-2 text-lg lg:text-2xl justify-center lg:justify-start">
            <span>
              <PiGoogleDriveLogo className="w-6 h-6" />
            </span>
            <a
              href="https://drive.google.com/drive/u/0/folders/1OPhOa4qAp1tpiipcRtfV0gXinJRdj0f0"
              className="hover:underline decoration-dotted underline-offset-4"
            >
              Technický rider, repertoárový list
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
