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
  const clsLine =
    "flex items-center gap-2 text-lg lg:text-2xl justify-center lg:justify-start [&>svg]:text-2xl";

  return (
    <section className="px-6 py-4">
      <div className="text-white space-y-16 text-center lg:text-left">
        <div className="space-y-3">
          <h2 className="text-2xl lg:text-3xl font-bold uppercase">
            Kde nás najdete
          </h2>
          <div className={clsLine}>
            <PiYoutubeLogo />
            <a
              href="http://youtube.com/@smyccem"
              className="link"
              target="_blank"
            >
              Youtube
            </a>
          </div>
          <div className={clsLine}>
            <PiFacebookLogo />
            <a
              href="http://facebook.com/smyccem"
              className="link"
              target="_blank"
            >
              Facebook
            </a>
          </div>
          <div className={clsLine}>
            <PiInstagramLogo />
            <a
              href="http://instagram.com/smyccem"
              className="link"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl lg:text-3xl font-bold uppercase">
            Booking &ndash; Alžběta Randusová
          </h2>
          <div className={clsLine}>
            <PiEnvelope />
            <a href="mailto:alzbeta.randusova@gmail.com" className="link">
              alzbeta.randusova@gmail.com
            </a>
          </div>
          <div className={clsLine}>
            <PiPhone />
            <a href="tel:+420734465679" className="link">
              +420 734 465 679
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl lg:text-3xl font-bold uppercase">
            Pro pořadatele
          </h2>
          <div className={clsLine}>
            <PiGoogleDriveLogo />
            <a
              href="https://drive.google.com/drive/folders/1tMKG5XhCWe-H-izHxzDAe-r-WiDSWXwK"
              className="link"
              target="_blank"
            >
              Press kit, fotografie, anotace
            </a>
          </div>
          <div className={clsLine}>
            <span>
              <PiGoogleDriveLogo />
            </span>
            <a
              href="https://drive.google.com/drive/u/0/folders/1OPhOa4qAp1tpiipcRtfV0gXinJRdj0f0"
              className="link"
              target="_blank"
            >
              Technický rider, repertoárový list
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
