import React from "react";
import {
  PiEnvelope,
  PiFacebookLogo,
  PiGoogleDriveLogo,
  PiInstagramLogo,
  PiPhone,
  PiYoutubeLogo,
} from "react-icons/pi";

const linkCls =
  "flex items-center gap-2 text-lg text-stone-100 transition-colors hover:text-accent [&>svg]:text-xl";

export default function ContactSection() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-8 px-6 py-16 lg:scroll-mt-4 lg:px-24 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl leading-[0.95] text-stone-50 lg:text-6xl">
          Kontakt
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone-300/80">
              Kde nás najdete
            </p>
            <div className="space-y-3">
              <a
                href="http://youtube.com/@smyccem"
                target="_blank"
                className={linkCls}
              >
                <PiYoutubeLogo />
                Youtube
              </a>
              <a
                href="http://facebook.com/smyccem"
                target="_blank"
                className={linkCls}
              >
                <PiFacebookLogo />
                Facebook
              </a>
              <a
                href="http://instagram.com/smyccem"
                target="_blank"
                className={linkCls}
              >
                <PiInstagramLogo />
                Instagram
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone-300/80">
              Booking &ndash; Alžběta Randusová
            </p>
            <div className="space-y-3">
              <a
                href="mailto:alzbeta.randusova@gmail.com"
                className={linkCls}
              >
                <PiEnvelope />
                alzbeta.randusova@gmail.com
              </a>
              <a href="tel:+420734465679" className={linkCls}>
                <PiPhone />
                +420 734 465 679
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone-300/80">
              Pro pořadatele
            </p>
            <div className="space-y-3">
              <a
                href="https://drive.google.com/drive/folders/1tMKG5XhCWe-H-izHxzDAe-r-WiDSWXwK"
                target="_blank"
                className={linkCls}
              >
                <PiGoogleDriveLogo />
                Press kit, fotografie, anotace
              </a>
              <a
                href="https://drive.google.com/drive/u/0/folders/1OPhOa4qAp1tpiipcRtfV0gXinJRdj0f0"
                target="_blank"
                className={linkCls}
              >
                <PiGoogleDriveLogo />
                Technický rider, repertoárový list
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
