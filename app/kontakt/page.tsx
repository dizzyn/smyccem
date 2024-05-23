import React from "react";

export const metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte nás ohledně koncertů, spolupráce nebo jiných dotazů.",
};

export default function Page() {
  return (
    <section className="px-6 py-4">
      <div className="text-2xl font-bold text-white space-y-8 leading-9">
        <ul>
          <li>https://www.facebook.com/smyccem Instagram:</li>
          <li>https://instagram.com/smyccem/ Youtube:</li>
          <li>https://www.youtube.com/@smyccem</li>
        </ul>

        <p>Booking: alzbeta.randusova@gmail.com / +420 734 465 679</p>

        <a href="https://drive.google.com/drive/folders/1tMKG5XhCWe-H-izHxzDAe-r-WiDSWXwK">
          [Press kit]
        </a>

        <a href="https://drive.google.com/drive/u/0/folders/1OPhOa4qAp1tpiipcRtfV0gXinJRdj0f0">
          [Zapojení]
        </a>
      </div>
    </section>
  );
}
